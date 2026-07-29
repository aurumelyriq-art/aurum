import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "dotenv";
import fs from "node:fs";

config({ path: ".env.local" });

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CF_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const GOLD_PALETTE =
  "warm gold (#d9b45c) and deep charcoal black (#080706) color grading, ivory highlights";

const images = [
  {
    slug: "home-hero",
    width: 1600,
    height: 900,
    prompt: `Cinematic aerial twilight view of a luxury African resort destination built into a working plantation landscape, infinity lagoon reflecting golden-hour light, palm and cocoa tree canopy, soft architectural lighting along pathways, ${GOLD_PALETTE}, ultra-wide, photorealistic, no people in frame, no text or logos`,
  },
  {
    slug: "ara-farm-hero",
    width: 1600,
    height: 900,
    prompt: `Golden-hour aerial concept render of a farm-resort destination in Nigeria, cocoa and oil palm plantation rows leading to a cluster of low-rise guest pavilions and a lagoon-style pool, canopy glamping tents visible in tree line, ${GOLD_PALETTE}, photorealistic architectural render, no text`,
  },
  {
    slug: "living-farm-trail",
    width: 1024,
    height: 1024,
    prompt: `Wide dirt path through an organized cocoa and plantain plantation at golden hour, dappled light through canopy, a few wooden trail markers, ${GOLD_PALETTE}, no people, photorealistic`,
  },
  {
    slug: "harvest-table",
    width: 1024,
    height: 1024,
    prompt: `Long wooden communal dining table set outdoors under string lights at dusk, farm produce as centerpiece, warm ambient glow, African plantation setting in background, ${GOLD_PALETTE}, photorealistic, no people`,
  },
  {
    slug: "waterfront-adventure",
    width: 1024,
    height: 1024,
    prompt: `Calm lagoon-style waterfront at a resort destination, kayaks resting on a wooden dock, golden hour light, lush tropical tree line, ${GOLD_PALETTE}, photorealistic`,
  },
  {
    slug: "kids-splash-zone",
    width: 1024,
    height: 1024,
    prompt: `Bright playful outdoor water-play area with small slides and splash features, empty of people, morning light, lush landscaping, ${GOLD_PALETTE}, photorealistic architectural render`,
  },
  {
    slug: "canopy-glamping",
    width: 1024,
    height: 1024,
    prompt: `Elevated glamping tents built into tree canopy overlooking a plantation valley at sunset, warm interior lighting glowing through canvas, ${GOLD_PALETTE}, photorealistic`,
  },
  {
    slug: "festival-grounds",
    width: 1024,
    height: 1024,
    prompt: `Open-air festival lawn at dusk with string lighting, small stage structure, string-lit trees, empty of crowd, ${GOLD_PALETTE}, warm inviting atmosphere, photorealistic`,
  },
  {
    slug: "category-theme-park",
    width: 1024,
    height: 1024,
    prompt: `Elegant theme and adventure park attraction silhouette at golden hour, roller coaster structure and ride towers, ${GOLD_PALETTE}, cinematic, photorealistic, no people, no text`,
  },
  {
    slug: "category-water-park",
    width: 1024,
    height: 1024,
    prompt: `Luxury water park with slides and lagoon pools at golden hour, lush landscaping, ${GOLD_PALETTE}, cinematic, photorealistic, no people, no text`,
  },
  {
    slug: "category-family-entertainment",
    width: 1024,
    height: 1024,
    prompt: `Warm inviting family entertainment center exterior at dusk, glowing windows, modern architecture, ${GOLD_PALETTE}, cinematic, photorealistic, no people, no text`,
  },
  {
    slug: "category-farm-agritourism",
    width: 1024,
    height: 1024,
    prompt: `Working cocoa and oil palm plantation rows at golden hour with a distant farmhouse, ${GOLD_PALETTE}, cinematic, photorealistic, no people, no text`,
  },
  {
    slug: "category-festival",
    width: 1024,
    height: 1024,
    prompt: `Elegant outdoor festival grounds with string lighting and a stage at dusk, ${GOLD_PALETTE}, cinematic, photorealistic, no people, no text`,
  },
  {
    slug: "vision-editorial",
    width: 1200,
    height: 900,
    prompt: `Abstract architectural sketch-to-render transition, half hand-drawn gold linework, half photorealistic render, of a resort masterplan, on dark charcoal background, ${GOLD_PALETTE}, no text`,
  },
];

const manifest = [];

for (const img of images) {
  process.stdout.write(`Generating ${img.slug}... `);
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: img.prompt, steps: 8, width: img.width, height: img.height }),
    }
  );
  const data = await res.json();
  if (!data.success || !data.result?.image) {
    console.log("FAILED", JSON.stringify(data.errors));
    continue;
  }
  const buffer = Buffer.from(data.result.image, "base64");
  const key = `images/${img.slug}.jpg`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: "image/jpeg",
      CacheControl: "public, max-age=31536000, immutable",
    })
  );

  manifest.push({
    slug: img.slug,
    key,
    url: `https://pub-267b8fd70c0a4de6857e10cb2e8678f7.r2.dev/${key}`,
    prompt: img.prompt,
    width: img.width,
    height: img.height,
    generatedAt: new Date().toISOString(),
    model: "@cf/black-forest-labs/flux-1-schnell",
  });
  console.log(`OK (${buffer.length} bytes)`);
}

fs.writeFileSync("public/images/credits.json", JSON.stringify(manifest, null, 2));
console.log(`\nDone. ${manifest.length}/${images.length} images generated.`);

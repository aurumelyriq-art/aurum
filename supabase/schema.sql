-- AURUM ELYRIQ — initial schema
-- destinations: powers /destinations and /locations/[slug] instead of hard-coded HTML
create type destination_status as enum ('active', 'open', 'future');

create table if not exists destinations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  status destination_status not null default 'future',
  partner_name text,
  location text,
  summary text,
  hero_image_url text,
  created_at timestamptz not null default now()
);

alter table destinations enable row level security;

create policy "Public read access to destinations"
  on destinations for select
  using (true);

-- journal_posts: powers the "From the Journal" section
create table if not exists journal_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  tag text,
  title text not null,
  excerpt text,
  body_markdown text,
  published_at timestamptz
);

alter table journal_posts enable row level security;

create policy "Public read access to published journal posts"
  on journal_posts for select
  using (published_at is not null and published_at <= now());

-- inquiries: every contact/investor/partnership form submission
create type inquiry_type as enum ('general', 'investor', 'partnership');

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text,
  type inquiry_type not null default 'general',
  created_at timestamptz not null default now()
);

alter table inquiries enable row level security;
-- No public policies: inquiries are written only by the /api/inquiry Worker
-- using the service_role key, which bypasses RLS. No client-side reads or writes.

-- Seed the one destination we know about today.
insert into destinations (slug, name, status, partner_name, location, summary)
values (
  'ara-farm-resort',
  'ARA Farm & Resort',
  'active',
  'LORALAND',
  'Abeokuta, Nigeria',
  'A working farm reimagined as a destination — where cocoa, oil palm, and plantain plantations become the signature guest experience, not the scenery around it.'
)
on conflict (slug) do nothing;

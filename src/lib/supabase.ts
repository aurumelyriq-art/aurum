import { createClient } from "@supabase/supabase-js";

export type DestinationStatus = "active" | "open" | "future";

export type Destination = {
  id: string;
  slug: string;
  name: string;
  status: DestinationStatus;
  partner_name: string | null;
  location: string | null;
  summary: string | null;
  hero_image_url: string | null;
  created_at: string;
};

export type JournalPost = {
  id: string;
  slug: string;
  tag: string | null;
  title: string;
  excerpt: string | null;
  body_markdown: string | null;
  published_at: string | null;
};

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }
  return createClient(url, anonKey);
}

// Server-only: bypasses RLS. Never import this from a client component.
export function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(url, serviceRoleKey, { auth: { persistSession: false } });
}

export async function getDestination(slug: string): Promise<Destination | null> {
  const supabase = getSupabaseClient();
  const { data } = await supabase.from("destinations").select("*").eq("slug", slug).single();
  return data;
}

export async function getJournalPosts(limit = 3): Promise<JournalPost[]> {
  const supabase = getSupabaseClient();
  const { data } = await supabase
    .from("journal_posts")
    .select("*")
    .order("published_at", { ascending: true })
    .limit(limit);
  return data ?? [];
}

export const DESTINATION_STATUS_LABEL: Record<DestinationStatus, string> = {
  active: "In Development",
  open: "Open",
  future: "Future",
};

insert into journal_posts (slug, tag, title, excerpt, published_at)
values
  ('why-nigerias-farms-are-becoming-its-weekends', 'Market Insight', 'Why Nigeria''s Farms Are Becoming Its Weekends', 'What the rise of agritourism reveals about the next decade of African leisure travel.', now()),
  ('building-the-ara-farm-resort-framework', 'Company Update', 'Building the ARA Farm & Resort Framework', 'Inside the GATE approach — how we''re structuring our first concession with LORALAND.', now()),
  ('the-case-for-land-secured-partnerships', 'Perspective', 'The Case for Land-Secured Partnerships', 'What an earlier, unbuilt project taught us about sequencing land before capital.', now())
on conflict (slug) do nothing;

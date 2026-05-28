-- Run this in your Supabase SQL Editor

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  icon_name text not null default 'BookOpen',
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table courses enable row level security;

-- Allow anyone to read (public dashboard)
create policy "Public read access"
  on courses for select
  using (true);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns',       75, 'Code2'),
  ('Machine Learning Fundamentals', 42, 'BrainCircuit'),
  ('System Design at Scale',        88, 'Database'),
  ('Web Security & Cryptography',   30, 'Shield');

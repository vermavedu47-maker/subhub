import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function initDB() {
  // create users table if not exists
  await supabase.rpc('pg_exec', {
    sql: `
    create table if not exists users (
      id uuid primary key default gen_random_uuid(),
      email text unique not null,
      password text not null,
      role text default 'USER',
      created_at timestamp default now()
    );
    `
  }).catch((err) => {
    console.log("Table already exists or error:", err.message);
  });
}

export default supabase;

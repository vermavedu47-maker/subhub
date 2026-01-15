import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    // Create the table automatically if it doesn't exist
    await supabase.rpc("pg_exec", {
      sql: `
        create table if not exists users (
          id uuid primary key default gen_random_uuid(),
          email text unique not null,
          password text not null,
          role text default 'USER',
          created_at timestamp default now()
        );
      `
    }).catch(() => {});

    // Check if user exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.json({ success: false, message: "Email already exists" });
    }

    // Make your email Admin automatically
    const role = email === "dopevedu@gmail.com" ? "ADMIN" : "USER";

    // Insert new user
    await supabase.from("users").insert([{ email, password, role }]);

    return res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

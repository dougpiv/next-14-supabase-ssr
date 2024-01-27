"use server";
import { createBrowserClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function createSupabaseBrowserClient() {
  const cookieStore = cookies();

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

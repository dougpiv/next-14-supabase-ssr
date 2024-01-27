"use client";
import { Button } from "@/components/ui/button";
import createSupabaseBrowserClient from "@/lib/supabase/client";

export default function OAuthForm() {
  const supabase = createSupabaseBrowserClient();

  const loginWithGithub = async () => {
    (await supabase).auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth-server-action/callback`,
      },
    });
  };

  return (
    <Button className="w-full" onClick={loginWithGithub}>
      Login With Github
    </Button>
  );
}

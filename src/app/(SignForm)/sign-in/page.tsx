"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function SignInForm() {
  const handleEmailSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as { email: string, password: string };

    const { data, error } = await authClient.signIn.email({
      ...user,
      rememberMe: true
    });

    if (!user.email || !user.password) {
      console.error("Missing required fields", user);
      return;
    } else if (data) {
      console.log(data);
      redirect("/");
    } else if (error) {
      console.log(error);
      toast.error("Invalid email or password.");
    }
  };
  // Google sign in
  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success('Sign-In Successful');
    } else if (error) {
      toast.error(error.message ?? 'Sign in failed');
    }
  };

  return (
    <div className="mx-auto flex m-20 p-10 max-w-md flex-col gap-4 px-4 sm:gap-6 sm:px-0">
      <Card className="w-full p-12 bg-background/95 backdrop-blur rounded-lg shadow-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-amber-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground text-center">
            Creator Login
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground text-center leading-relaxed">
            Access your studio listings, reservations, and creator settings
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleEmailSignIn}>
            {/* Auto-fill credentials */}
            <div className="mb-6 flex items-center justify-between rounded-xl border border-background/10 bg-background/60 px-4 py-3 shadow-sm">
              <span className="text-sm font-medium text-foreground">Examiner Test Credentials</span>
              <button
                type="button"
                onClick={() => {
                  const email = document.getElementById("email") as HTMLInputElement;
                  const pass = document.getElementById("password") as HTMLInputElement;
                  if (email) email.value = "alex.creator@studiospace.io";
                  if (pass) pass.value = "password";
                }}
                className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-amber-600 transition-colors"
              >
                Auto-fill
              </button>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</FieldLabel>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">✉</span>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full rounded-xl border border-background/20 bg-background/80 px-10 py-3 text-sm text-foreground shadow-sm focus-visible:ring-amber-500/30"
                  />
                </div>
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</FieldLabel>
                  <Link href="#" className="ml-auto text-sm text-amber-500 hover:text-amber-600 hover:underline">Forgot your password?</Link>
                </div>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">🔒</span>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full rounded-xl border border-background/20 bg-background/80 px-10 py-3 text-sm text-foreground shadow-sm focus-visible:ring-amber-500/30"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const p = document.getElementById("password") as HTMLInputElement;
                      if (p) p.type = p.type === "password" ? "text" : "password";
                    }}
                    className="absolute right-3 top-2.5 text-xs text-muted-foreground hover:text-foreground"
                  >
                    👁
                  </button>
                </div>
              </Field>

              <Button
                type="submit"
                className="mt-2 w-full rounded-xl bg-amber-500 py-3.5 text-lg font-bold text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600 hover:shadow-amber-500/30 transition-all duration-200"
              >
                Sign In
              </Button>

              <Button
                onClick={handleGoogleSignIn}
                className="mt-2 w-full rounded-lg border border-amber-500 text-amber-500 text-sm font-medium py-3 hover:bg-amber-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                type="button"
              >
                Continue with Google
              </Button>

              <div className="mt-2 text-center text-sm text-muted-foreground">
                Don&apos;t have a creator account?{" "}
                <Link href="/sign-up" className="font-semibold text-amber-500 hover:text-amber-600 hover:underline">Register here</Link>
              </div>

              <FieldSeparator className="my-2 *:data-[slot=field-separator-content]:bg-card" />
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="text-amber-500 hover:underline">Terms of Service</Link> and{" "}
        <Link href="#" className="text-amber-500 hover:underline">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
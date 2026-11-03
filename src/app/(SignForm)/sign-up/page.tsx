"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const handleEmailSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as { name: string, image: string, email: string, password: string };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });
    if (!user.name || !user.email || !user.password) {
      console.error("Missing required fields", user);
      return;
    } else if (data) {
      console.log(data);
      redirect("/");
    } else if (error) {
      console.log(error);
    }
  };
  // Google sign up
    const handleGoogleSignUp = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });
        if (data) {
            toast.success('Sign-Up Successful');
        } else if (error) {
            toast.error(error.message ?? 'Sign-Up failed');
        }
    };

  return (
    <div className="mx-auto flex m-20 p-10 max-w-md flex-col gap-4 px-4 sm:gap-6 sm:px-0">
      <Card className="w-full p-12 bg-background/95 backdrop-blur rounded-lg shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground text-center">
            Creator Registration
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground text-center">
            Create your creator account to list studios and manage bookings
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleEmailSignUp}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="mb-1 text-sm font-medium text-muted-foreground">
                  Full Name
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="image" className="mb-1 text-sm font-medium text-muted-foreground">
                  Image URL
                </FieldLabel>
                <Input
                  id="image"
                  type="url"
                  name="image"
                  placeholder="Image Link"
                  required
                  className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email" className="mb-1 text-sm font-medium text-muted-foreground">
                  Email Address
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/20"
                />
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
                  placeholder="Create a secure password"
                  required
                  minLength={6}
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Password must be at least 6 characters long and include an uppercase and a lowercase letter."
                  className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/20"
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

              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  className="w-full bg-amber-500 text-white text-xl font-semibold rounded-lg py-3 hover:bg-amber-600 transition-colors duration-200"
                >
                  Sign Up
                </Button>
              </div>

              <Button
                onClick={handleGoogleSignUp}
                className="mt-2 w-full rounded-lg border border-amber-500 text-amber-500 text-sm font-medium py-3 hover:bg-amber-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
                type="button"
              >
                Continue with Google
              </Button>

              <FieldDescription className="text-center mt-4 text-sm text-muted-foreground">
                Already have an account? <a href="/sign-in" className="text-amber-500 hover:underline">Sign in</a>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-2 text-center text-xs sm:px-6 sm:text-sm mt-6">
        By clicking continue, you agree to our <a href="#" className="text-amber-500 hover:underline">Terms of Service</a> and <a href="#" className="text-amber-500 hover:underline">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
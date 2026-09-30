import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{" "}
            <Link href={ROUTES.signup} className="text-primary underline-offset-2 hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}

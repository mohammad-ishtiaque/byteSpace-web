import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Create an account",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={
          <>
            Already have an account?{" "}
            <Link href={ROUTES.login} className="text-primary underline-offset-2 hover:underline">
              Login
            </Link>
          </>
        }
      >
        <SignupForm />
      </AuthCard>
    </AuthShell>
  );
}

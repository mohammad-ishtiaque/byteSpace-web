"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SocialLogin from "@/components/auth/SocialLogin";
import useAuthForm from "@/hooks/useAuthForm";
import { validateLogin } from "@/lib/validation";
import { login } from "@/services/auth";

export default function LoginForm() {
  const { errors, formError, isSubmitting, clearError, handleSubmit } = useAuthForm({
    validate: validateLogin,
    submit: login,
  });

  return (
    <>
      <form noValidate onSubmit={handleSubmit} onChange={clearError} className="flex flex-col">
        <div className="flex flex-col gap-6">
          <Input
            id="login-email"
            name="email"
            type="email"
            label="Email"
            placeholder="designer@example.com"
            autoComplete="email"
            error={errors.email}
          />
          <Input
            id="login-password"
            name="password"
            type="password"
            label="Password"
            placeholder="********"
            autoComplete="current-password"
            error={errors.password}
          />
        </div>

        {formError && (
          <p role="alert" className="mt-6 text-body-xs text-red-600">
            {formError}
          </p>
        )}

        <Button type="submit" disabled={isSubmitting} className="mt-6 self-end">
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <SocialLogin className="mt-16 lg:mt-[72px]" />
    </>
  );
}

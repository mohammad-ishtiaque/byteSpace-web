"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useAuthForm from "@/hooks/useAuthForm";
import { validateSignup } from "@/lib/validation";
import { signup } from "@/services/auth";

export default function SignupForm() {
  const { errors, formError, isSubmitting, clearError, handleSubmit } = useAuthForm({
    validate: validateSignup,
    submit: signup,
  });

  return (
    <form noValidate onSubmit={handleSubmit} onChange={clearError} className="flex flex-col">
      <div className="flex flex-col gap-6">
        <Input
          id="signup-name"
          name="name"
          label="Full Name"
          placeholder="Jamie Davis"
          autoComplete="name"
          error={errors.name}
        />
        <Input
          id="signup-email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          autoComplete="email"
          error={errors.email}
        />
        <Input
          id="signup-password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          autoComplete="new-password"
          error={errors.password}
        />
      </div>

      {formError && (
        <p role="alert" className="mt-6 text-body-xs text-red-600">
          {formError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="mt-6 self-end">
        {isSubmitting ? "Creating account..." : "Continue"}
      </Button>
    </form>
  );
}

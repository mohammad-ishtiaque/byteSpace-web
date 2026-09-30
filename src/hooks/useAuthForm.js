"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { safeRedirectPath, saveUser } from "@/lib/session";

export default function useAuthForm({ validate, submit }) {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function clearError(event) {
    const { name } = event.target;
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const nextErrors = validate(values);
    const firstInvalidField = Object.keys(nextErrors)[0];

    setErrors(nextErrors);
    if (firstInvalidField) {
      form.elements.namedItem(firstInvalidField).focus();
      return;
    }

    setFormError("");
    setIsSubmitting(true);
    try {
      const { user } = await submit(values);
      saveUser(user);
      const next = new URLSearchParams(window.location.search).get("next");
      router.push(safeRedirectPath(next, ROUTES.home));
    } catch {
      setFormError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return { errors, formError, isSubmitting, clearError, handleSubmit };
}

import { ViewTransition } from "react";

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-grid">
      <ViewTransition>{children}</ViewTransition>
    </main>
  );
}

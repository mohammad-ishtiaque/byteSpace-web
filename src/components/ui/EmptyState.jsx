import Link from "next/link";

export default function EmptyState({ title, message, actionLabel, actionHref }) {
  return (
    <div className="rounded-3xl bg-shuttle-50 px-6 py-16 text-center">
      <p className="text-label-l font-medium">{title}</p>
      <p className="mt-2 text-body-m text-shuttle-700">
        {message}{" "}
        {actionHref && (
          <Link href={actionHref} className="font-medium text-primary underline-offset-2 hover:underline">
            {actionLabel}
          </Link>
        )}
      </p>
    </div>
  );
}

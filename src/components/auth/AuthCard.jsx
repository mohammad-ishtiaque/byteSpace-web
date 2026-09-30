export default function AuthCard({ eyebrow, title, footer, children }) {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 sm:px-16 sm:pt-[69px] sm:pb-10 lg:min-h-[779px]">
      <p className="text-body-m text-primary">{eyebrow}</p>
      <h1 className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-h2">
        {title}
      </h1>
      <div className="mt-8 sm:mt-10">{children}</div>
      <p className="mt-10 text-center text-body-m text-shuttle-700 lg:mt-auto lg:pt-10">{footer}</p>
    </div>
  );
}

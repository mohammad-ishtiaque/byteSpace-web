import Image from "next/image";

export default function TestimonialCard({ testimonial }) {
  const { name, role, avatar, quote } = testimonial;

  return (
    <figure className="flex flex-col rounded-3xl bg-white p-6">
      <Image src={avatar} alt="" width={80} height={80} className="size-20 rounded-full object-cover" />
      <figcaption className="mt-6">
        <p className="font-heading text-title font-semibold text-black">{name}</p>
        <p className="text-body-l text-primary">{role}</p>
      </figcaption>
      <blockquote className="mt-6 text-body-l text-shuttle-700">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </figure>
  );
}

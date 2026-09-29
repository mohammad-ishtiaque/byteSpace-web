import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section aria-labelledby="not-found-title" className="bg-grid pt-16 pb-24 md:pt-[100px] md:pb-[124px]">
          <Container className="flex flex-col items-center text-center">
            <p
              aria-hidden="true"
              className="bg-[linear-gradient(180deg,#d4fb20_45%,rgb(212_251_32/0.25)_100%)] bg-clip-text font-heading text-[clamp(8rem,33vw,30rem)] leading-[0.75] font-semibold tracking-[-0.03em] text-transparent"
            >
              404
            </p>
            <h1
              id="not-found-title"
              className="-mt-[0.4em] max-w-[960px] font-heading text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[3.5rem] lg:text-display"
            >
              The page you are looking for doesn&rsquo;t exist
            </h1>
            <p className="mt-8 text-body-m text-shuttle-100 sm:text-body-l md:mt-11">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Button href={ROUTES.home} className="mt-8">
              Back to Home
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

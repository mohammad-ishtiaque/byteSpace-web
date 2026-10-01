import { ViewTransition } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <ViewTransition>
          <div>{children}</div>
        </ViewTransition>
      </main>
      <Footer />
    </>
  );
}

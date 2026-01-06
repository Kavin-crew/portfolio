import { Timeline } from "@/app/_components/ui/Timeline";
import { Hero } from "@/app/_components/Hero";
import { NavbarDemo } from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-clip">
      <NavbarDemo />
      <main>
        <Hero />
        <Timeline />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

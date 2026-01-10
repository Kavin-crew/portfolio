import { Timeline } from "@/app/_components/ui/Timeline";
import { Hero } from "@/app/_components/Hero";
import { NavbarDemo } from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Milestone from "@/app/_components/Milestone";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-clip">
      <NavbarDemo />
      <main>
        <Hero />
        <Timeline />
        <Milestone />
      </main>
    </div>
  );
}

import { Timeline } from "@/app/_components/ui/Timeline";
import { navItems } from "@/app/_data/contents";
import { Hero } from "@/app/_components/Hero";
import { NavbarDemo } from "./_components/Navbar";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-clip">
      <NavbarDemo />
      <Hero />
      <Timeline />
    </div>
  );
}

import { Timeline } from "@/app/_components/ui/Timeline";
import { navItems } from "@/app/_data/contents";
import { NavbarDemo } from "./_components/Navbar";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-clip">
      <NavbarDemo />
      <Timeline />
    </div>
  );
}

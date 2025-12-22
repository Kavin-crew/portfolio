import { Timeline } from "@/app/_components/ui/Timeline";
// import { FloatingNavbar } from "@/app/_components/ui/FloatingNavbar";
import { navItems } from "@/app/_data/contents";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-clip">
      {/* <FloatingNavbar navItems={navItems} /> */}
      <Timeline />
    </div>
  );
}

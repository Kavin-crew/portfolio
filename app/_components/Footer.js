import Paragraph from "@/app/_components/Paragraph";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Paragraph>
          &copy; {currentYear} Kavin A. All rights reserved.
        </Paragraph>
      </div>
    </footer>
  );
}

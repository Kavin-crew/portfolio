export default function Paragraph({ children }) {
  return (
    <p className="mb-8 text-base font-normal text-zinc-600 dark:text-zinc-400 md:text-base">
      {children}
    </p>
  );
}

export default function Paragraph({ children, className }) {
  return (
    <p
      className={`mb-8 text-base font-normal text-zinc-600 dark:text-zinc-400 ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
}

export default function HeadingTertiary({ children, className }) {
  return (
    <h3
      className={`text-lg font-semibold text-zinc-800 dark:text-zinc-100 ${
        className || ""
      }`}
    >
      {children}
    </h3>
  );
}

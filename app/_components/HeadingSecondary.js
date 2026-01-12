export default function HeadingSecondary({ children, className }) {
  return (
    <h2
      className={`mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

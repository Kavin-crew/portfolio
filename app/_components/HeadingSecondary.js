export default function HeadingSecondary({ children, className }) {
  return (
    <h2
      className={`mb-8 text-2xl font-bold text-zinc-800 md:text-3xl dark:text-zinc-100 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

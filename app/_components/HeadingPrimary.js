export default function HeadingPrimary({ children, className }) {
  return (
    <h1
      className={`text-2xl font-bold text-zinc-800 md:text-3xl dark:text-zinc-100 ${
        className || ""
      }`}
    >
      {children}
    </h1>
  );
}

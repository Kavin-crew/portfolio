export default function HeadingQuaternary({ children, className }) {
  return (
    <h4
      className={`text-base font-semibold text-zinc-800 dark:text-zinc-100 ${
        className || ""
      }`}
    >
      {children}
    </h4>
  );
}

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { className, ...rest } = props;
  return (
    <input
      className={`bg-blueDark border-l-2 border-b-2 border-gray py-1 px-4 rounded ${className}`}
      {...rest}
    />
  );
}

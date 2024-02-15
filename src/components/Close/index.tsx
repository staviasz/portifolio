export default function Close(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button className="absolute z-20 top-5 right-6 -mt-4" {...props}>
      <span className="text-gray text-5xl">x</span>
    </button>
  );
}

export default function Hamburguer(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button className="space-y-2 absolute z-20 top-5 right-6" {...props}>
      <span className="block bg-gray w-9 h-1"></span>
      <span className="block bg-gray w-9 h-1"></span>
      <span className="block bg-gray w-9 h-1"></span>
    </button>
  );
}

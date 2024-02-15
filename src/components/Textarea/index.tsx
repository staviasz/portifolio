export default function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={`bg-blueDark border-l-2 border-b-2 border-gray py-1 px-4 rounded ${className}`}
      {...rest}
    ></textarea>
  );
}

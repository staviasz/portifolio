interface ITag extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}
export default function Tag(props: ITag) {
  return (
    <span
      className={`relative z-10 block bg-blueDark border-2 border-gray py-1 px-4  rounded font-bold capitalize shadow-sm shadow-gray ${props.className}`}
    >
      {props.children}
    </span>
  );
}

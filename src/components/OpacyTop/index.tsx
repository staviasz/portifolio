interface IProps {
  bgColor?: string;
}

export default function OpacyTop({ bgColor }: IProps) {
  return (
    <div
      className={`h-20 fixed top-0 left-0 w-full z-[15] ${bgColor || "bg-blueDark"}`}
    ></div>
  );
}

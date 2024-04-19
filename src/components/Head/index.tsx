/* eslint-disable @next/next/no-head-element */
interface IHead {
  subTitle?: string;
}
export default function Head({ subTitle }: IHead) {
  const title = subTitle ? `Erick Staviasz - ${subTitle}` : "Erick Staviasz";

  return (
    <head>
      <title>{title}</title>
    </head>
  );
}

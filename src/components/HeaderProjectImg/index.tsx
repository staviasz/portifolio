export interface IHeaderProjectImg {
  title: string;
}

export default function HeaderProjectImg({ title }: IHeaderProjectImg) {
  const titleFormated = title.length >= 17 ? title.slice(0, 14) + "..." : title;
  return (
    <div className="bg-white flex items-center px-3 gap-3">
      <div className="flex items-center">
        <span className="inline-block lg:w-4 lg:h-4 w-2 h-2 bg-red-700 mr-2 rounded-full"></span>
        <span className="inline-block lg:w-4 lg:h-4 w-2 h-2 bg-yellow-500 mr-2 rounded-full"></span>
        <span className="inline-block lg:w-4 lg:h-4 w-2 h-2 bg-green-600 mr-2 rounded-full"></span>
      </div>
      <p className="text-blueDark w-full text-center -ml-7">{titleFormated}</p>
    </div>
  );
}

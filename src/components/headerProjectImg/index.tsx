interface IHeaderProjectImg {
  title: string;
}

export default function HeaderProjectImg({ title }: IHeaderProjectImg) {
  return (
    <div className="bg-white flex items-center px-3 rounded-t-md">
      <div className="flex items-center">
        <span className="inline-block w-4 h-4 bg-red-700 mr-2 rounded-full"></span>
        <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded-full"></span>
        <span className="inline-block w-4 h-4 bg-green-600 mr-2 rounded-full"></span>
      </div>
      <p className="text-blueDark w-full text-center -ml-7">{title}</p>
    </div>
  );
}

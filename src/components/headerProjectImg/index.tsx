export default function HeaderProjectImg() {
  return (
    <div className="bg-white flex items-center px-3">
      <div className="flex items-center">
        <span className="inline-block w-4 h-4 bg-red-700 mr-2 rounded-full"></span>
        <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded-full"></span>
        <span className="inline-block w-4 h-4 bg-green-600 mr-2 rounded-full"></span>
      </div>
      <p className="text-blueDark w-full text-center -ml-7">nome do projeto</p>
    </div>
  );
}

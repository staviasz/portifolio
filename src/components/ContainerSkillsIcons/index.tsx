import RenderIcon from "../RenderIcon";

export interface IContainerSkillsIcons {
  namesIcon: Array<string>;
}

export default function ContainerSkillsIcons({
  namesIcon,
}: IContainerSkillsIcons) {
  return (
    <div className="sm:p-10 pr-4 flex-wrap flex justify-center space-x-4 space-y-4">
      {namesIcon.map(nameIcon => (
        <div
          key={nameIcon}
          className="bg-shadowLigtgh first:mt-4 first:ml-4 sm:w-20 sm:h-16 p-4  rounded-md flex flex-col justify-center items-center text-gray"
        >
          <div className="sm:text-3xl text-4xl">
            <RenderIcon nomeIcone={nameIcon} />
          </div>
          <span className="text-xs sm:inline-block hidden capitalize mt-1">
            {nameIcon}
          </span>
        </div>
      ))}
    </div>
  );
}

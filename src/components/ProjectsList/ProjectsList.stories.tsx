import ProjectsList, { IProjectList } from ".";

export default {
  title: "ProjectsList",
  component: ProjectsList,
  args: {
    list: [
      {
        id: 1,
        name: "name",
        imagesUrls: [
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        techs: ["tech"],
      },
      {
        id: 2,
        name: "name",
        imagesUrls: [
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        techs: ["tech"],
      },
    ],
    route: "/route",
  },
  argTypes: {
    list: { type: "Array<IlistItem>" },
    route: { type: "string" },
  },
};

export const Template = (args: IProjectList) => {
  return (
    <div className="bg-blueDark min-h-screen p-14">
      <ProjectsList {...args} />
    </div>
  );
};

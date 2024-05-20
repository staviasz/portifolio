import ContainerMain, { IContainerMain } from ".";

export default {
  title: "ContainerMain",
  component: ContainerMain,
  args: {
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    route: "/route",
    pathPrev: "/prev",
    namePathPrev: "Prev",
    pathNext: "/next",
    namePathNext: "Next",
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
      {
        id: 3,
        name: "name",
        imagesUrls: [
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        techs: ["tech"],
      },
    ],
  },
};

export const Template = (args: IContainerMain) => {
  return (
    <div>
      <ContainerMain {...args} />
    </div>
  );
};

import ContainerButtonLinkProject, { IContainerButtonLinksProjects } from ".";

export default {
  title: "ContainerButtonLinkProject",
  component: ContainerButtonLinkProject,
  args: {
    linkCode: "https://link_code.com",
    linkDeploy: "https://link_deploy.com",
  },
};

export const Template = (args: IContainerButtonLinksProjects) => {
  return (
    <div className="bg-blueDark h-52 p-14">
      <ContainerButtonLinkProject {...args} />
    </div>
  );
};

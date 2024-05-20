import ChangPage, { IButton } from ".";

export default {
  title: "ChangPege",
  component: ChangPage,
  args: {
    changePage: "next",
    link: "/",
    children: "Next",
  },
};

export const Template = (args: IButton) => {
  return (
    <div>
      <ChangPage {...args} />
    </div>
  );
};

import HeaderProjectImg, { IHeaderProjectImg } from ".";

export default {
  title: "HeaderProjectImg",
  component: HeaderProjectImg,
  args: {
    title: "StoryBook",
  },
  argTypes: {
    title: { type: "string" },
  },
};

export const Template = (args: IHeaderProjectImg) => {
  return (
    <div className="bg-blueDark min-h-screen p-14">
      <HeaderProjectImg {...args} />
    </div>
  );
};

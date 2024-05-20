import Nav, { INav } from ".";

export default {
  title: "Nav",
  component: Nav,
  args: {
    listNav: ["about", "projects", "posts", "skills", "contact"],
    setIsOpen: () => {},
  },
  argTypes: {
    listNav: { type: "array" },
    setIsOpen: { type: "function" },
  },
};

export const Template = (args: INav) => {
  return (
    <div className="bg-blueDark min-h-screen flex items-center justify-center">
      <Nav {...args} />
    </div>
  );
};

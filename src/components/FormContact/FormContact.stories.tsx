import FormContact from ".";

export default {
  title: "FormContact",
  component: FormContact,
};

export const Template = (args: any) => {
  return (
    <div className="bg-blueDark p-40">
      <FormContact {...args} />
    </div>
  );
};

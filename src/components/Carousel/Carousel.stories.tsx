import ImageCarousel, { IImageCarrousel } from ".";

export default {
  title: "ImageCarousel",
  component: ImageCarousel,
  args: {
    images: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
    title: "Image Carousel",
  },
};

export const Template = (args: IImageCarrousel) => {
  return (
    <div className="bg-blueDark min-h-screen p-14">
      <ImageCarousel {...args} />
    </div>
  );
};

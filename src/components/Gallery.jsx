export const Gallery = ({
  data,

  currentIndex,

  prevImage,

  nextImage,

  handleIndex,
}) => {
  const currentProduct = data[currentIndex];

  return (
    <div className="relative">
      <img
        src={currentProduct.mainImage}
        alt="image-product"
        className="md:rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-between w-[90%] mx-auto md:static md:hidden">
        <img
          src="images/icon-previous.svg"
          alt="icon-previous"
          className="bg-white rounded-full p-3 size-10"
          onClick={prevImage}
        />

        <img
          src="images/icon-next.svg"
          alt="icon-next"
          className="bg-white rounded-full p-3 size-10"
          onClick={nextImage}
        />
      </div>

      <div className="md:grid md:grid-cols-4 md:gap-4 md:pt-5">
        {data.map((image, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={image.id}
              onClick={() => handleIndex(index)}
              className={`relative rounded-xl cursor-pointer overflow-hidden transition-all

${isActive ? "bg-orange-primary ring-2 ring-orange-primary" : "bg-white"}`}
            >
              <img
                src={image.thumbnail}
                alt="image-thumbnail"
                className={`w-full h-full object-cover transition-all duration-300

${isActive ? "opacity-30" : "opacity-100 hover:opacity-75"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

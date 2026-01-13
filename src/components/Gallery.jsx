export const Gallery = ({
  data,
  currentIndex,
  prevImage,
  nextImage,
  handleIndex,
  isModalOpen,
  toggleModal,
}) => {
  const currentProduct = data[currentIndex];

  return (
    <div className="relative">
      <div className="relative">
        <img
          src={currentProduct.mainImage}
          alt="image-product"
          className="md:rounded-md cursor-pointer w-full"
          onClick={!isModalOpen ? toggleModal : undefined}
        />

        <div
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-between mx-auto 
          ${
            isModalOpen
              ? "w-[110%] -left-[5%] md:flex md:absolute"
              : "w-[90%] left-1/2 -translate-x-1/2 md:hidden"
          }`}
        >
          <button
            onClick={prevImage}
            className="bg-white rounded-full p-3 size-12 flex items-center justify-center shadow-xl hover:text-orange-primary transition-colors hover:cursor-pointer"
          >
            <img
              src="images/icon-previous.svg"
              alt="previous"
              className="pr-1"
            />
          </button>

          <button
            onClick={nextImage}
            className="bg-white rounded-full p-3 size-12 flex items-center justify-center shadow-xl hover:text-orange-primary transition-colors hover:cursor-pointer"
          >
            <img src="images/icon-next.svg" alt="next" className="pl-1" />
          </button>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:pt-5">
        {data.map((image, index) => {
          const isActive = currentIndex === index;
          return (
            <div
              key={image.id}
              onClick={() => handleIndex(index)}
              className={`relative rounded-xl cursor-pointer overflow-hidden transition-all
                ${
                  isActive
                    ? "bg-orange-primary ring-2 ring-orange-primary"
                    : "bg-white"
                }`}
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

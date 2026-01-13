export const ProductInfo = ({
  quantity,
  addQuantity,
  subtractQuantity,
  addToCart,
}) => {
  return (
    <article className="space-y-4 pt-5 w-[90%] mx-auto xl:space-y-6">
      <p className="uppercase text-dark-grayish-blue font-bold text-xs tracking-widest">
        sneaker company
      </p>
      <h1 className="text-very-dark-blue text-3xl font-bold md:text-5xl">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex justify-between items-center md:flex-col md:items-start">
        <div className="flex items-center gap-4">
          <p className="text-very-dark-blue font-bold text-3xl">$125.00</p>
          <span className="text-orange-primary bg-orange-100 px-2 rounded-md font-bold">
            50%
          </span>
        </div>
        <p className="text-grayish-blue font-bold line-through">$250.00</p>
      </div>

      <div className="md:flex gap-5">
        <div className="flex w-full md:w-1/3 justify-between items-center bg-light-grayish-blue py-3 px-[5%] rounded-lg mb-4 md:mb-0">
          <button
            onClick={subtractQuantity}
            className="hover:opacity-60 transition-all"
          >
            <img src="images/icon-minus.svg" alt="minus" />
          </button>

          <p className="font-bold">{quantity}</p>

          <button
            onClick={addQuantity}
            className="hover:opacity-60 transition-all"
          >
            <img src="images/icon-plus.svg" alt="plus" />
          </button>
        </div>

        <button
          onClick={addToCart}
          className="bg-orange-primary flex w-full md:w-2/3 items-center justify-center gap-4 py-4 rounded-xl font-bold text-white shadow-2xl shadow-orange-200 hover:bg-orange-300 transition-all"
        >
          <img
            src="images/icon-cart.svg"
            alt="icon-cart"
            className="brightness-0 invert"
          />
          <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
};

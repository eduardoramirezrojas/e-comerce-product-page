export const ProductInfo = () => {
  return (
    <article className="space-y-4 pt-5 w-[90%] mx-auto xl:space-y-6">
      <p className="uppercase text-dark-grayish-blue">sneaker company</p>
      <h1 className="text-very-dark-blue text-3xl font-bold">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex justify-between items-center">
        <p className="text-very-dark-blue font-bold text-3xl">
          $125.00
          <span className="text-white bg-black px-2 rounded-sm text-xl ml-5">
            50%
          </span>
        </p>
        <p className="text-dark-grayish-blue font-bold line-through">$250.00</p>
      </div>

      <div className="xl:grid xl:grid-cols-3 gap-5">
        <div className="flex w-full justify-between items-center bg-light-grayish-blue py-3 px-[5%] xl:col-span-1">
        <button>
          <img src="images/icon-minus.svg" alt="minus" />
        </button>
        <p className="font-bold">0</p>
        <button>
          <img src="images/icon-plus.svg" alt="plus" />
        </button>
      </div>

      <button className="bg-orange-primary flex w-full items-center justify-center gap-4 py-3 rounded-sm font-bold xl:col-span-2">
        <img src="images/icon-cart.svg" alt="icon-cart" />
        <a href="#">
          Add to cart
        </a>
      </button>
      </div>

    </article>
  );
};

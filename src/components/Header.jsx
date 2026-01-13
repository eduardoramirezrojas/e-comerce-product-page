import { Cart } from "./Cart";

export const Header = ({
  isOpen,
  toggleMenu,
  isCartVisible,
  toggleCart,
  cartCount,
  deleteFromCart,
}) => {
  return (
    <div className="relative flex justify-between items-center py-5 w-[90%] mx-auto md:w-full md:border-b md:border-grayish-blue">
      <div className="flex gap-5 items-center">
        <picture className="flex items-center justify-center gap-5 md:block">
          <img
            src="images/icon-menu.svg"
            alt="icon-menu"
            onClick={toggleMenu}
            className="md:hidden cursor-pointer"
          />
          <img src="images/logo.svg" alt="logo" />
        </picture>

        <div
          className={`absolute z-10 max-w-3xl mx-auto inset-0 bg-black/50 md:static md:block md:max-w-none md:mx-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-[70%] py-5 bg-white relative h-full px-[5%] font-bold inset-x-0 md:w-full md:py-0 md:static md:block md:px-0">
            <ul className="space-y-5 md:space-y-0 md:flex md:gap-5 md:text-blue-dark-grayish md:font-light">
              <img
                src="images/icon-close.svg"
                alt="icon-close"
                className="pt-2 md:hidden cursor-pointer"
                onClick={toggleMenu}
              />
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-orange-400 hover:pb-8 hover:cursor-pointer"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-orange-400 hover:pb-8 hover:cursor-pointer"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-orange-400 hover:pb-8 hover:cursor-pointer"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-orange-400 hover:pb-8 hover:cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-orange-400 hover:pb-8 hover:cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <picture className="flex gap-4 items-center">
        <div className="relative">
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-primary text-white text-[10px] px-2 rounded-full font-bold">
              {cartCount}
            </span>
          )}

          <img
            src="images/icon-cart.svg"
            alt="icon-cart"
            className="cursor-pointer"
            onClick={toggleCart}
          />
        </div>

        <img
          src="images/image-avatar.png"
          alt="avatar"
          className="size-8 md:size-12 hover:border-2 rounded-full hover:border-orange-400 hover:cursor-pointer transition-all"
        />
      </picture>

      {isCartVisible && (
        <Cart cartCount={cartCount} deleteFromCart={deleteFromCart} />
      )}
    </div>
  );
};

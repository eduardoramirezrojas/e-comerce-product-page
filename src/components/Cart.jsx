export const Cart = ({ cartCount, deleteFromCart }) => {
  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-white rounded-xl shadow-2xl md:max-w-90 md:left-auto md:right-0 md:translate-x-0">
      <div className="p-6 border-b border-gray-100">
        <h3 className="font-bold text-very-dark-blue">Cart</h3>
      </div>

      <div className="p-6 min-h-45 flex flex-col justify-center">
        {cartCount === 0 ? (
          <p className="text-center text-dark-grayish-blue font-bold">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 text-dark-grayish-blue">
              <img
                src="images/image-product-1-thumbnail.jpg"
                className="w-12 rounded-md"
                alt="thumbnail"
              />
              <div className="flex-1 text-sm">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartCount}{" "}
                  <span className="font-bold text-very-dark-blue">
                    ${(125 * cartCount).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                onClick={deleteFromCart}
                className="hover:opacity-50 transition-all"
              >
                <img src="images/icon-delete.svg" alt="delete" />
              </button>
            </div>

            <button className="w-full bg-orange-primary text-white py-4 rounded-xl font-bold hover:bg-orange-300 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

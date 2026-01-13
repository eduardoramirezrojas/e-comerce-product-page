import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { ProductInfo } from "./components/ProductInfo";
import { useProduct } from "./hooks/useProduct";

function App() {
  const {
    isOpen,
    toggleMenu,
    data,
    currentIndex,
    prevImage,
    nextImage,
    handleIndex,
    isModalOpen,
    toggleModal,
    quantity,
    addQuantity,
    subtractQuantity,
    cartCount,
    addToCart,
    deleteFromCart,
    isCartVisible,
    toggleCart,
  } = useProduct();

  return (
    <div className="relative max-w-3xl mx-auto font-kumbh md:max-w-7xl">
      <Header
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        isCartVisible={isCartVisible}
        toggleCart={toggleCart}
        cartCount={cartCount}
        deleteFromCart={deleteFromCart}
      />

      <div className="md:grid md:grid-cols-2 md:w-[95%] mx-auto items-center md:pt-20 xl:gap-30">
        <Gallery
          data={data}
          currentIndex={currentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          handleIndex={handleIndex}
          isModalOpen={false}
          toggleModal={toggleModal}
        />

        <ProductInfo
          quantity={quantity}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          addToCart={addToCart}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 hidden md:flex flex-col items-center justify-center bg-black/75">
          <div className="relative max-w-125">
            <button
              onClick={toggleModal}
              className="absolute -top-10 right-0 p-2 hover:brightness-200 transition-all"
            >
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white scale-150"
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.597L11.596.782Z"
                  fillRule="evenodd"
                />
              </svg>
            </button>

            <Gallery
              data={data}
              currentIndex={currentIndex}
              prevImage={prevImage}
              nextImage={nextImage}
              handleIndex={handleIndex}
              isModalOpen={true}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

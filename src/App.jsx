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
  } = useProduct();

  return (
    <div className="max-w-3xl mx-auto font-kumbh md:max-w-7xl">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="md:grid md:grid-cols-2 md:w-[95%] mx-auto items-center md:pt-20 xl:gap-30">
        <Gallery
          data={data}
          currentIndex={currentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          handleIndex={handleIndex}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />

        <ProductInfo />
      </div>
    </div>
  );
}

export default App;

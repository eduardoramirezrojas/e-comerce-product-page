import { useState } from "react";
import { data } from "../data/db";

export const useProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleModal = () => {
    if (window.innerWidth >= 768) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  const addQuantity = () => setQuantity((prev) => prev + 1);
  const subtractQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const addToCart = () => {
    if (quantity > 0) {
      setCartCount((prev) => prev + quantity);
      setQuantity(0);
    }
  };

  const deleteFromCart = () => setCartCount(0);

  function prevImage() {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function handleIndex(index) {
    setCurrentIndex(index);
  }

  return {
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
  };
};

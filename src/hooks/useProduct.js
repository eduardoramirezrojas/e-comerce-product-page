import { useState } from "react";

import { data } from "../data/db";

export const useProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  function prevImage() {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function nextImage() {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
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
  };
};

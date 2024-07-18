import React, { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

type Cake = {
  id: string;
  name: string;
  flavor: string;
  price: number;
  description: string;
};

type ModalProps = {
  cake: Cake;
  closeModal: () => void;
  addToCart: () => void;
};

const Modal: React.FC<ModalProps> = ({ cake, closeModal, addToCart }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal(); // Close modal if click is outside the modal content
    }
  };

  // Add event listener for clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto transition-transform transform duration-300 scale-95 hover:scale-100">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{cake.name}</h2>
        <p className="mb-2 text-lg"><strong>Flavor:</strong> {cake.flavor}</p>
        <p className="mb-2 text-lg"><strong>Price:</strong> ₹{cake.price}</p> {/* Displaying price with ₹ symbol */}
        <p className="mb-4 text-lg text-gray-600">{cake.description}</p>
        <button
          onClick={addToCart} // Use addToCart function for adding to cart
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;

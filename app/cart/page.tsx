
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import Modal from "@/components/Modal"; // Import Modal component

type Cake = {
  _id: string; // Add _id field
  name: string;
  flavor: string;
  price: number;
  description: string;
};

const Page = () => {
  const [cart, setCart] = useState<Cake[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([]);

  // Fetch cake data
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await fetch("/api/cakes");
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setCakes(result.data.map((cake: any) => ({
            _id: cake._id,
            name: cake.name,
            flavor: cake.flavor,
            price: cake.price,
            description: cake.description
          })));
        } else {
          console.error("Unexpected data format:", result);
        }
      } catch (error) {
        console.error("Failed to fetch cakes:", error);
      }
    };
    fetchCakes();
  }, []);

  // Retrieve cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartList') || '[]');
    setCart(storedCart);
  }, []);

  // Add cake to cart
  const addToCart = (cake: Cake) => {
    const updatedCart = [...cart, cake];
    setCart(updatedCart);
    localStorage.setItem('cartList', JSON.stringify(updatedCart));
  };

  // Open modal with selected cake
  const openModal = (cake: Cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Remove specific cake from cart

  // const removeFromCart = (id: string) => {
  //   console.log("Removing item with ID:", id); // Check the value of id
  //   if (!id) {
  //     console.error("Invalid ID received for removal:", id);
  //     return;
  //   }
  //   const updatedCart = cart.filter((item) => item._id !== id);
  //   setCart(updatedCart);
  //   localStorage.setItem('cartList', JSON.stringify(updatedCart));
  // };

  const removeFromCart = (id: string) => {
    console.log("Removing item with ID:", id); // Check the value of id
    if (!id) {
      console.error("Invalid ID received for removal:", id);
      return;
    }
  
    const index = cart.findIndex(item => item._id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1); // Remove the item at the found index
      setCart(updatedCart);
      localStorage.setItem('cartList', JSON.stringify(updatedCart));
    } else {
      console.error("Item not found in cart:", id);
    }
  };
  
  

  // Calculate total amount in cart
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex gap-4 max-w-5xl mx-auto">
      <div className="max-w-3xl">
        {cakes.length > 0 ? (
          cakes.map((cake) => (
            <div key={cake._id} className="flex p-10 bg-gray-50 border rounded-lg shadow-lg mb-4">
              <Image
                className="border rounded-lg"
                src="/Images/one.jpg"
                height={150}
                width={150}
                alt={cake.name}
              />
              <div className="mx-4 my-2 flex flex-col">
                <div className="flex items-center justify-between gap-20">
                  <h1>{cake.name}</h1>
                  <p className="text-sm">Delivered By : Tomorrow</p>
                </div>
                <p className="text-sm text-gray-600 my-1">Variety : {cake.flavor}</p>
                <div className="flex items-center font-semibold my-4">
                  <FaRupeeSign />
                  {cake.price}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => openModal(cake)}>
                    Add To Wishlist
                  </Button>
                  <Button variant="outline" onClick={() => removeFromCart(cake._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No cakes available</p>
        )}
        <div className="flex justify-end bg-gray-50 border p-2 my-2 rounded-lg shadow-lg">
          <Button variant="secondary">Place Order</Button>
        </div>
      </div>

      {/* Cart Section */}
      <div className="max-w-2xl my-4 border rounded-lg bg-gray-50 p-4">
        <h1 className="text-gray-700 font-semibold border-b mb-4">Cart</h1>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <Image
                    className="border rounded-lg"
                    src="/Images/one.jpg"
                    height={50}
                    width={50}
                    alt={item.name}
                  />
                  <div className="mx-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Flavor: {item.flavor}</p>
                    <p className="text-sm text-gray-600">
                      Price: <FaRupeeSign />
                      {item.price}
                    </p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => removeFromCart(item._id)}>
                  Remove
                </Button>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-4">
              <p>Total Amount:</p>
              <p>
                <FaRupeeSign />
                {cartTotal}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCake && (
        <Modal cake={selectedCake} closeModal={closeModal} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Page;


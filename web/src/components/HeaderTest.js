import React, { useState } from "react";

export default function HeaderTest() {
  const [activeItem, setActiveItem] = useState();

  console.log("activeItem >>>", activeItem);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <button
          className="bg-gray-500 text-white px-2 py-2 rounded-md mr-5"
          onClick={() => setActiveItem("services")}
        >
          Show Services list
        </button>
        <button
          className="bg-gray-500 text-white px-2 py-2 rounded-md"
          onClick={() => setActiveItem("products")}
        >
          Show Products list
        </button>
      </div>

      <div className="flex flex-col my-5">
        <ul className={`services ${activeItem !== "services" ? `hidden` : ""}`}>
          <li>Gym</li>
          <li>Jacuzzi</li>
          <li>Training</li>
          <li>Excercise</li>
        </ul>

        <ul className={`services ${activeItem !== "products" ? `hidden` : ""}`}>
          <li>Nutella</li>
          <li>Dairy milk</li>
          <li>Ice cream</li>
          <li>Bread</li>
        </ul>
      </div>
    </div>
  );
}

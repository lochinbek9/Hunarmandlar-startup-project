import React from "react";
import "./Product.css";

const products = [
  {
    id: 1,
    number: "01",
    image: "./img/temirchilik.png",
    title: "Temirchilik",
    description: "Kulolchilik buyumlari va sopol idishlar.",
  },
  {
    id: 2,
    number: "02",
    image: "./img/haykaltaroshlik.png",
    title: "Haykaltaroshlik",
    description: "Kulolchilik buyumlari va sopol idishlar",
  },
  {
    id: 3,
    number: "03",
    image: "./img/toqimachilik.png",
    title: "To'qimachilik",
    description: "Kulolchilik buyumlari va sopol idishlar",
  },
  {
    id: 4,
    number: "04",
    image: "./img/kulolchilik.png",
    title: "Kulolchilik",
    description: "Kulolchilik buyumlari va sopol idishlar",
  },
  {
    id: 5,
    number: "05",
    image: "./img/xattotlik.png",
    title: "Xattotlik",
    description: "Kulolchilik buyumlari va sopol idishlar",
  },
  {
    id: 6,
    number: "06",
    image: "./img/zargarlik.png",
    title: "Zargarlik",
    description: "Kulolchilik buyumlari va sopol idishlar.",
  },
];

const Product = () => {
  return (
    <section className="product-section relative">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Mahsulotlar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`relative product-card flex flex-col shadow-lg p-6 overflow-hidden ${
                index % 3 === 1 ? "half-lower" : ""
              }`}
            >
              {/* Chapdagi vertikal border */}
              <span className="left-border"></span>

              <p className="product-number mb-3">{item.number}</p>
              <h3 className="product-title font-semibold text-xl mb-2">{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-[400px] h-[400px] object-cover mb-4"
              />
              <p className="text-gray-600 mb-6">{item.description}</p>
              <a
                href="#"
                className="mt-auto text-blue-600 font-medium hover:underline"
              >
                Mahsulotni ko‘rish →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

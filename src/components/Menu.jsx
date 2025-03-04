import React from "react";

const menuItems = [
    {
        id: 1,
        name: "Greek Salad",
        description: "Crispy lettuce, olives, and feta cheese.",
        price: "$12.99",
        image: "/images/greek-salad.jpg",
    },
    {
        id: 2,
        name: "Bruschetta",
        description: "Grilled bread with garlic and tomatoes.",
        price: "$7.99",
        image: "/images/bruschetta.jpg",
    },
    {
        id: 3,
        name: "Grilled Fish",
        description: "Fresh fish grilled to perfection.",
        price: "$15.99",
        image: "/images/grilled-fish.jpg",
    },
];

const Menu = () => {
    return (
        <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-3" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold text-green-600 mt-2">{item.price}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Menu;

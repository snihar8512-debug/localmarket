"use client";

import { useState } from "react";

type ProductItem = {
  shop: string;
  product: string;
  category: string;
  price: string;
  distance: string;
};

const products: ProductItem[] = [
  // Grocery
  {
    shop: "Sharma General Store",
    product: "Amul Milk 1L",
    category: "Grocery",
    price: "₹68",
    distance: "300 m away",
  },
  {
    shop: "Patel Super Market",
    product: "Basmati Rice 5kg",
    category: "Grocery",
    price: "₹520",
    distance: "500 m away",
  },
  {
    shop: "City Mart",
    product: "Aashirvaad Atta 5kg",
    category: "Grocery",
    price: "₹290",
    distance: "700 m away",
  },

  // Baby
  {
    shop: "Sharma General Store",
    product: "Baby Diapers",
    category: "Baby",
    price: "₹450",
    distance: "300 m away",
  },
  {
    shop: "Patel Medical & General",
    product: "Baby Diapers",
    category: "Baby",
    price: "₹425",
    distance: "500 m away",
  },
  {
    shop: "Mother Care Store",
    product: "Baby Wipes",
    category: "Baby",
    price: "₹120",
    distance: "600 m away",
  },

  // Medical
  {
    shop: "Patel Medical & General",
    product: "Paracetamol 500mg",
    category: "Medical",
    price: "₹25",
    distance: "500 m away",
  },
  {
    shop: "City Pharmacy",
    product: "Digital Thermometer",
    category: "Medical",
    price: "₹180",
    distance: "800 m away",
  },

  // Clothing
  {
    shop: "Fashion Point",
    product: "Men's Cotton Shirt",
    category: "Clothing",
    price: "₹599",
    distance: "400 m away",
  },
  {
    shop: "Style Hub",
    product: "Women's Kurti",
    category: "Clothing",
    price: "₹799",
    distance: "650 m away",
  },

  // Hardware
  {
    shop: "Patel Hardware",
    product: "Hammer",
    category: "Hardware",
    price: "₹250",
    distance: "350 m away",
  },
  {
    shop: "Sharma Hardware Store",
    product: "Screwdriver Set",
    category: "Hardware",
    price: "₹320",
    distance: "900 m away",
  },

  // Fruits
  {
    shop: "Fresh Fruits Market",
    product: "Apples 1kg",
    category: "Fruits",
    price: "₹160",
    distance: "200 m away",
  },
  {
    shop: "Green Basket",
    product: "Bananas 1 Dozen",
    category: "Fruits",
    price: "₹60",
    distance: "450 m away",
  },
];

const shopDetails: Record<
  string,
  {
    address: string;
    hours: string;
    rating: string;
    phone: string;
  }
> = {
  "Sharma General Store": {
    address: "Justice Market, Main Road",
    hours: "8:00 AM – 10:00 PM",
    rating: "4.6",
    phone: "+91 90000 00001",
  },

  "Patel Super Market": {
    address: "Justice Market, Shop 12",
    hours: "8:00 AM – 10:30 PM",
    rating: "4.5",
    phone: "+91 90000 00002",
  },

  "City Mart": {
    address: "Justice Market, Central Lane",
    hours: "9:00 AM – 10:00 PM",
    rating: "4.4",
    phone: "+91 90000 00003",
  },

  "Patel Medical & General": {
    address: "Justice Market, Medical Lane",
    hours: "8:00 AM – 11:00 PM",
    rating: "4.7",
    phone: "+91 90000 00004",
  },

  "Mother Care Store": {
    address: "Justice Market, Baby Care Lane",
    hours: "9:00 AM – 9:00 PM",
    rating: "4.6",
    phone: "+91 90000 00005",
  },

  "City Pharmacy": {
    address: "Justice Market, Main Road",
    hours: "8:00 AM – 10:00 PM",
    rating: "4.5",
    phone: "+91 90000 00006",
  },

  "Fashion Point": {
    address: "Justice Market, Clothing Lane",
    hours: "10:00 AM – 9:00 PM",
    rating: "4.3",
    phone: "+91 90000 00007",
  },

  "Style Hub": {
    address: "Justice Market, Fashion Street",
    hours: "10:00 AM – 9:00 PM",
    rating: "4.4",
    phone: "+91 90000 00008",
  },

  "Patel Hardware": {
    address: "Justice Market, Hardware Lane",
    hours: "8:00 AM – 8:00 PM",
    rating: "4.2",
    phone: "+91 90000 00009",
  },

  "Sharma Hardware Store": {
    address: "Justice Market, Hardware Lane",
    hours: "8:00 AM – 8:30 PM",
    rating: "4.3",
    phone: "+91 90000 00010",
  },

  "Fresh Fruits Market": {
    address: "Justice Market, Fresh Market",
    hours: "7:00 AM – 9:00 PM",
    rating: "4.5",
    phone: "+91 90000 00011",
  },

  "Green Basket": {
    address: "Justice Market, Fruit Lane",
    hours: "7:00 AM – 9:00 PM",
    rating: "4.4",
    phone: "+91 90000 00012",
  },
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedShop, setSelectedShop] = useState<string | null>(null);

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      `${item.product} ${item.shop} ${item.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // SHOP PAGE
  if (selectedShop) {
    const shopProducts = products.filter(
      (item) => item.shop === selectedShop
    );

    const shop = shopDetails[selectedShop];

    return (
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-5 py-5">
            <button
              onClick={() => setSelectedShop(null)}
              className="text-sm font-medium text-blue-600 mb-4"
            >
              ← Back to products
            </button>

            <h1 className="text-3xl font-bold text-gray-900">
              {selectedShop}
            </h1>

            <p className="text-gray-500 mt-1">
              📍 {shop.address}
            </p>
          </div>
        </header>

        {/* Shop Information */}
        <section className="max-w-6xl mx-auto px-5 py-8">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500">
                  Rating
                </p>

                <p className="text-xl font-bold text-gray-900 mt-1">
                  ⭐ {shop.rating}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Opening Hours
                </p>

                <p className="text-xl font-bold text-gray-900 mt-1">
                  🕐 {shop.hours}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Products
                </p>

                <p className="text-xl font-bold text-gray-900 mt-1">
                  📦 {shopProducts.length} available
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Contact
                </p>

                <p className="text-lg font-bold text-gray-900 mt-1">
                  📞 {shop.phone}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Justice+Market",
                  "_blank"
                )
              }
              className="mt-6 bg-gray-900 text-white px-5 py-3 rounded-xl font-medium"
            >
              📍 Get Directions
            </button>
          </div>
        </section>

        {/* Shop Products */}
        <section className="max-w-6xl mx-auto px-5 pb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Products in this shop
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {shopProducts.map((item, index) => (
              <Product
                key={`${item.product}-${index}`}
                shop={item.shop}
                product={item.product}
                category={item.category}
                price={item.price}
                distance={item.distance}
                onViewShop={() => {}}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }

  // MAIN PAGE
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            LocalMarket
          </h1>

          <button className="text-sm font-medium text-gray-600">
            📍 Justice Market
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-8">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Find what you need,
          <br />
          near you.
        </h2>

        <p className="mt-3 text-gray-600">
          Search products available in shops around Justice Market.
        </p>

        {/* Search */}
        <div className="mt-7">
          <div className="bg-white border rounded-2xl shadow-sm flex items-center px-4 py-4">
            <span className="text-xl mr-3">
              🔍
            </span>

            <input
              type="text"
              placeholder="What do you need?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-gray-800 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-5 py-6">
        <h3 className="text-xl font-bold text-gray-900">
          Browse Categories
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-5">
          <Category
            icon="🛒"
            name="Grocery"
            selected={selectedCategory === "Grocery"}
            onClick={() => setSelectedCategory("Grocery")}
          />

          <Category
            icon="🍼"
            name="Baby"
            selected={selectedCategory === "Baby"}
            onClick={() => setSelectedCategory("Baby")}
          />

          <Category
            icon="💊"
            name="Medical"
            selected={selectedCategory === "Medical"}
            onClick={() => setSelectedCategory("Medical")}
          />

          <Category
            icon="👕"
            name="Clothing"
            selected={selectedCategory === "Clothing"}
            onClick={() => setSelectedCategory("Clothing")}
          />

          <Category
            icon="🔧"
            name="Hardware"
            selected={selectedCategory === "Hardware"}
            onClick={() => setSelectedCategory("Hardware")}
          />

          <Category
            icon="🍎"
            name="Fruits"
            selected={selectedCategory === "Fruits"}
            onClick={() => setSelectedCategory("Fruits")}
          />
        </div>

        {selectedCategory !== "All" && (
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 text-sm font-medium text-blue-600"
          >
            ✕ Show all categories
          </button>
        )}
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {selectedCategory !== "All"
              ? `${selectedCategory} Products`
              : search
              ? `Results for "${search}"`
              : "Available Near You"}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {filteredProducts.length} products found
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {filteredProducts.map((item, index) => (
              <Product
                key={`${item.shop}-${item.product}-${index}`}
                shop={item.shop}
                product={item.product}
                category={item.category}
                price={item.price}
                distance={item.distance}
                onViewShop={() => setSelectedShop(item.shop)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border rounded-2xl p-8 mt-5 text-center">
            <div className="text-4xl">
              🔍
            </div>

            <h4 className="text-lg font-bold text-gray-900 mt-3">
              No products found
            </h4>

            <p className="text-gray-500 mt-1">
              Try another product or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium"
            >
              Show Everything
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function Category({
  icon,
  name,
  selected,
  onClick,
}: {
  icon: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`border rounded-2xl p-5 text-center transition ${
        selected
          ? "bg-gray-900 text-white border-gray-900 shadow-md"
          : "bg-white text-gray-800 hover:shadow-md"
      }`}
    >
      <div className="text-3xl">
        {icon}
      </div>

      <div className="mt-2 font-medium">
        {name}
      </div>
    </button>
  );
}

function Product({
  shop,
  product,
  category,
  price,
  distance,
  onViewShop,
}: {
  shop: string;
  product: string;
  category: string;
  price: string;
  distance: string;
  onViewShop: () => void;
}) {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="text-sm text-gray-500">
            {shop}
          </p>

          <h4 className="text-lg font-bold text-gray-900 mt-1">
            {product}
          </h4>

          <span className="inline-block mt-2 bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>

        <span className="text-green-600 text-sm font-semibold whitespace-nowrap">
          ✓ Available
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-2xl font-bold text-gray-900">
            {price}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            📍 {distance}
          </p>
        </div>

        <button
          onClick={onViewShop}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium"
        >
          View Shop
        </button>
      </div>
    </div>
  );
}
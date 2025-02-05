import React from "react";

export default function ShopFilterSidebar({ filters, setFilters }: any) {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: any) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: any) => ({ ...prev, priceRange: e.target.value }));
  };

  return (
    <div className="hidden sm:block bg-white rounded-lg sm:row-start-1 sm:row-span-2 sm:col-start-1 p-4">
      <div className="font-bold text-lg mb-4">Filter</div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input
                type="radio"
                name="category"
                value="All Rooms"
                checked={filters.category === "All Rooms"}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              All Rooms
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="category"
                value="Living Room"
                checked={filters.category === "Living Room"}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              Living Room
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="category"
                value="Bedroom"
                checked={filters.category === "Bedroom"}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              Bedroom
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input
                type="radio"
                name="price"
                value="0-99"
                checked={filters.priceRange === "0-99"}
                onChange={handlePriceChange}
                className="mr-2"
              />
              $0 - $99
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="price"
                value="100-199"
                checked={filters.priceRange === "100-199"}
                onChange={handlePriceChange}
                className="mr-2"
              />
              $100 - $199
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="price"
                value="200-299"
                checked={filters.priceRange === "200-299"}
                onChange={handlePriceChange}
                className="mr-2"
              />
              $200 - $299
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="price"
                value="300+"
                checked={filters.priceRange === "300+"}
                onChange={handlePriceChange}
                className="mr-2"
              />
              $300+
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

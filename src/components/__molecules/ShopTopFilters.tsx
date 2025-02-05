import React from "react";

export default function ShopTopFilters({ filters, setFilters }: any) {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev: any) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev: any) => ({ ...prev, priceRange: e.target.value }));
  };

  return (
    <>
      <div className="flex max-w-[548px] w-full sm:justify-between flex-col h-[188px] sm:h-fit items-center sm:items-baseline sm:flex-row gap-x-[10px]">
        {/* Category Dropdown */}
        <div className="max-w-[262px] w-full gap-y-[8px]">
          <h4 className="font-bold text-[#6C7275] text-[16px]">Category</h4>
          <select
            className="w-full border-[2px] py-[14px] px-[5px] border-black rounded-md"
            value={filters.category || "All Rooms"}
            onChange={handleCategoryChange}
          >
            <option value="All Rooms">All Rooms</option>
            <option value="Living Room">Living Room</option>
            <option value="Bedroom">Bedroom</option>
          </select>
        </div>

        {/* Price Dropdown */}
        <div className="max-w-[262px] w-full gap-y-[8px]">
          <h4 className="font-bold text-[#6C7275] text-[16px]">Price</h4>
          <select
            className="w-full border-[2px] py-[14px] px-[5px] border-black rounded-md"
            value={filters.priceRange || "All Price"} // Default to "AllPrice" if filters.priceRange is undefined
            onChange={handlePriceChange}
          >
            <option value="AllPrice">All Prices</option>
            <option value="0-99.99">0-99.99</option>
            <option value="100-199">100-199</option>
            <option value="200-299">200-299</option>
            <option value="300-399">300-399</option>
            <option value="400+">400+</option>
          </select>
        </div>
      </div>
    </>
  );
}

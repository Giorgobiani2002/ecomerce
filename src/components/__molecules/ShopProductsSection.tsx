"use client";
import React, { useState } from "react";
import LayoutToggle from "../__atoms/LayoutToggle";
import ShopFilterSidebar from "./ShopFilterSidebar";
import ShopTopFilters from "./ShopTopFilters";
import ShopProductGrid from "./ShopProductGrid";
import { motion } from "framer-motion";
export default function ShopProductsSection() {
  const [layout, setLayout] = useState("Sort1");
  const [filters, setFilters] = useState<any>({
    category: "All Rooms",
    priceRange: null,
  });

  return (
    <div className="min-h-screen mt-[50px] max-w-[1440px] w-full mx-auto flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
        className={`max-w-[1188px] w-full px-[34px] grid ${
          layout === "Sort1"
            ? "sm:grid-cols-[262px,1fr] sm:grid-rows-[auto,1fr] grid-cols-[1fr] grid-rows-[96px,1fr]"
            : "grid-cols-[1fr] sm:grid-rows-[84px,1fr] grid-rows-[200px,1fr] "
        } gap-[10px]`}
      >
        {layout === "Sort1" && (
          <ShopFilterSidebar filters={filters} setFilters={setFilters} />
        )}

        <div
          className={`${
            layout == "Sort1"
              ? ""
              : "flex flex-col sm:flex-row justify-between items-center col-span-2"
          } `}
        >
          {(layout === "Sort2" || layout == "Sort3") && (
            <ShopTopFilters filters={filters} setFilters={setFilters} />
          )}
          <LayoutToggle layout={layout} setLayout={setLayout} />
        </div>

        <ShopProductGrid layout={layout} filters={filters} />
      </motion.div>
    </div>
  );
}

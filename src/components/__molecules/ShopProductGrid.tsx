import React, { useEffect, useState } from "react";
import ProductCard from "../__atoms/productCard";
import { products } from "@/commons/services/product";
import { ProductImage } from "@/utility/images/ImgExport";
import { cartList } from "@/commons/services/cartList";
// import useCartStore from "../__atoms/CartStore";
import useSetObj from "../__atoms/SetObj";
import useObjectStore from "../__atoms/SetObj";

export default function ShopProductGrid({ layout, filters, setLayout }: any) {
  const [visibleProducts, setVisibleProducts] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const setMyObject = useObjectStore((state: any) => state.setMyObject);
  // const addToCart = useCartStore((state: any) => state.addToCart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://eccomerce-back-klm1.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data, "dataa");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to update the visible products based on the current page and screen size
  const updateVisibleProducts = () => {
    const isMobile = window.innerWidth <= 1047;
    const itemsRendered = isMobile ? 8 : 9;
    const itemsAddedPerPage = isMobile ? 2 : 3;
    setVisibleProducts(
      products.slice(0, itemsRendered + itemsAddedPerPage * page)
    );
  };

  // Update visible products on page change or window resize
  useEffect(() => {
    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, [page, products]);

  // Update filtered products when filters or visible products change
  useEffect(() => {
    let updatedProducts = visibleProducts;

    if (filters?.category && filters.category !== "All Rooms") {
      updatedProducts = updatedProducts.filter(
        (product: any) => product.category === filters.category
      );
    }

    if (filters?.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      updatedProducts = updatedProducts.filter((product: any) => {
        const price = product.price;
        return max ? price >= min && price <= max : price >= min;
      });
    }

    setFilteredProducts(updatedProducts);
  }, [filters, visibleProducts, products]);

  return (
    <div
      className={`${
        layout === "Sort2"
          ? "col-start-1 col-span-2"
          : "col-start-1 sm:col-start-2 sm:row-start-2"
      } flex flex-col items-center h-fit row-start-2`}
    >
      <div className="flex flex-wrap justify-center gap-[16px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((el: any) => (
            <ProductCard
              // onAddToCart={() => addToCart(el)}
              setMyObject={setMyObject}
              id={el._id}
              layout={layout}
              setLayout={setLayout}
              key={el.id}
              ProductImage={el.imageUrl}
              name={el.name}
              discount={el.discount}
              oldPrice={el.oldPrice}
              price={el.price}
              rating={el.rating}
              isNew={el.isNew}
              image={el.image}
              images={el.images}
              stars={el.stars}
              category={el.category}
              wishlist={el.wishlist}
              quantity={el.quantity}
              SKU={el.SKU}
              chooseColor={el.chooseColor}
              description={el.description}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="font-medium mt-[80px] py-[6px] px-[40px] border-[2px] border-black rounded-2xl"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

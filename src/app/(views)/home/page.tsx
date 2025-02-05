"use client";
import DetailsMiniInfo from "@/components/__atoms/DetailsMiniInfo";
import SwiperHeader from "@/components/__atoms/SwiperHeader";
import Header from "@/components/__molecules/Header";
import ArticlesSection from "@/components/__organisms/ArticlesSection";
import CategotySection from "@/components/__organisms/CategotySection";
import LowerPriceSection from "@/components/__organisms/LowerPriceSection";
import SwiperProduct from "@/components/__organisms/SwiperProduct";
import SwipperBaner from "@/components/__organisms/SwipperBaner";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full flex-col flex  items-center ">
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center px-[32px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <SwipperBaner />
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center px-[32px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
      >
        <CategotySection />
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center px-[32px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <SwiperHeader />
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center  "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <div className="flex self-end   ">
          <SwiperProduct />
        </div>
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center px-[32px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <DetailsMiniInfo />
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center  "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <LowerPriceSection />
      </motion.div>
      <motion.div
        className="max-w-[1440px] w-full flex flex-col items-center px-[32px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{
          once: true,
        }}
      >
        <ArticlesSection />
      </motion.div>
    </div>
  );
}

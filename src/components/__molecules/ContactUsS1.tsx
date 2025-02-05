"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactUsS1() {
  return (
    <>
      <motion.div
        className="max-w-[560px] sm:max-w-[1120px] m-auto "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
      >
        <h2 className="font-medium text-[54px] leading-[58px] text-[#141718] ">
          We believe in sustainable decor. We’re passionate about life at home.
        </h2>
        <p className="font-normal text-[16px] leading-[26px] text-[#141718] mt-[24px] ">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
      </motion.div>
    </>
  );
}

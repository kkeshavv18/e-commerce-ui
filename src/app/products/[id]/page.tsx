import ProductInteraction from "@/components/ProductInteraction";
import type { ProductType } from "@/types";
import Image from "next/image";
import React from "react";

// TEMPORARY PRODUCT DATA
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;
  const selectedColor = color || product.colors[0];
  const selectedSize = size || product.sizes[0];
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:12 mt-12">
      {/* IMAGE  */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS  */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="font-medium text-2xl">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-2xl font-semibold">${product.price?.toFixed(2)}</p>

        {/* interaction  */}
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black cursor-pointer">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="underline hover:text-black cursor-pointer">
            Privacy Policy
          </span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black cursor-pointer">
            Refund Policies
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default ProductPage;

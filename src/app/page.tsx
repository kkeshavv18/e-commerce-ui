import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const { category } = await searchParams;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      <ProductList category={category} params="homePage" />
    </div>
  );
};

export default Homepage;

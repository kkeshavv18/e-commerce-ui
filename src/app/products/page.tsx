import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const { category } = await searchParams;
  return (
    <div>
      <ProductList category={category} params="productsPage" />
    </div>
  );
};

export default ProductsPage;

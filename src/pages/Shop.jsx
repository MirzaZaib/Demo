import ProductCatalog from '../components/ProductCatalog';
import PageTitle from '../components/PageTitle';
import { PRODUCTS } from '../data';

const Shop = () => {
  return (
    <>
      <PageTitle title="Shop" />
      <ProductCatalog
      products={PRODUCTS}
      title="All Laptops"
      subtitle="Browse the complete collection of premium gaming and creator laptops."
      showFilters={true}
    />
    </>
  );
};

export default Shop;

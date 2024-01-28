import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductNavigator from "./ProductNavigator";
function Products() {
  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar/>
      <main className="flex-grow flex">
        <div className="w-1/4 h-screen flex items-start pt-10 sticky top-0">
            <ProductNavigator/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 p-4 flex-grow">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </main>
      <Footbar/>
    </div>
  );
}

export default Products;
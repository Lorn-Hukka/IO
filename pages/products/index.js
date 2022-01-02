import ProductCard from "@components/products/ProductCard"

export async function getStaticProps(context) {

  let res = await fetch("https://cms.io.lorned.net/products");
  let products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 900
  }
}

const Products = ({ products }) => {

  return (
    <>
      <div className="my-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-2xl font-medium">Nasze Produkty:</h3>
          <span className="mt-3 text-sm text-gray-500">{products.length} Produktów</span>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {
              products && products.map( product => (
                <ProductCard key={product.slug} product={product} />
                )
              )
            }
          </div>
          <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-red-500 border-r-0 ml-0 rounded-l hover:bg-red-600 hover:text-white"><span>Previous</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-red-500 border-r-0 hover:bg-red-600 hover:text-white"><span>1</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-red-500 border-r-0 hover:bg-red-600 hover:text-white"><span>2</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-red-500 border-r-0 hover:bg-red-600 hover:text-white"><span>3</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-red-500 rounded-r hover:bg-red-600 hover:text-white"><span>Next</span></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
}

export default Products;
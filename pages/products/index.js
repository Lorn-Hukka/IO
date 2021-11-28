import Product from "@components/Product"

const Products = () => {

  let dummyData = [
    {"slug": "podrecznik-darkherezy-ii", "name": "Podręcznik DarkHerezy II", "price": "213 zł", "thumbnail": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80"},
    {"slug": "zestaw-kosci-do-gry-hellman", "name": "Zestaw Kości do gry - HELLMAN", "price": "30 zł", "thumbnail": "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
  ];

  return (
    <>
      
      <main className="my-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-2xl font-medium">Nasze Produkty:</h3>
          <span className="mt-3 text-sm text-gray-500">{dummyData.length} Produktów</span>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {
              dummyData && dummyData.map( product => (
                <Product key={product.slug} product={product} />
                )
              )
            }
          </div>
          <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
              <a href="#" className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
            </div>
          </div>
        </div>
      </main>
      <hr className="my-3" />
    </>
  );
}

export default Products;
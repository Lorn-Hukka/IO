import ProductCard from "@components/products/ProductCard"
import SaleProductCard from "@components/products/SaleProductCard"
export default function Home() {

  let dummyData = [
    {"slug": "podrecznik-darkherezy-ii", "name": "Podręcznik DarkHerezy II", "price": "179,00 zł", "salePrice": "100,00 zł", "thumbnail": "https://copcorp.pl/wp-content/uploads/2018/12/dh2-1.jpg"},
    {"slug": "zestaw-kosci-do-gry-hellman", "name": "Zestaw Kości do gry - HELLMAN", "price": "30,00 zł", "salePrice": "25,00 zł", "thumbnail": "https://files.rebel.pl/products/107/5904/5382/5383/_2005372/0-1200x900-ffffff.jpg"},
  ];

  return (
      <div className="">
        <div className="border-b-2">
        <div className="px-6 py-10">
          <h1 className="text-gray-700 text-2xl font-medium mb-2">O tej stronie</h1>
          <span className="leading-relaxed">Na naszej stronie znajdziesz wszystko co jest związane z grą w papierowe gry fantasy! <br/>
          Wszystko co jest Ci potrzebne jesteś w stanie nabyć właśnie tu!</span>
        </div>
        </div>
        <div className="border-b-2">
        <div className="px-6 py-10">
          <h1 className="text-gray-700 text-2xl font-medium">Polecamy</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {
                dummyData && dummyData.map( product => (
                  <ProductCard key={product.slug} product={product} />
                  )
                )
              }
            </div>
          </div>
          </div>
          <div className="border-b-2">
          <div className="px-6 py-10">
            <h1 className="text-gray-700 text-2xl font-medium">Promocje</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {
                dummyData && dummyData.map( product => (
                  <SaleProductCard key={product.slug} product={product} />
                  )
                )
              }
            </div>
          </div>
          </div>
      </div> 
  )
}

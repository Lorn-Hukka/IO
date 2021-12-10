import ProductCard from "@components/products/ProductCard"
import SaleProductCard from "@components/products/SaleProductCard"
export default function Home() {

  let dummyData = [
    {"slug": "podrecznik-darkherezy-ii", "name": "Podręcznik DarkHerezy II", "price": "179,00 zł", "salePrice": "100,00 zł", "thumbnail": "https://copcorp.pl/wp-content/uploads/2018/12/dh2-1.jpg"},
    {"slug": "zestaw-kosci-do-gry-hellman", "name": "Zestaw Kości do gry - HELLMAN", "price": "30,00 zł", "salePrice": "25,00 zł", "thumbnail": "https://files.rebel.pl/products/107/5904/5382/5383/_2005372/0-1200x900-ffffff.jpg"},
  ];

  return (
    <div className="container mx-auto">
      <div className="container flex flex-wrap">
        <div>
          <h1 className="text-gray-900 text-2xl font-bold">O tej stronie</h1>
          <span>Na naszej stronie znajdziesz wszystko co jest związane z grą w papierowe gry fantasy! <br/>
          Wszystko co jest Ci potrzebne jesteś w stanie nabyć właśnie tu!</span>
        </div>
        <div className="">
          <h1 className="text-gray-900 text-2xl font-bold">Polecamy</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {
                dummyData && dummyData.map( product => (
                  <ProductCard key={product.slug} product={product} />
                  )
                )
              }
            </div>
          </div>
          <div>
            <h1 className="text-gray-900 text-2xl font-bold">Promocje</h1>
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

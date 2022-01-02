import ProductCard from "@components/products/ProductCard"

// https://cms.io.lorned.net/products?on_sale=1&_limit=5
// https://cms.io.lorned.net/products?_sort=id:DESC&_limit=5

export async function getStaticProps(context){

  let res = await fetch("https://cms.io.lorned.net/products?on_sale=true&_limit=3");
  let on_sale = await res.json();

  res = await fetch("https://cms.io.lorned.net/products?_sort=id:DESC&_limit=3");
  let fresh = await res.json();

  return {
    props: {
      on_sale,
      fresh,
    },
    revalidate: 3600
  }
}


export default function Home({on_sale, fresh}) {

  return (
      <>
        <div className="border-b-2">
        <div className="px-6 py-10">
          <h1 className="text-gray-700 text-2xl font-medium mb-2">O tej stronie</h1>
          <span className="leading-relaxed">Na naszej stronie znajdziesz wszystko co jest związane z grą w papierowe gry fantasy! <br/>
          Wszystko co jest Ci potrzebne jesteś w stanie nabyć właśnie tu!</span>
        </div>
        </div>
        <div className="border-b-2">
        <div className="px-6 py-10">
          <h1 className="text-gray-700 text-2xl font-medium">Nowości</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {
                fresh && fresh.map( product => (
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
                on_sale && on_sale.map( product => (
                  <ProductCard key={product.slug} product={product} />
                  )
                )
              }
            </div>
          </div>
          </div>
      </> 
  )
}

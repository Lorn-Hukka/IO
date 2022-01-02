
const { default: CartItem } = require("@components/CartItem");
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
const Cart = ({products}) => {

    let sum = 0;
    products && products.map(product => (
        sum += parseInt(product.price)
    ));
      return (
        <div className="md:grid md:grid-cols-2">
            <h1 className="flex items-center justify-center md:justify-start md:ml-5 md:col-span-2 font-bold py-3 text-xl">Koszyk <span className="text-gray-500 ml-1"> ({products.length}) </span></h1>
            <div>
                {
                    products && products.map( product => (
                    <CartItem key={product.slug} product={product} />
                    ))
                }
            </div>
            <div className="flex items-center md:items-start justify-center">
                <div>
                    <h1 className="font-bold">Łącznie do zapłaty: {sum}</h1>
                    <div className="rounded-full mt-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">Przejdź do płatności</div>
                </div>
            </div>
        </div>
    );
}
export default Cart;

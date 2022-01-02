const { default: CartItem } = require("@components/CartItem");

const Cart = () => {

    let dummyData = [
        {"slug": "podrecznik-darkherezy-ii", "name": "Podręcznik DarkHerezy II", "price": "179,00 zł", "salePrice": "100,00 zł", "thumbnail": "https://copcorp.pl/wp-content/uploads/2018/12/dh2-1.jpg"},
        {"slug": "zestaw-kosci-do-gry-hellman", "name": "Zestaw Kości do gry - HELLMAN", "price": "30,00 zł", "salePrice": "25,00 zł", "thumbnail": "https://files.rebel.pl/products/107/5904/5382/5383/_2005372/0-1200x900-ffffff.jpg"},
      ];
    let sum = 0;
    dummyData && dummyData.map(product => (
        sum += parseInt(product.price)
    ));
      return (
        <div className="md:grid md:grid-cols-2">
            <h1 className="flex items-center justify-center md:justify-start md:ml-5 md:col-span-2 font-bold py-3 text-xl">Koszyk <span className="text-gray-500 ml-1"> ({dummyData.length}) </span></h1>
            <div>
                {
                    dummyData && dummyData.map( product => (
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

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
        <div>
            <h1>Koszyk ({dummyData.length})</h1>
            {
                dummyData && dummyData.map( product => (
                <CartItem key={product.slug} product={product} />
                ))
            }
            <h1>Łącznie do zapłaty: {sum}</h1>
            <button>Przejdź do płatności</button>
        </div>
    );
}
export default Cart;

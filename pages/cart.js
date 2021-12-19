const { default: CartItem } = require("@components/CartItem");

const Cart = () => {

    let dummyData = [
        {"slug": "podrecznik-darkherezy-ii", "name": "Podręcznik DarkHerezy II", "price": "179,00 zł", "salePrice": "100,00 zł", "thumbnail": "https://copcorp.pl/wp-content/uploads/2018/12/dh2-1.jpg"},
        {"slug": "zestaw-kosci-do-gry-hellman", "name": "Zestaw Kości do gry - HELLMAN", "price": "30,00 zł", "salePrice": "25,00 zł", "thumbnail": "https://files.rebel.pl/products/107/5904/5382/5383/_2005372/0-1200x900-ffffff.jpg"},
      ];

      return (
        <div>
            {
                dummyData && dummyData.map( product => (
                <CartItem key={product.slug} product={product} />
                )
                )
            }
        </div>
    );
}
export default Cart;

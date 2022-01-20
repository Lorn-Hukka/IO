
const { default: CartItem } = require("@components/CartItem");


const Cart = () => {
  
    let products = [];
  
    if (typeof window !== 'undefined')
    {
    products = JSON.parse(localStorage.getItem('Cart')) || [];
    }

    //część wzorca Memento, tworzy kopie aktualnego koszyka
    const makeBackup = () =>
    {
        if (typeof window !== 'undefined')
            localStorage.setItem('savedCart', JSON.stringify(products));
    }
    //część wzorca Memento, przywraca zapisaną zawartość koszyka
    const restore = () => 
      {
        let test = JSON.parse(localStorage.getItem('savedCart')) || [];
        if (typeof window !== 'undefined' && test.length!=0)
        {
            products = JSON.parse(localStorage.getItem('savedCart')) || [];
            localStorage.setItem('Cart', JSON.stringify(products));
        }
      } 

    


    let sum = 0;
    products && products.map(product => (
            sum += parseInt(product.on_sale==false ? product.price : product.sale_price)
        
       
    ));
      return (
        <div className="md:grid md:grid-cols-2">
            <h1 className="flex items-center justify-center md:justify-start md:ml-5 md:col-span-2 font-bold py-3 text-xl">Koszyk <span className="text-gray-500 ml-1"> ({products.length}) </span></h1>
            <div>
                {
                    products && products.map( (product, i=0) => (
                            <CartItem key={i++} product={product}/>
                    ))
                }

            </div>
            <div className="flex items-center md:items-start justify-center">
                <div>
                    <h1 className="font-bold">Łącznie do zapłaty: {sum}</h1>
                    <button className="rounded-full mt-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">Przejdź do płatności</button><br/>
                    <button onClick={() => makeBackup()} className="rounded-full mt-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">Zapisz koszyk</button><br/>
                    <button onClick={() => restore()} className="rounded-full mt-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">Wczytaj zapisany koszyk</button>
                </div>
            </div>
        </div>
    );
}
export default Cart;

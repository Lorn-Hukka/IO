const Footer = () => {
    return ( 
        <>
<footer className="relative bg-blueGray-200 pt-3 pb-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-base font-semibold text-gray-700">Zostańmy w kontakcie!</h4>
        <h5 className="text-sm mt-0 mb-2 text-gray-600">
          Możesz obserwowac nasze konta na aż 3 platformach społecznościowych.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-gray-600 text-xs font-semibold mb-2">Przydatne linki</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">Twoje konto</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">Dostsawa</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">Zwroty/Reklamacje</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">Wspólpraca</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-gray-600 text-xs font-semibold mb-2 mt-3 lg:mt-0">Kontakt</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">Sagittarius S.A. Sadowa 13</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">48 000 000 000</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">nazwaMaila@gmail.com</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800 font-semibold block pb-2 text-xs" href="#">nazwaMail2a@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-2 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-xs text-gray-500 font-semibold py-1">
          Sagittarius© Wszystkie prawa zastrzerzone  <span id="get-current-year">2021</span>
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
     );
}
 
export default Footer;
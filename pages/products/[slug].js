const ProductPage = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-16 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://copcorp.pl/wp-content/uploads/2018/12/dh2-1.jpg" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Copernicus Corporation</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Podręcznik DarkHerezy II</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Opinie</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  Dark Heresy II edycja, to gra fabularna, osadzona w dalekiej, mrocznej przyszłości świataWarhammer 40.000, pełnego tajemnic i brutalnej przemocy.
                  Gracze wcielają się w role Akolitów i rozpoczynają służbę na pierwszych liniach wielkiej, tajemnej wojny, mającej na celu wykorzenienie niebezpieczeństw,
                  które zagrażają istnieniu całej ludzkości.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Kolor</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Wersja</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>Podręcznk</option>
                        <option>Podręcznik + Materiały</option>
                        <option>Podręcznik + Figurki</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">179,00 zł</span>
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Dodaj do koszyka</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-4" />
        <section className="container mx-auto px-10">
          <h3 className="text-gray-700 text-2xl font-medium">Opinie naszych klientów: </h3>
          <div className="max-w-6xl mx-auto my-5 bg-white shadow-md rounded-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://cms.spfcentaur.pl/uploads/photo_2021_07_12_22_36_12_b61bbd43ed.jpg" alt="Profile picture" />
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Wojciech K.</span>
                  <span className="ml-2 text-green-600 text-xs">Zweryfikowany Kupujący</span>
                </p>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-bold">Wkońcu mogę grać z prawdziwym podręcznikiem!</span>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <div className="flex items-center">
                    <span>Czy ta opinia była pomocna?</span>
                    <button className="flex items-center ml-6 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                      <span className="ml-2">56</span>
                    </button>
                    <button className="flex items-center ml-4 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                      <span className="ml-2">10</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto my-5 bg-white shadow-md rounded-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://cms.spfcentaur.pl/uploads/photo_2021_07_12_22_36_12_b61bbd43ed.jpg" alt="Profile picture" />
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Wojciech K.</span>
                  <span className="ml-2 text-green-600 text-xs">Zweryfikowany Kupujący</span>
                </p>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-bold">Wkońcu mogę grać z prawdziwym podręcznikiem!</span>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <div className="flex items-center">
                    <span>Czy ta opinia była pomocna?</span>
                    <button className="flex items-center ml-6 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                      <span className="ml-2">56</span>
                    </button>
                    <button className="flex items-center ml-4 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                      <span className="ml-2">10</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}

export default ProductPage;
const Contact = () => {
  return (
    <div className="flex ">
    <div className="container mx-auto">
      <div className="max-w-md  
            mx-auto bg-white p-5 rounded-md shadow-sm">
        <div className="text-center">
          <h1 className=" font-semibold text-gray-700 dark:text-gray-200">Skontaktuj się z nami</h1>
          <p className="text-gray-400 dark:text-gray-400">Wypełnij formularz poniżej, aby wysłać do nas 
          
              wiadomość. Odpowiemy jak najszybciej to możliwe.</p>
        </div>
        <div className="m-7">
          <form action="#" method="POST" id="form">
            <div>

            </div>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Imie i Nazwisko:</label>
              <input type="text" name="name" id="name" placeholder="Jan Kowalski" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Adres E-mail:</label>
              <input type="email" name="email" id="email" placeholder="twoj@mail.pl" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Wiadomość do nas:</label>

              <textarea rows="5" name="message" id="message" placeholder="" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Wyślij!</button>
            </div>
          </form>
              </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="flex items-center justify-between bg-green-700 p-6">
        <img src="path-to-your-image.jpg" alt="Wooden Cabin" className="w-24 mr-8" />
        <div className="text-white flex-grow">
          <h1 className="text-2xl mb-4">Поможем с выбором и проконсультируем по всем вопросам</h1>
          <button className="bg-yellow-500 text-lg py-2 px-4">ЗАБРОНИРОВАТЬ</button>
        </div>
      </header>
      <section className="bg-beige-200 p-6">
        <h2 className="text-xl mb-4">Booking Form</h2>
        <form className="flex flex-col">
          <label className="mb-2">
            Как вас зовут?
            <input type="text" name="name" className="ml-2 p-2 border border-gray-300" />
          </label>
          <label className="mb-2">
            +7 (999) 999 99 99
            <input type="text" name="phone" className="ml-2 p-2 border border-gray-300" />
          </label>
          <button type="submit" className="bg-green-700 text-white py-2 px-4">ЗАБРОНИРОВАТЬ</button>
        </form>
        <p className="text-xs mt-4">
          Оставляя заявку Вы принимаете условия соглашения об обработке персональных данных
        </p>
      </section>
    </div>
  );
}

export default App;

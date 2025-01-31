import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__main">
            <h1 className="hero__main-heading">Глэмпинг в Казани</h1>
            <p className="hero__main-text">
              на холмистых склонах в окружении соснового бора с красивым голубым
              небом
            </p>
          </div>
          <button className="hero__inner-btn">
            <p>Забронировать домик</p>
            <IoCalendarNumberOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

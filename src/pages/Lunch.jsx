import React from "react";
import useFetch from "../hooks/useFetch";
function Lunch() {
  const { data, err, isPending } = useFetch(
    "https://saidahmadxon2004.github.io/menubar/db.json",
    "lunch"
  );
  return (
    <div className="section-center">
      {data &&
        data.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <div className="menu-item" key={id}>
              <img className="photo" src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h5>{title}</h5>
                  <span className="price">{price}</span>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Lunch;

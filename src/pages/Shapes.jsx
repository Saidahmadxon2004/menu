import React from "react";
import useFetch from "../hooks/useFetch";
function Shapes() {
  const { data, loading, error } = useFetch(
    "https://saidahmadxon2004.github.io/menubar/db.json",
    "shakes"
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

export default Shapes;

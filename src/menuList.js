import { menu } from "./data.js";
import { MenuItem } from "./menuItem";
import { useState } from "react";
import "./menuList.css";
export function MenuList() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <nav className="navigation">
        <button className="navBtn" onClick={() => setCategory("all")}>
          All
        </button>
        <button className="navBtn" onClick={() => setCategory("breakfast")}>
          Breakfast
        </button>
        <button className="navBtn" onClick={() => setCategory("lunch")}>
          Lunch
        </button>
        <button className="navBtn" onClick={() => setCategory("shakes")}>
          Shakes
        </button>
      </nav>
      <section className="menuList">
        {category === "all"
          ? menu.map((item) => <MenuItem key={item.id} data={item} />)
          : menu
              .filter((item) => item.category === category)
              .map((item) => <MenuItem key={item.id} data={item} />)}
      </section>
    </>
  );
}

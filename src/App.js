import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import { Provider } from "./Context";
import  * as data from "./data.json";
let menu = data
import "./styles.css";

export default function App() {
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={menu.mains} />
        <aside className="aside">
          <Extras type="Sides" items={menu.sides} />
          <Extras type="Drinks" items={menu.drinks} />
        </aside>
        {/* <Total /> */}
      </div>
    </Provider>
  );
}

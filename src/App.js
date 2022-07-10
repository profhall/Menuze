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
        <h2>100% Vegan Soul Fusion Food</h2>
        <Mains meals={menu.mains} />
        <aside className="aside">
          <Extras type="Edibles" items={menu.edibles} />
          <Extras type="Drinks" items={menu.drinks} />
        </aside>
        {/* <Total /> */}
      </div>
    </Provider>
  );
}

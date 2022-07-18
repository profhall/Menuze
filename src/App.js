import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import { Provider } from "./Context";
import StartFirebase  from "./dbconnect/fbase";
import  * as data from "./data.js";
let menu = data.items
import "./styles.css";

StartFirebase()

export default function App() {
  console.log(menu.mains)
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <h2>100% Vegan Soul Fusion Food</h2>
        <Mains meals={menu.mains} />
        {/* <aside className="aside">
          {/* <Extras type="Edibles" items={menu.edibles}  /> */}
          {/* <Extras type="Drinks" items={menu.drinks}  /> */}
        {/* </aside>  */}
      </div>
    </Provider>
  );
}

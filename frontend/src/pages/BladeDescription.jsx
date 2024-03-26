import React from "react";
import EditAndDelete from "../components/EditAndDelete";
import "../styles/BladeDescription.css";

export default function BladeDescription() {
  return (
    <div className="descriptionContainer">
      <EditAndDelete />
      <img
        src="https://t3.ftcdn.net/jpg/05/64/91/08/360_F_564910809_LVJtxVTxPC47CWAJJ91XOgLwGSCcXWXp.jpg"
        alt="eca"
      />
      <h2>Excalibur</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, labore
        nihil temporibus vero, cupiditate velit odio itaque iure dolor ipsam
        fugiat doloremque, dolorem consequuntur in maiores illo iste ea saepe.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        molestiae suscipit earum! Aliquid consequatur possimus, quidem,
        quibusdam laborum deserunt quam nam, officiis vel sapiente ab
        necessitatibus quod vero adipisci veritatis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic cupiditate fugit, saepe nihil
        molestiae est obcaecati repellendus suscipit sit? Veniam quaerat nam
        assumenda cumque voluptatum, perspiciatis unde nulla quasi
        reprehenderit?
      </p>
    </div>
  );
}

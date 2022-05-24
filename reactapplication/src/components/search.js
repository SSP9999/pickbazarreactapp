import React from "react";
import "../styles/search.scss";

export default function Search() {
  return (
  <>
    <div className="searchDiv">
      <div>
        <center>
          <h1>Shop your designer dresses</h1>
        </center>
        <center>
          <p>
            Ready to wear dresses tailored for you online. Hurry up while stock
            lasts.
          </p>
        </center>
        
        <input type="search" />
        <button>Search</button>
      </div>
    </div>
    <div className="cardlayout">
      <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1920&q=75" alt="cardimg"/>
      <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=1920&q=75" alt="cardimg"/>
      <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=1920&q=75" alt="cardimg"/>

    </div>
    </>
    
  );
}

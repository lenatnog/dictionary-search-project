import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

    function Search(event) {
        event.preventDefault();
        alert("Searching...");
    }

 return <div className="Dictionary">Hello from Dictionary component!
 <form onSubmit={Search}>
  <input type="search" autoFocus={true} placeholder="Type a word..." />
 </form>
 </div>;
}
   
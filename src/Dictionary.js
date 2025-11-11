import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword} `);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

 return <div className="Dictionary">Hello from Dictionary component!
   <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Type a word..." />
      </form>
 </div>;
}
   
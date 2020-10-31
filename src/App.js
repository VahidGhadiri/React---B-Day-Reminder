import React, {useState} from "react"
import Data from "./data"
import List from "./list"

function App() {
  return (
    <div>
    <main>
      <section className = "container">
        <h3>0 Birthdays today</h3>
        <List/>
        <button onClik = {console.log("Click me!")}>Clear all</button>
      </section>
    </main>
    </div>
  );
}

export default App;

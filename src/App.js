import React, {useState} from "react"
import data from "./data"
import List from "./list"

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className = "container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClik = {console.log("Click me!")}>Clear all</button>
      </section>
    </main>
  );
}

export default App;



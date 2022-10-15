import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        );
      });
  }

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="serch monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;

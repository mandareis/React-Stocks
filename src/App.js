import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

function apiURL(path) {
  return `http://localhost:3000${path}`;
}

class App extends Component {
  state = {
    allStocks: [],
    myPortfolio: [],
    currentSort: "Price",
  };
  async componentDidMount() {
    const response = await fetch(apiURL("/stocks"));
    const data = await response.json();
    this.setState({
      allStocks: data,
    });
  }

  addToPortfolio = (stockID) => {
    const existingStock = this.state.myPortfolio.find((s) => {
      return s.id === stockID;
    });
    if (existingStock) {
      return;
    }
    const stock = this.state.allStocks.find((s) => {
      return s.id === stockID;
    });
    this.setState({
      myPortfolio: [...this.state.myPortfolio, stock],
    });
  };

  removesFromMyPortfolio = (id) => {
    const result = this.state.myPortfolio.filter((stock) => {
      return stock.id !== id;
    });
    this.setState({
      myPortfolio: result,
    });
  };
  handlesSorting = (e) => {
    this.setState({
      currentSort: e.target.value,
    });
  };

  // stage 0 array transform
  sortStocks = () => {
    return this.state.allStocks.sort((stock1, stock2) => {
      if (this.state.currentSort === "Alphabetically") {
        if (stock1.ticker < stock2.ticker) {
          return -1;
        }
        if (stock1.ticker > stock2.ticker) {
          return 1;
        }
        return 0;
      } else if (this.state.currentSort === "Price") {
        return stock1.price - stock2.price;
      }
    });
  };

  // stage 1 array transform
  filterStocks = () => {
    return this.sortStocks().filter();
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          addToPortfolio={this.addToPortfolio}
          allStocks={this.sortStocks()}
          myPortfolio={this.state.myPortfolio}
          removesFromMyPortfolio={this.removesFromMyPortfolio}
          handlesSorting={this.handlesSorting}
          currentSort={this.state.currentSort}
        />
      </div>
    );
  }
}

export default App;

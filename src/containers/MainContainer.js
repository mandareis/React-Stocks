import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          currentSort={this.props.currentSort}
          handlesSorting={this.props.handlesSorting}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              allStocks={this.props.allStocks}
              addToPortfolio={this.props.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myPortfolio={this.props.myPortfolio}
              removesFromMyPortfolio={this.props.removesFromMyPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;

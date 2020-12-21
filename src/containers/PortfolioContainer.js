import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.myPortfolio.map((s, idx) => {
          return (
            <Stock
              key={idx}
              {...s}
              handlesStockClick={this.props.removesFromMyPortfolio}
            />
          );
        })}
      </div>
    );
  }
}

export default PortfolioContainer;

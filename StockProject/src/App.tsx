import StockTape from "./Components/ticker-tape";
import { LoginButton, SignUp } from "./Components/LoginButton";
import "./App.css"
import { Card } from "./Components/Card";
import { StockList } from "./Components/StockList";
import {Time} from "./Components/Time";
function App() {
  return (
    // main page div
    <div>
      <div className="flexBox">


        <div>
          <h2>Stock Simulator</h2>
          <Time/>
        </div>

        <div className="balanceButton">

        <p>0.00</p>

        </div>

        <div className="graph">
          <Card/>
        </div>

        <div className="actionButtons">
          <div className="spacedBuy">
            
            <button className="buyButton">Buy</button>

          </div>
          <div className="spacedSell">
          
          <button className="sellButton">Sell</button>

          </div>
        </div>

        <div className="stocksOwned">
          <p>List of stocks owned</p>
        </div>

        <div className="list">
          <StockList/>
        </div>

      

      </div>
    </div>
  );
}

export default App;

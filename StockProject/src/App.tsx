import StockTape from "./Components/ticker-tape";
import { LoginButton, SignUp } from "./Components/LoginButton";
import "./App.css"
function App() {
  return (
    // main page div
    <div>
      <div>
        <div>
            <StockTape />
        </div>
        {/* {login button} */}
        <div className="header">
            <h2>Stock Simulator</h2>
            <div className="loginButton">
              <SignUp/>      <LoginButton/> 
            </div>
        </div>
        {/* Stock Graph */}
        <div>

        </div>
        {/* buy sell buttons */}
        <div>

        </div>
        {/* list of stocks owned */}
        <div>

        </div>
      </div>
    </div>
    
  );
}

export default App;

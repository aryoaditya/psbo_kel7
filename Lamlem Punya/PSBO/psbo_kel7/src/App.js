import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Dashboard from "./Component/Dashboard";
import "./style/Homepage.css"


function App() {
  return (
    <div>
        <div className="myBG">
          <NavigationBar />
          <Dashboard />
          
        </div>
    </div>
  );
}

export default App;

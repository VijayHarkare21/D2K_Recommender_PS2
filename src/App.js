import "./App.css";
import Categories from "./component/Categories";
import Intro from "./component/Intro";
import Quote from "./component/Quote";

function App() {
  return (
    <div className="App">
      <Intro />
      <Quote />
      <Categories />
    </div>
  );
}

export default App;

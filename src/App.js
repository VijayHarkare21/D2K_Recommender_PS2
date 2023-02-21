import "./App.css";
import Categories from "./component/Categories";
import Intro from "./component/Intro";
import Quote from "./component/Quote";
import Navbar from "./component/Navbar";
import { useState } from "react";
import Login from "./component/Login";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <div className="App">
      <Navbar handleLoginClick={handleLoginClick} />
      {/* <Login isShowLogin={isShowLogin} /> */}
      {isShowLogin === false ? (
        <Login isShowLogin={isShowLogin} />
      ) : (
        <>
          <Intro />
          <Quote />
          <Categories />
        </>
      )}
    </div>
  );
}

export default App;

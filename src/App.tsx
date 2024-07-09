import Footer from "./footer";
import Home from "./home";
import Header from "./head";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" min-h-screen">
          {" "}
          <div className="  main-h-screen ">
            <Header />
            <div className=" mx-10">
              <Home />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

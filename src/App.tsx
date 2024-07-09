import Footer from "./footer";
import Home from "./home";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <div className="h-screen ">
          <Header />
          <div className=" mx-10">
            <Home />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

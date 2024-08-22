import Footer from "./Header_Footer/footer";
import Header from "./Header_Footer/head";
import Home from "./home";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="md:min-h-screen flex-col  relative ">
          <div className="sticky top-0 z-50 ">
            <Header />
          </div>
          <div className="  md:min-h-[86vh]">
            <Home />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

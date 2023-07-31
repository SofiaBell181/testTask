import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import './index.scss';
import { Home } from "./components/Home";

const App = () => {

  return (
    <>  
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App

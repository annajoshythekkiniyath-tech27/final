
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
//Write missing code here

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </>
  );
}

export default App;

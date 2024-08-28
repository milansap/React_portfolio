import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

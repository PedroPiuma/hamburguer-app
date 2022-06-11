import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUs from "./routes/AboutUs";
import Home from "./routes/Home";

const App = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/signup' element={<SignUp/>}/> */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;

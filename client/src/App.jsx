import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route
          path='/'
          index
          element={<Home />}
        />
        <Route
          path='/properties'
          element={<Properties />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/services'
          element={<Services />}
        />
      </Route>
    </Routes>
  );
}

export default App;

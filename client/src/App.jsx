import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/properties'
          element={<Properties />}
        />
        <Route
          path='/properties/:id'
          element={<PropertyDetailsPage />}
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

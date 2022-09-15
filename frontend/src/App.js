import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NewRecipe from "./pages/NewRecipe";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import EditRecipe from "./pages/EditRecipe";
import ViewRecipe from "./pages/ViewRecipe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Landing />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/viewRecipe/:id' element={<PrivateRoute />}>
            <Route path='/viewRecipe/:id' element={<ViewRecipe />} />
          </Route>

          <Route path='/newRecipe' element={<PrivateRoute />}>
            <Route path='/newRecipe' element={<NewRecipe />} />
          </Route>

          <Route path='/editRecipe/:id' element={<PrivateRoute />}>
            <Route path='/editRecipe/:id' element={<EditRecipe />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

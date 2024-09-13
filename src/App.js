import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./Pages/Home";
import BookDetails from "./Pages/BookDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Messages from "./Pages/Messages";
import AllBooks from "./Pages/AllBooks";
import CheckOut from "./Pages/CheckOut";
import Orders from "./Pages/Orders";
function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="allBooks" element={<AllBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Dashboard/Messages" element={<Messages />} />
          <Route path="Checkout" element={<CheckOut />} />
          <Route path="Dashboard/Orders" element={<Orders />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;

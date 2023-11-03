import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { EventLandingPage } from "./Pages/EventLandingPage";
import { Event } from "./Pages/Event";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import Edata from "./utils/Edata";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EventLandingPage />} />
        <Route path="/event" element={<Event />}>
          <Route path=":eventId" element={<Event />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

export default App;

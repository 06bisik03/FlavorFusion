


import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from './files/Pages/IntroPage';
import MealsPage from "./files/Pages/MealsPage";
import BookingPage from "./files/Pages/BookingPage";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route path="/meals" element={<MealsPage />}/>
        <Route path="/booking" element={<BookingPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;

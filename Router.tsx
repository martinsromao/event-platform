import { Routes, Route } from "react-router-dom";
import { Events } from "./src/pages/Events";
import { Subscribe } from "./src/pages/Subscribe";
export function Router() {
  return (

    <Routes >
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Events />} />
      <Route path="/event/lesson/:slug" element={<Events />} />
    </Routes>


  );
}
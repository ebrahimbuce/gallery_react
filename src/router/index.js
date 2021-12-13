import { Route, Routes } from "react-router-dom";
import Home from "../page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

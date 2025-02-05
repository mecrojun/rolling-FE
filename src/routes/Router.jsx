import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "../pages/Post";
import Main from "../pages/main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

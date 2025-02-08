import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostId from "../pages/PostId";
import Main from "../pages/main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

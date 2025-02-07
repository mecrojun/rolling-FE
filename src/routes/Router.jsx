import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "../pages/Post";
import Main from "../pages/main";
import PostMessage from "../pages/PostMessage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/{id}/message" element={<PostMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

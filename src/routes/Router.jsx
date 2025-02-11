import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import List from "../pages/List/List";
import PostCreate from "../pages/PostAndMessage/PostCreate";
import PostId from "../pages/PostId/PostId";
import PostEdit from "../pages/PostEdit/PostEdit";
import MessageWrite from "../pages/PostAndMessage/MessageWrite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/List" element={<List />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/post/:id/edit" element={<PostEdit />} />
        <Route path="/post" element={<PostCreate />} />
        <Route path="/post/:id/message" element={<MessageWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

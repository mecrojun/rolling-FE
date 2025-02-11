import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import PostEdit from "../pages/PostEdit/PostEdit";
import PostCreate from "../pages/PostCreate";
import PostId from "../pages/PostId";
import List from "../pages/List";
import MessageWrite from "../pages/MessageWrite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id/edit" element={<PostEdit />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/post" element={<PostCreate />} />
        <Route path="/Post/:id/Message" element={<MessageWrite />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

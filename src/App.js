import axios from "axios";
import Home from "./JSX/pages/Home";
import { Route, Routes } from "react-router-dom";
import Navibar from "./JSX/components/Navibar";
import Comment from "./JSX/pages/Comment";
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  return (
    <>
      {/* <Navibar/> */}
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route path="/:subreddit/:id" element={<Comment/>} />
      </Routes>
    </>
    // <Test/>
  );
}

export default App;

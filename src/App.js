import Bottom from "./Components/Bottom/Bottom";
import { Route, Routes,useNavigate } from 'react-router-dom'
import './initWeb.css'
import './normalize.css'
import HomePage from "./Pages/HomePage/HomePage";
import Square from "./Pages/Square/Square";
import Like from "./Pages/Likes/Like";
import My from "./Pages/My/My";
import RecordVedio from "./Pages/RecordVedio/RecordVedio";
import React from "react";

function App() {
  return (
    <div className="App">
      <Bottom />
      <Routes>
        <Route path="/" element={<NavigateToHome />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/square/*" element={<Square />} />
        <Route path="/recordVedio" element={<RecordVedio />} />
        <Route path="/like" element={<Like />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </div >
  );
}

const NavigateToHome = () => {
  const navigate = useNavigate();

  // 在这里执行重定向逻辑
  React.useEffect(() => {
    navigate('/home/homepage');
  }, [navigate]);

  return null; // 由于这个组件只用于重定向，所以返回null
};

export default App;

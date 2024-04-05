import Bottom from "./Components/Bottom/Bottom";
import { Route, Routes } from 'react-router-dom'
import './initWeb.css'
import './normalize.css'
import HomePage from "./Pages/HomePage/HomePage";
import Square from "./Pages/Square/Square";
import Like from "./Pages/Likes/Like";
import My from "./Pages/My/My";
import RecordVedio from "./Pages/RecordVedio/RecordVedio";

function App() {
  return (
    <div className="App">
      <Bottom />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/square" element={<Square />}></Route>
        <Route path="/recordVedio" element={<RecordVedio />}></Route>
        <Route path="/like" element={<Like />}></Route>
        <Route path="/my" element={<My />}></Route>
      </Routes>
    </div>
  );
}

export default App;

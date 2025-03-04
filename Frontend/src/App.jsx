import { Routes, Route, BrowserRouter } from "react-router-dom";
import Links from "./components/Links/Links";
import SystemDesign from "./components/Maps/SystemDesign";
import LuckFactor from "./components/Maps/LuckFactor";
import OperatingSystem from "./components/Maps/OperatingSystem";
import AnkurWarikoo from "./components/Maps/AnkurWarikoo";
import LeetcodeLinkedList from "./components/Maps/LeetcodeLinkedList";
import LeetcodeParenthesis from "./components/Maps/LeetcodeParenthesis";
import Leetcode_hashmap from "./components/Maps/Leetcode_hashmap";
import Leetcode_Slidingwindow from "./components/Maps/Leetcode_Slidingwindow";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/system_design" element={<SystemDesign />} />
        <Route path="/luck_factor_book" element={<LuckFactor />} />
        <Route path="/operating_system" element={<OperatingSystem />} />
        <Route path="/ankur_warikoo" element={<AnkurWarikoo />} />
        <Route path="/leetcode_linkedlist" element={<LeetcodeLinkedList />} />
        <Route path="/leetcode_parenthesis" element={<LeetcodeParenthesis />} />
        <Route path="/leetcode_hashmap" element={<Leetcode_hashmap/>} />
        <Route path="/leetcode_slidingwindow" element={<Leetcode_Slidingwindow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

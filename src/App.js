import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Basic1 from './components/Basic1';

function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="basic1" element={<Basic1/>}/>
      </Route>
    </Routes>
</BrowserRouter>


</>
  );
}

export default App;

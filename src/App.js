import { Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";

function Home() {
  return (
    <div>
      <h2>첫페이지</h2>
      마치 index.html처럼
    </div>
  );
}

function Product() {
  return (
    <div>
      <h2>product</h2>
      제품소개
    </div>
  );
}

function App() {
  return (
    <>
      <h1>React-Router-Dom</h1>
      <nav>
        <ul>
          <li>
            {/* 스타일 지정이 가능 */}
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
      </Routes>

      <hr />
      <footer>footer</footer>
    </>
  );
}

export default App;

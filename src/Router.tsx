import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<>Hello World</>} />
      <Route path="/v2" element={<>Hello World 2</>} />
    </Routes>
  )
}

export default Router;
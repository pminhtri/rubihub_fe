import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<>Hello World</>} />
    </Routes>
  )
}

export default Router;
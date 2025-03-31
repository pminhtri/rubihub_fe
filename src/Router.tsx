import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<>Hello World</>} />
    </Routes>
  )
}

export default AppRouter;
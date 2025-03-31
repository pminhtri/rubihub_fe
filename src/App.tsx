import Router from "@/Router"
import { CssBaseline } from "@mui/material"
import { BrowserRouter } from "react-router"

const Render = () => {
  return (
    <>
      <CssBaseline enableColorScheme={false} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Render />
      <Router />
    </BrowserRouter>
  )
}

export default App

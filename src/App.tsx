import AppRouter from "@/Router";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme={false} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

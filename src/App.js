import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import Main from "./containers/Main";

function App() {
  return (
    <div className="app">
      <SnackbarProvider>
        <CssBaseline />
        <Main />
      </SnackbarProvider>
    </div>
  );
}

export default App;

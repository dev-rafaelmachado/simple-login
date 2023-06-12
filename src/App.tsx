import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GLobalStyle } from "./styles/global";

import { Login } from "./pages/Login.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <GLobalStyle />
    </ThemeProvider>
  );
}

export default App;

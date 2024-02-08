import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      Test
    </div>
   </ThemeProvider>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { StyledEngineProvider } from '@mui/material'



const theme = createTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 768,
      xl: 1024,
      xxl: 1200,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StyledEngineProvider  injectFirst>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  // </StyledEngineProvider  >
)

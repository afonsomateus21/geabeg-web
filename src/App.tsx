import { RouterProvider } from "react-router"
import { router } from "./routes"
import { ThemeProvider } from "flowbite-react"
import { theme } from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} /> 
    </ThemeProvider> 
  )
}

export default App

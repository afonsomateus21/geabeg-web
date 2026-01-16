import { RouterProvider } from "react-router"
import { router } from "./routes"
import { ThemeProvider } from "flowbite-react"
import { theme } from "./theme"
import { StudentProvider } from "./store/students/studentProvider"
import { ToastContainer } from "react-toastify";
import { ProductProvider } from "./store/products/productProvider"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StudentProvider>
        <ProductProvider>
          <RouterProvider router={router} /> 
          <ToastContainer />
        </ProductProvider>
      </StudentProvider>
    </ThemeProvider> 
  )
}

export default App

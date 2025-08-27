import { RouterProvider } from "react-router"
import Button from "./components/Button"
import { router } from "./routes/router"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

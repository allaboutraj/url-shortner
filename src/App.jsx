import { createBrowserRouter } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [],
  },
]);

function App() {
  return <div className="text-2xl">Hello hii</div>;
}

export default App;

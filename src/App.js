import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import EditImage from "./component/EditImage";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "edit",
    element: <EditImage />,
  },
  {
    path: "step1",
    element: <Step1 />,
  },
  {
    path: "step2",
    element: <Step2 />,
  },
  {
    path: "step3",
    element: <Step3 />,
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;

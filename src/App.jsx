import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/spinner/LoadingSpinner";
import Default from "./pages/Default";
import Analytics from "./pages/Analytics";
import PanelLayout from "./layouts/PanelLayout";
import Profile from "./pages/Profile";
import TestForm from "./pages/TestForm";
import DisplayTest from "./pages/displayTest";
import MailPage from "./pages/Mail";

// function lazyLoadRoutes(componentName, src = "pages") {
//   const LazyElement = lazy(() => import(`./${src}/${componentName}`));

//   // Wrapping around the suspense component is mandatory
//   return (
//     <Suspense
//       fallback={
//         <Box bgcolor="background.default" height={"100vh"}>
//           <LoadingSpinner />
//         </Box>
//       }
//     >
//       <LazyElement />
//     </Suspense>
//   );
// }

const router = createBrowserRouter([
  // {
  //   element: lazyLoadRoutes("AuthLayout", "layouts"),
  //   path: "/",
  //   children: [
  //     // {
  //     //   index: true,
  //     //   loader: () => redirect("/login"),
  //     // },
  //     // {
  //     //   path: "login",
  //     //   element: lazyLoadRoutes("Login"),
  //     // },
  //     // {
  //     //   path: "register",
  //     //   element: lazyLoadRoutes("Register"),
  //     // },
  //     // {
  //     //   path: "reset-password",
  //     //   element: lazyLoadRoutes("ResetPassword"),
  //     // },
  //     // {
  //     //   path: "email-confirm",
  //     //   element: lazyLoadRoutes("EmailConfirm"),
  //     // },
  //   ],
  // },
  {
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: <Analytics />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/default",
        element: <Default />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/myForm",
        element: <TestForm />,
      },
      {
        path: "/display",
        element: <DisplayTest />,
      },
      {
        path: "/mail",
        element: <MailPage />,
      },
      // {
      //   path: "projects",
      //   children: [
      //     {
      //       index: true,
      //       element: lazyLoadRoutes("Projects"),
      //     },
      //     {
      //       path: ":id",
      //       element: lazyLoadRoutes("Projects/SingleProject"),
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <Status500 />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

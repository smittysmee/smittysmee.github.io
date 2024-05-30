import * as React from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthProvider } from "./AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { store } from "../store";
// import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

// const queryConfig = {
//   queries: {
//     useErrorBoundary: true,
//     refetchOnWindowFocus: false,
//     retry(failureCount: number, error: { status: number; }) {
//       if (error.status === 404) return false
//       else if (failureCount < 2) return true
//       else return false
//     },
//   },
// }

// function ReduxProvider(props: PropsWithChildren) {
//   return <Provider store={store}>{props.children}</Provider>;
// }

function AppProviders(props: PropsWithChildren) {
  const router = createBrowserRouter([
    {
      path: "*",
      element: props.children,
    },
  ]);

  return (
    // <QueryClientProvider client={new QueryClient()}>
    //   <ReduxProvider>
    //     <AuthProvider>
          <RouterProvider router={router} />
        // </AuthProvider>
      // </ReduxProvider>
    // </QueryClientProvider>
  );
}

export { AppProviders,
    // ReduxProvider
};

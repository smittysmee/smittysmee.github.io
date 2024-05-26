import * as React from "react";
// import { QueryClient, QueryClientProvider ***REMOVED*** from "@tanstack/react-query";
// import { AuthProvider ***REMOVED*** from "./AuthContext";
import { RouterProvider, createBrowserRouter ***REMOVED*** from "react-router-dom";
// import { store ***REMOVED*** from "../store";
// import { Provider ***REMOVED*** from "react-redux";
import { PropsWithChildren ***REMOVED*** from "react";

// const queryConfig = {
//   queries: {
//     useErrorBoundary: true,
//     refetchOnWindowFocus: false,
//     retry(failureCount: number, error: { status: number; ***REMOVED***) {
//       if (error.status === 404) return false
//       else if (failureCount < 2) return true
//       else return false
// ***REMOVED***,
//   ***REMOVED***,
// ***REMOVED***

// function ReduxProvider(props: PropsWithChildren) {
//   return <Provider store={store***REMOVED***>{props.children***REMOVED***</Provider>;
// ***REMOVED***

function AppProviders(props: PropsWithChildren) {
  const router = createBrowserRouter([
    {
      path: "*",
      element: props.children,
***REMOVED***,
  ]);

  return (
    // <QueryClientProvider client={new QueryClient()***REMOVED***>
    //   <ReduxProvider>
    //     <AuthProvider>
          <RouterProvider router={router***REMOVED*** />
        // </AuthProvider>
      // </ReduxProvider>
    // </QueryClientProvider>
  );
***REMOVED***

export { AppProviders,
    // ReduxProvider
***REMOVED***;

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {AppProviders} from "./context";


const root = ReactDOM.createRoot(document.getElementById("root") as Element);



async function enableMocking() {
    if (process.env.MOCKED_API !== "true") {
        return
    }

    const {worker} = await import('./mocks/browser')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}


enableMocking().then(() => {
    root.render(
        <AppProviders>
            <App/>
        </AppProviders>
    );
})


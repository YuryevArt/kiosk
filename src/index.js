import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://24e448ea138343a6bb2b54a4ef0fdfc0@o210766.ingest.sentry.io/5931721",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

/*
 * B2CyberSec GmbH — App Router
 * Design: Apple Dark Mode + Editorial Precision
 * Routes: Home, Assessment, Impressum, Datenschutz
 * Performance: Home is loaded eagerly (LCP route), all other pages lazy-loaded.
 */

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";

// Code-splitting: lazy-load secondary routes to keep the initial bundle small.
const Assessment = lazy(() => import("./pages/Assessment"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-black/10 border-t-[#2563eb] rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/nis2-check">
        <Suspense fallback={<RouteFallback />}>
          <Assessment />
        </Suspense>
      </Route>
      <Route path="/readiness-check">
        <Suspense fallback={<RouteFallback />}>
          <Assessment />
        </Suspense>
      </Route>
      <Route path="/impressum">
        <Suspense fallback={<RouteFallback />}>
          <Impressum />
        </Suspense>
      </Route>
      <Route path="/imprint">
        <Suspense fallback={<RouteFallback />}>
          <Impressum />
        </Suspense>
      </Route>
      <Route path="/datenschutz">
        <Suspense fallback={<RouteFallback />}>
          <Datenschutz />
        </Suspense>
      </Route>
      <Route path="/privacy">
        <Suspense fallback={<RouteFallback />}>
          <Datenschutz />
        </Suspense>
      </Route>
      <Route path="/404">
        <Suspense fallback={<RouteFallback />}>
          <NotFound />
        </Suspense>
      </Route>
      <Route>
        <Suspense fallback={<RouteFallback />}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

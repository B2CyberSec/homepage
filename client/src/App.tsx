/*
 * B2CyberSec GmbH — App Router
 * Design: Apple Dark Mode + Editorial Precision
 * Routes: Home, Assessment, Impressum, Datenschutz
 * Performance: Home is loaded eagerly (LCP route), all other pages lazy-loaded.
 */

import { lazy, Suspense, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { trackPageView } from "@/lib/tracking";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomeNew from "./pages/HomeNew";

// Code-splitting: lazy-load secondary routes to keep the initial bundle small.
const Assessment = lazy(() => import("./pages/Assessment"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Check = lazy(() => import("./pages/Check"));
const Danke = lazy(() => import("./pages/Danke"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-[#0A84FF] rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  const firstRender = useRef(true);
  useEffect(() => {
    // Erst-PageView kommt vom Pixel-Basiscode in index.html; hier nur SPA-Routenwechsel.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    trackPageView();
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={HomeNew} />
      <Route path="/check">
        <Suspense fallback={<RouteFallback />}>
          <Check />
        </Suspense>
      </Route>
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
      <Route path="/termin-gebucht">
        <Suspense fallback={<RouteFallback />}>
          <Danke />
        </Suspense>
      </Route>
      <Route path="/appointment-booked">
        <Suspense fallback={<RouteFallback />}>
          <Danke />
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
      <ThemeProvider defaultTheme="dark">
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

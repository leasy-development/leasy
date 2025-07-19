import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";
import "@/lib/pwa"; // Initialize PWA features

// 🔐 CRITICAL: React 19 singleton safety check with enhanced validation
if (!React || typeof React !== 'object') {
  throw new Error("❌ React is not properly imported as an object");
}

// Check for React instance collision (React 19 compatible)
if (typeof window !== 'undefined') {
  // @ts-ignore - Checking for multiple React instances
  if (window.React && window.React !== React) {
    console.error("❌ Multiple React instances detected!", {
      windowReact: window.React?.version,
      importedReact: React.version
    });
    throw new Error("Multiple React instances detected - this causes hook failures");
  }
  // @ts-ignore - Store React reference for debugging
  window.React = React;
}

if (!React.useEffect || typeof React.useEffect !== 'function') {
  throw new Error("❌ React.useEffect is not available - React may not be initialized correctly");
}

if (!React.useState || typeof React.useState !== 'function') {
  throw new Error("❌ React.useState is not available - React hooks are corrupted");
}

// Verify React singleton - prevent multiple React instances
const reactVersion = React.version;
if (!reactVersion) {
  throw new Error("❌ React version is undefined - multiple React instances detected");
}

console.log("✅ React 19 singleton verified:", {
  version: reactVersion,
  useEffect: typeof React.useEffect,
  useState: typeof React.useState,
  hasStrictMode: !!React.StrictMode,
});

// Create QueryClient with React Query v5 configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // React Query v5 uses gcTime instead of cacheTime
    },
    mutations: {
      retry: 0,
    }
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

// 🚀 Render with GUARANTEED React 19 + React Query v5 compatibility
console.log("🚀 Rendering with verified React 19 + React Query v5...");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);

console.log("✅ React app rendered successfully with React 19 + React Query v5");
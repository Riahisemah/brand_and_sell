import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import DownloadCenter from "./pages/DownloadCenter";
import Preview from "./pages/Preview";
import ProductGenerator from "./pages/ProductGenerator";
import TemplatePreviewWithEditor from "./pages/TemplatePreviewWithEditor";

import TemplateGenerator from "./pages/TemplateGenerator";
import PostsGenerator from "./pages/PostsGenerator";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";

import PrivateRoute from "@/components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth pages (accessibles sans être connecté) */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Pages protégées */}
          <Route path="/home" element={<PrivateRoute><Index /></PrivateRoute>} />
          <Route path="/download-center" element={<PrivateRoute><DownloadCenter /></PrivateRoute>} />
          <Route path="/product-generator" element={<PrivateRoute><ProductGenerator /></PrivateRoute>} />
          <Route path="/template-generator" element={<PrivateRoute><TemplateGenerator /></PrivateRoute>} />
          <Route path="/post-generator" element={<PrivateRoute><PostsGenerator /></PrivateRoute>} />
          {/* <Route path="/templates" element={<PrivateRoute><Templates /></PrivateRoute>} /> */}
          {/* <Route path="/template-edit/:id" element={<PrivateRoute><TemplatePreviewWithEditor /></PrivateRoute>} /> */}
          {/* <Route path="/preview/:id" element={<PrivateRoute><Preview /></PrivateRoute>} /> */}


          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

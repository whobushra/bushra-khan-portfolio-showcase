
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnterpriseAICaseStudy from "./components/case-studies/EnterpriseAICaseStudy";
import AnytracCaseStudy from "./components/case-studies/AnytracCaseStudy";
import TSFCaseStudy from "./components/case-studies/TSFCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/enterprise-ai" element={<EnterpriseAICaseStudy />} />
          <Route path="/case-study/anytrac" element={<AnytracCaseStudy />} />
          <Route path="/case-study/tsf-donation" element={<TSFCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

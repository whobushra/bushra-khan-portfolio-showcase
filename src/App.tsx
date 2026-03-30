import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnterpriseAICaseStudy from "./components/case-studies/EnterpriseAICaseStudy";
import AnytracCaseStudy from "./components/case-studies/AnytracCaseStudy";
import TSFCaseStudy from "./components/case-studies/TSFCaseStudy";
import InternationalRoamingCaseStudy from "./components/case-studies/InternationalRoamingCaseStudy";
import KnewyCaseStudy from "./components/case-studies/KnewyCaseStudy";
import JioVideoAnalyticsCaseStudy from "./components/case-studies/JioVideoAnalyticsCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/enterprise-ai" element={<EnterpriseAICaseStudy />} />
          <Route path="/case-study/anytrac" element={<AnytracCaseStudy />} />
          <Route path="/case-study/tsf-donation" element={<TSFCaseStudy />} />
          <Route path="/case-study/international-roaming" element={<InternationalRoamingCaseStudy />} />
          <Route path="/case-study/knewy" element={<KnewyCaseStudy />} />
          <Route path="/case-study/jio-video-analytics" element={<JioVideoAnalyticsCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

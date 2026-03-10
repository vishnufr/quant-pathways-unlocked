import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Curriculum from "./pages/Curriculum";
import Lesson from "./pages/Lesson";
import Track from "./pages/Track";
import CommunityPage from "./pages/Community";
import ResourcesPage from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/track/:trackId" element={<Track />} />
          <Route path="/lesson/:trackId/:moduleId/:lessonId" element={<Lesson />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

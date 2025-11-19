import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Tools from "@/pages/Tools";
import ToolPage from "@/pages/ToolPage";
import Articles from "@/pages/Articles";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import ContactUs from "@/pages/ContactUs";
import QRCodeTools from "@/pages/QRCodeTools";
import CalculatorTools from "@/pages/CalculatorTools";
import UnitConverterTools from "@/pages/UnitConverterTools";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tools" component={Tools} />
      <Route path="/articles" component={Articles} />
      <Route path="/tool/:id" component={ToolPage} />
      <Route path="/qr-code-tools" component={QRCodeTools} />
      <Route path="/calculator-tools" component={CalculatorTools} />
      <Route path="/unit-converter-tools" component={UnitConverterTools} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/contact" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

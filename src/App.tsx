import { BrowserRouter } from "react-router-dom";
import { AccessibilityProvider } from "./context/AccessibilityProvider";
import { AppRoutes } from "./routes";
import { Chatbot } from "./components/chatbot/Chatbot";

function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <AppRoutes />
        <Chatbot />
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;

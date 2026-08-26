import { BrowserRouter } from "react-router-dom";
import { AccessibilityProvider } from "./context/AccessibilityProvider";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AccessibilityProvider>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import OwnerProjects from "./pages/OwnerProjects";
import OwnerSingleProject from "./pages/OwnerSingleProject";
import DarkModeProvider from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/complete-profile" element={<CompleteProfilePage />} />
            <Route path="/owner" element={<OwnerLayout />}>
              <Route
                index
                element={<Navigate to="dashboard" replace={true} />}
              />
              <Route path="dashboard" element={<OwnerDashboardPage />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route path="projects/:id" element={<OwnerSingleProject />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

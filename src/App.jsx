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
import FreelancerDashboardPage from "./pages/FreelancerDashboardPage";
import FreelancerProposals from "./pages/FreelancerProposals";
import SubmitedProjectsPage from "./pages/SubmitedProjectsPage";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Users from "./pages/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/complete-profile" element={<CompleteProfilePage />} />
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboardPage />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route path="projects/:id" element={<OwnerSingleProject />} />
            </Route>
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboardPage />} />
              <Route path="proposals" element={<FreelancerProposals />} />
              <Route path="projects" element={<SubmitedProjectsPage />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin/users" element={<Users />} />
              <Route
                path="/admin/proposals"
                element={<FreelancerProposals />}
              />
              <Route
                path="/admin/projects"
                element={<SubmitedProjectsPage />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

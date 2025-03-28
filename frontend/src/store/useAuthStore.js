import { create } from "zustand"; // Ensure zustand is installed and imported correctly
import { axiosInstance } from "../lib/axios"; // Ensure axiosInstance is properly defined and exported

// Zustand store for authentication
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  // Function to check authentication status
  checkAuth: async () => {
    try {
      // Fetch user authentication status from backend
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

import Navbar from "@/components/navbar";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />    {/* ✅ Navbar is now inside AuthProvider */}
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

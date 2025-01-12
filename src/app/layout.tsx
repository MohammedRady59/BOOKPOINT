"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/redux/store";
import Navbar from "@/components/Navbar";
import { Box, Container } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/cart" ||
    pathname === "/favorite";

  return (
    <html lang="en">
      <body>
        <div>
          <Provider store={store}>
            <Navbar />
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "start",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {!isAuthPage && <SideBar />}

                <div className="flex-1 w-full">{children}</div>
              </Box>
            </Container>
            <Toaster />
          </Provider>
        </div>
      </body>
    </html>
  );
}

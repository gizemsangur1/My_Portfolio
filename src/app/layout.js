import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container>
          <Grid item xs={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}

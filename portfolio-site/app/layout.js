import { Source_Code_Pro } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import ChatBubbles from "./components/ChatBubbles";


const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata = {
  title: "ALEXWELTY",
  description: "Alexzander Welty's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <ChatBubbles />
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  )
}
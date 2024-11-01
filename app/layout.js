import { Outfit } from "next/font/google"; // Importing the Outfit font from Google
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], // Specify the font weights you want to include
});

export const metadata = {
  title: "AI-Powered Mock Interview Platform",
  description:
    "Prepare for your next interview with AI-generated questions and feedback tailored to your role and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <ClerkProvider>{children} </ClerkProvider>
      </body>
    </html>
  );
}

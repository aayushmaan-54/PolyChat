import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://poly-chat.vercel.app"),
  title: {
    default: "Polychat - AI Chat with Custom Models",
    template: "Polychat | %s",
  },
  description: "Polychat is a powerful AI chat app that lets you integrate various AI models, customize settings, and create expert AI personalities with custom prompts.",
  icons: {
    icon: "/polychat.svg",
  },
  openGraph: {
    title: "Polychat - AI Chat with Custom Models",
    description: "Chat with AI like never before! Use multiple AI models, customize responses, and create expert AI personas tailored to your needs.",
    images: ["/polychat-og.png"],
  },
  keywords: [
    "AI Chatbot",
    "Polychat",
    "Custom AI Models",
    "ChatGPT Alternative",
    "AI Conversations",
    "AI Expert Models",
    "AI API Integration",
  ],
};


export default function RootLayout({ children}: 
  Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

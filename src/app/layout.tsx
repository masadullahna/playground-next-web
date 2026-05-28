import { type FC } from "react";
import { type Metadata } from "next";
import "./globals.css";
import { type RootLayoutProps } from "@/types";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: { default: "Playground", template: "%s | Playground" },
  description: "Playground NextJS Web App",
};

const RootLayout: FC<Readonly<RootLayoutProps>> = ({
  children,
}) => {
  return (
    <html
      lang="en"
      className="h-full"
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <body className="h-full flex flex-col overflow-hidden">
        <Header />

        <main className="flex grow flex-col min-h-0">
          {children}
        </main>

      </body>
    </html>
  );
}

export default RootLayout
import '@/app/ui/global.css';
import {ReactNode} from "react";
import { inter } from "@/app/ui/fonts";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

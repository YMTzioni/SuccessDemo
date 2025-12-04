import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// נשתמש בגופן Rubik שתומך בעברית
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Success College - מכללת סאקסס",
  description: "מערכת לימודים דיגיטלית של מכללת סאקסס - לימודי היי-טק ועסקים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className="dark">
      <body className={`${rubik.variable} font-sans antialiased bg-gray-900 text-gray-100`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "נחשים בישראל – בין רתע לחשיבות אקולוגית",
  description: "מצגת אינטראקטיבית ללימוד בכיתה על נחשי ישראל: זנים ארסיים ולא ארסיים, כללי התנהגות וחשיבות אקולוגית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}


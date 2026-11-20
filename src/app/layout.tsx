import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Anumati",
  title: { default: "Anumati | DPDP Compliance Platform", template: "%s | Anumati" },
  description: "Anumati brings DPDP governance, assessments, consent and remediation into one workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

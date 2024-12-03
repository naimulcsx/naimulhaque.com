import "../global.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}

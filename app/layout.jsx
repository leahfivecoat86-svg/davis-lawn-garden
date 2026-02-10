export const metadata = {
  title: "Davis Lawn & Garden | Commercial Landscaping",
  description:
    "Commercial lawn maintenance and professional flowerbed design, restoration, and seasonal color installations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}

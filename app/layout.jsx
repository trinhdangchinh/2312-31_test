import "./globals.css";

import GTM from "./GTM";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "black",
};
export default async function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="relative">
        {/* <ContextProvider> */}
        {children}
        {/* </ContextProvider> */}
        <GTM />
        <GTM noScript={true} />
      </body>
    </html>
  );
}

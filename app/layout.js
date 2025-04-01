'use client';
import { Provider } from "react-redux";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import "./globals.css";
import { store } from "./redux/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

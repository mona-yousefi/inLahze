
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

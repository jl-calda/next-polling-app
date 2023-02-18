//Font import
import { Nunito_Sans } from "@next/font/google";
const nunito_sans = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});
//Styles import
import "../styles/globals.css";
import Header from "./_Header";
import Footer from "./_Footer";

type PageProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: PageProps) => {
  return (
    <html lang="en">
      <head />
      <body
        className={`max-w-7xl mx-auto ${nunito_sans.variable} font-nunito-sans flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default HomeLayout;

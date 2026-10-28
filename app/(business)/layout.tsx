import { Montserrat } from "next/font/google";
import { Nav } from "@/components/business/Nav";
import { GlobalStyle } from "@/components/business/GlobalStyle";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={montserrat.className} id="top">
      <GlobalStyle />
      <Nav />
      {children}
    </div>
  );
}

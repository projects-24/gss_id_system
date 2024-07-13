import { Montserrat, Open_Sans} from "next/font/google";
import "../assets/styles/styles.css";
import 'funuicss/css/fun.css'
import "aos/dist/aos.css"


const font = Montserrat({ subsets:[], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
export const metadata = {
  title: "Data Collection App"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={font.className}>
        <div className=" " style={{height:'100%'}}>
        {children}
        </div>
      </body>
    </html>
  );
}

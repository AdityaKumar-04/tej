import './globals.css';
import Script from 'next/script';
import { Libre_Baskerville} from "next/font/google";
import WhatsAppButton from './components/WhatsAppButton';


const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"]  });

export const metadata = {
  title: 'Tezz Travels - Cab and Taxi Booking Service',
  description: 'Explore, rent, and enjoy your dream car with Ridex.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={libre.className}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />

        <meta name="viewport" content="width=device-width, initial-scale=0.75, user-scalable=no" />
       
      </head>
      <body>
        {children}

        <WhatsAppButton />

        {/* Include Ionicons */}
        <Script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          noModule
          strategy="afterInteractive"
        />

        {/* Include Razorpay
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        /> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16888309041" />
      </body>
    </html>
  );
}

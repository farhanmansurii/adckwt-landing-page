import Head from "next/head";
import Script from "next/script";

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="conversion-script"
        dangerouslySetInnerHTML={{
          __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-16484992696/KEgVCPLr1JkZELiN1LQ9',
                'value': 1.0,
                'currency': 'USD',
                'transaction_id': '12345'
              });
            `,
        }}
      />
      <div className="py-6 px-2 bg-primary text-white">
        Thank you for your submission! We will get back to you shortly !
      </div>
    </>
  );
}

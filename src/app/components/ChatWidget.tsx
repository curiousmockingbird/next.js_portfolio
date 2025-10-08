import Script from 'next/script';

// Renders Crisp or Tidio chat widget based on env vars.
// Prefer Crisp if both are present.
// Configure with:
// - NEXT_PUBLIC_CRISP_WEBSITE_ID="your-crisp-id"
// - NEXT_PUBLIC_TIDIO_PUBLIC_KEY="your-tidio-public-key"

const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
const tidioKey = process.env.NEXT_PUBLIC_TIDIO_PUBLIC_KEY;

export default function ChatWidget() {
  // Load in all environments as long as a key is present.
  if (crispId) {
    return (
      <Script id="crisp-chat" strategy="afterInteractive">
        {`
          window.$crisp=[];window.CRISP_WEBSITE_ID="${crispId}";
          (function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.head.appendChild(s);})();
        `}
      </Script>
    );
  }
  if (tidioKey) {
    return (
      <Script
        id="tidio-chat"
        strategy="afterInteractive"
        src={`https://code.tidio.co/${tidioKey}.js`}
      />
    );
  }
  return null;
}

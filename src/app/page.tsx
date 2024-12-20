'use client';

import dynamic from 'next/dynamic';


const Demo = dynamic(() => import('./components/Demo'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <meta name="fc:frame" content='{"version":"next","imageUrl":"public/splash.png","button":{"title":"Open Frame","action":{"type":"launch_frame","name":"gifts","url":"https://main.d337pf8gj8cpmm.amplifyapp.com/","splashImageUrl":"public/splash.png","splashBackgroundColor":"#ffffff"}}}' />
      <Demo />
    </main>
  );
}
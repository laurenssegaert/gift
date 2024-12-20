import React, { useState, useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';

export default function StackedSVGsWithSDK() {
  const [isToggled, setIsToggled] = useState(false);

  // Initialize Farcaster SDK and mark the frame as ready
  useEffect(() => {
    const initializeSDK = async () => {
      await sdk.actions.ready(); // Notify Farcaster that the frame is ready
    };
    initializeSDK();
  }, []);

  // Handle the tap to move the gift top upwards
  const handleToggle = () => {
    setIsToggled((prev) => !prev); // Toggle between true and false
  };

  return (
    <div className="bg-green-900">
    <div
      className="scale-100 relative flex items-center transform translate-y-32 justify-center w-full h-screen bg-green-900 "
      onClick={handleToggle}
    >
      <p
        className={`font-tiny5 text-green-200 text-center  text-4xl transform -translate-y-48 top-64 text-xl font-bold  transition-opacity   ${
          isToggled ? 'duration-200 opacity-0 ' : 'delay-200 duration-300 opacity-100'
        }`}
        style={{ zIndex: 4 }}
      >
        Tap to reveal <br></br>your gift!
      </p>
      {/* Hand SVG */}
      <div
        className={`absolute transform transition-transform duration-500 ${
          isToggled ? '-translate-y-28' : 'translate-y-4'
        }`}
        style={{ zIndex: 1 }}
      >
        <svg width="140" height="169" viewBox="0 0 140 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.4898 8.69531H66.0996V160.304H82.4898V160.304H115.269V143.912H131.659V70.1562H123.464V53.7661H82.4898V8.69531ZM49.709 49.6699L49.709 160.304H66.0992L66.0992 49.6699H49.709ZM25.123 94.7415L25.123 127.522H49.7084V70.1562H33.3178H25.123H8.73242V94.7415H25.123Z" fill="white"/>
<rect width="110.634" height="16.3902" transform="matrix(-4.37116e-08 1 1 4.37112e-08 41.5137 49.6699)" fill="white"/>
<rect width="110.634" height="16.3902" transform="matrix(-4.37116e-08 1 1 4.37112e-08 41.5137 49.6699)" fill="white"/>
<rect x="66.0957" y="0.5" width="16.3902" height="8.19508" fill="black"/>
<rect x="90.6836" y="45.5723" width="16.3902" height="8.19508" fill="black"/>
<rect x="107.074" y="53.7695" width="16.3902" height="8.19508" fill="black"/>
<rect x="123.463" y="61.9609" width="8.19512" height="8.19508" fill="black"/>
<rect x="131.658" y="70.1582" width="8.19512" height="49.1705" fill="black"/>
<rect x="123.463" y="119.328" width="8.19512" height="24.5853" fill="black"/>
<rect x="107.074" y="61.9609" width="8.19512" height="24.5853" fill="black"/>
<rect x="115.268" y="143.914" width="8.19512" height="24.5853" fill="black"/>
<rect x="41.5137" y="143.914" width="8.19512" height="24.5853" fill="black"/>
<rect x="33.3164" y="127.525" width="8.19512" height="16.3902" fill="black"/>
<rect x="25.123" y="111.133" width="8.19512" height="16.3902" fill="black"/>
<rect x="16.9277" y="94.7441" width="8.19512" height="16.3902" fill="black"/>
<rect x="0.537109" y="70.1582" width="8.19512" height="16.3902" fill="black"/>
<rect x="25.123" y="61.9609" width="8.19508" height="16.3902" transform="rotate(90 25.123 61.9609)" fill="black"/>
<rect x="57.9043" y="41.4766" width="8.19508" height="16.3902" transform="rotate(90 57.9043 41.4766)" fill="black"/>
<rect x="8.73242" y="86.5488" width="8.19512" height="8.19508" fill="black"/>
<rect x="25.123" y="70.1582" width="8.19512" height="8.19508" fill="black"/>
<rect x="90.6836" y="8.69531" width="65.5607" height="8.19511" transform="rotate(90 90.6836 8.69531)" fill="black"/>
<rect x="41.5137" y="49.6719" width="49.1705" height="8.19511" transform="rotate(90 41.5137 49.6719)" fill="black"/>
<rect x="66.0957" y="8.69531" width="65.5607" height="8.19511" transform="rotate(90 66.0957 8.69531)" fill="black"/>
<rect x="115.268" y="168.5" width="65.5609" height="8.19508" transform="rotate(-180 115.268 168.5)" fill="black"/>
</svg>

      </div>

      {/* Gift Top SVG */}
      <div

        className={`absolute transform transition-transform duration-500  ${
          isToggled ? '-translate-y-64' : '-translate-y-16'
        }`}
        style={{ zIndex: 2 }}
      >
       <svg width="257" height="97" viewBox="0 0 257 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.07031" y="56.9023" width="240.001" height="16" fill="#C64040"/>
<rect x="112.072" y="56.9023" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="104.072" y="64.9043" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="80.0703" y="80.9023" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="88.0723" y="80.9023" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="136.072" y="56.9023" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="144.07" y="64.9043" width="8.00004" height="7.99998" fill="#FEDC52"/>
<rect x="152.072" y="72.9023" width="16.0001" height="7.99998" fill="#FEDC52"/>
<rect x="120.072" y="40.9043" width="16.0001" height="31.9999" fill="#FEDC52"/>
<rect x="136.072" y="8.90234" width="40.0002" height="39.9999" fill="#FEDC52"/>
<rect width="8.00004" height="31.9999" transform="matrix(-1 0 0 1 184.07 8.90234)" fill="#FEDC52"/>
<rect width="40.0002" height="39.9999" transform="matrix(-1 0 0 1 120.072 8.90234)" fill="#FEDC52"/>
<rect x="72.0703" y="8.90234" width="8.00004" height="31.9999" fill="#FEDC52"/>
<rect x="248.072" y="80.9023" width="64.0003" height="7.99998" transform="rotate(-180 248.072 80.9023)" fill="black"/>
<rect x="88.0723" y="80.9023" width="80.0004" height="7.99998" transform="rotate(-180 88.0723 80.9023)" fill="black"/>
<rect x="8.07031" y="56.9023" width="16" height="8.00004" transform="rotate(90 8.07031 56.9023)" fill="black"/>
<rect x="104.072" y="72.9023" width="16.0001" height="7.99998" transform="rotate(-180 104.072 72.9023)" fill="black"/>
<rect x="96.0703" y="96.9023" width="16.0001" height="7.99998" transform="rotate(-180 96.0703 96.9023)" fill="black"/>
<rect x="176.072" y="96.9023" width="16.0001" height="7.99998" transform="rotate(-180 176.072 96.9023)" fill="black"/>
<rect x="80.0703" y="88.9023" width="8.00004" height="7.99998" transform="rotate(-180 80.0703 88.9023)" fill="black"/>
<rect x="184.07" y="88.9023" width="8.00004" height="7.99998" transform="rotate(-180 184.07 88.9023)" fill="black"/>
<rect x="104.072" y="88.9023" width="8.00004" height="7.99998" transform="rotate(-180 104.072 88.9023)" fill="black"/>
<rect x="112.072" y="80.9023" width="8.00004" height="7.99998" transform="rotate(-180 112.072 80.9023)" fill="black"/>
<rect x="152.072" y="80.9023" width="8.00004" height="7.99998" transform="rotate(-180 152.072 80.9023)" fill="black"/>
<rect x="160.07" y="88.9023" width="8.00004" height="7.99998" transform="rotate(-180 160.07 88.9023)" fill="black"/>
<rect x="120.072" y="80.9023" width="8.00004" height="16" transform="rotate(-180 120.072 80.9023)" fill="black"/>
<rect x="144.07" y="80.9023" width="8.00004" height="16" transform="rotate(-180 144.07 80.9023)" fill="black"/>
<rect x="112.072" y="64.9043" width="8.00004" height="16" transform="rotate(-180 112.072 64.9043)" fill="black"/>
<rect x="104.072" y="56.9023" width="96.0005" height="7.99997" transform="rotate(-180 104.072 56.9023)" fill="black"/>
<rect width="16" height="8.00004" transform="matrix(-1.1925e-08 1 1 1.19248e-08 248.072 56.9023)" fill="black"/>
<rect width="16.0001" height="7.99998" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 152.072 72.9023)" fill="black"/>
<rect width="16.0001" height="7.99998" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 120.072 40.9043)" fill="black"/>
<rect width="16.0001" height="7.99998" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 120.072 80.9023)" fill="black"/>
<rect width="24.0227" height="7.85351" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 79.9922 8.75781)" fill="black"/>
<rect width="16.1691" height="8.31548" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 104.016 17.0723)" fill="black"/>
<rect width="8.00004" height="7.99998" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 80.0703 8.90234)" fill="black"/>
<rect width="16" height="8.00004" transform="matrix(-4.37117e-08 1 1 4.37111e-08 136.072 40.9043)" fill="black"/>
<rect width="16" height="8.00004" transform="matrix(-4.37117e-08 1 1 4.37111e-08 112.072 40.9043)" fill="black"/>
<rect x="104.072" y="40.9043" width="7.99998" height="8.00004" transform="rotate(-90 104.072 40.9043)" fill="black"/>
<rect x="120.072" y="32.9023" width="8.00004" height="23.9999" transform="rotate(180 120.072 32.9023)" fill="black"/>
<rect x="72.0703" y="32.9023" width="8.00004" height="16" transform="rotate(180 72.0703 32.9023)" fill="black"/>
<rect x="96.0703" y="32.9023" width="7.99998" height="8.00004" transform="rotate(-90 96.0703 32.9023)" fill="black"/>
<rect x="72.0703" y="16.9043" width="7.99998" height="8.00004" transform="rotate(-90 72.0703 16.9043)" fill="black"/>
<rect x="72.0703" y="40.9043" width="7.99998" height="8.00004" transform="rotate(-90 72.0703 40.9043)" fill="black"/>
<rect x="80.0703" y="48.9023" width="7.99998" height="8.00004" transform="rotate(-90 80.0703 48.9023)" fill="black"/>
<rect x="168.07" y="8.90234" width="16.0001" height="7.99998" transform="rotate(-180 168.07 8.90234)" fill="black"/>
<rect x="152.072" y="16.9043" width="8.00004" height="7.99998" transform="rotate(-180 152.072 16.9043)" fill="black"/>
<rect x="176.072" y="8.90234" width="8.00004" height="7.99998" transform="rotate(-180 176.072 8.90234)" fill="black"/>
<rect width="7.99998" height="8.00004" transform="matrix(-4.37117e-08 -1 -1 4.37111e-08 152.072 40.9043)" fill="black"/>
<rect width="8.00004" height="23.9999" transform="matrix(1 8.74221e-08 8.74234e-08 -1 136.072 32.9023)" fill="black"/>
<rect width="8.00004" height="16" transform="matrix(1 8.74221e-08 8.74234e-08 -1 184.07 32.9023)" fill="black"/>
<rect width="7.99998" height="8.00004" transform="matrix(-4.37117e-08 -1 -1 4.37111e-08 160.07 32.9023)" fill="black"/>
<rect width="7.99998" height="8.00004" transform="matrix(-4.37117e-08 -1 -1 4.37111e-08 184.07 16.9043)" fill="black"/>
<rect width="7.99998" height="8.00004" transform="matrix(-4.37117e-08 -1 -1 4.37111e-08 184.07 40.9043)" fill="black"/>
<rect width="7.99998" height="8.00004" transform="matrix(-4.37117e-08 -1 -1 4.37111e-08 176.072 48.9023)" fill="black"/>
<rect width="16.0001" height="7.99998" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 168.07 80.9023)" fill="black"/>
<rect width="8.00004" height="16" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 144.07 64.9043)" fill="black"/>
<rect width="96.0005" height="7.99997" transform="matrix(1 -8.74221e-08 -8.74234e-08 -1 152.072 56.9023)" fill="black"/>
<rect x="176.072" y="88.9023" width="8.00004" height="7.99998" transform="rotate(-180 176.072 88.9023)" fill="white"/>
<rect x="128.07" y="48.9023" width="8.00004" height="7.99998" transform="rotate(-180 128.07 48.9023)" fill="white"/>
<rect x="168.07" y="24.9023" width="8.00004" height="7.99998" transform="rotate(-180 168.07 24.9023)" fill="white"/>
<rect x="136.072" y="56.9023" width="8.00004" height="7.99998" transform="rotate(-180 136.072 56.9023)" fill="black" fill-opacity="0.1"/>
<rect x="104.072" y="80.9023" width="16.0001" height="7.99998" transform="rotate(-180 104.072 80.9023)" fill="white"/>
<rect x="96.0703" y="24.9023" width="16.0001" height="7.99998" transform="rotate(-180 96.0703 24.9023)" fill="white"/>
<rect x="160.07" y="80.9023" width="8.00004" height="7.99998" fill="#FEDC52"/>
</svg>

      </div>

      {/* Gift Bottom SVG */}
      <div className="absolute" style={{ zIndex: 3 }}>
      <svg width="203" height="81" viewBox="0 0 203 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8.62695" y="8.58594" width="186" height="64.0002" fill="#C64040"/>
<rect x="8.62695" y="8.58594" width="186" height="8.00003" fill="black" fill-opacity="0.15"/>
<rect x="93.627" y="8.58594" width="16" height="64.0002" fill="#FEDC52"/>
<rect x="93.627" y="56.5859" width="16.0001" height="8.00001" transform="rotate(-90 93.627 56.5859)" fill="white"/>
<rect x="8.62695" y="64.5859" width="186" height="8.00003" fill="black" fill-opacity="0.15"/>
<rect x="93.4844" y="80.5078" width="7.85355" height="79.9215" transform="rotate(-180 93.4844 80.5078)" fill="black"/>
<rect x="117.506" y="80.5078" width="7.85355" height="79.9215" transform="rotate(-180 117.506 80.5078)" fill="black"/>
<rect x="194.627" y="80.5859" width="186" height="8.00001" transform="rotate(-180 194.627 80.5859)" fill="black"/>
<rect x="0.626953" y="72.5859" width="64.0002" height="8.00001" transform="rotate(-90 0.626953 72.5859)" fill="black"/>
<rect x="8.62695" y="0.585938" width="186" height="8.00003" fill="black"/>
<rect x="194.627" y="72.5859" width="64.0002" height="8.00001" transform="rotate(-90 194.627 72.5859)" fill="black"/>
<rect x="93.627" y="72.5859" width="16.0001" height="8.00001" transform="rotate(-90 93.627 72.5859)" fill="black" fill-opacity="0.1"/>
<rect x="101.627" y="24.4395" width="16.0001" height="8.00001" transform="rotate(-90 101.627 24.4395)" fill="black" fill-opacity="0.1"/>
</svg>

      </div>
      <div className='absolute bg-green-900 h-32 w-64 translate-y-24'style={{ zIndex: 2 }}></div>
    </div>
    </div>
  );
}
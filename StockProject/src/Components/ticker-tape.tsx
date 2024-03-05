import React, { useEffect } from 'react';

const StockTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NASDAQ:TSLA', title: 'Tesla' },
        { proName: 'NASDAQ:AAPl', title: 'Apple' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'NASDAQ:NVDA', title: 'Nividia' },
        { proName: 'NASDAQ:NFLX', title: 'Netflix' },
        { proName: 'NASDAQ:GOOGL', title: 'Google' },
        { proName: 'NASDAQ:META', title: 'Meta' }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en'
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget">{}</div>
    </div>
  );
};

export default StockTape;
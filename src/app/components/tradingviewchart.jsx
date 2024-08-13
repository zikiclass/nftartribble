"use client";
import React, { useEffect } from "react";

const TradingView = () => {
  useEffect(() => {
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        exchange: "US",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: false,
        showFloatingTooltip: false,
        width: "400",
        height: "550",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(209, 212, 220, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      });
      container.appendChild(script);
    }

    return () => {
      // Cleanup the script when the component unmounts
      const existingScript = document.querySelector(
        'script[src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default TradingView;

// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";
import "./Graph.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (document.getElementById("tradingview_89d4a") && "TradingView" in window) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "TSE:4262",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_89d4a",
        });
      }
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="tradingview-widget-container">
        <div id="tradingview_89d4a" />
        <div className="tradingview-widget-copyright">
          {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
        </div>
      </div>
    </DashboardLayout>
  );
}

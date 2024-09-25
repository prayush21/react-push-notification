import React, { useEffect, useRef } from "react";

const PushNotificationButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    const button = buttonRef.current;

    if (!button) return;

    const handleClick = () => {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              title: "Example Notification",
              body: "Test text",
              icon: "https://assets.vogue.in/photos/6450f93613d0fd2111a35ecb/2:3/w_2560%2Cc_limit/AliaBhatt_MET_Apr2023_S1_00111%2520(1).jpg",
              badge: "img.webp",
            });
          } else {
            new Notification("Example Notification", {
              body: "Test text",
              badge: "img.webp",
              icon: "https://assets.vogue.in/photos/6450f93613d0fd2111a35ecb/2:3/w_2560%2Cc_limit/AliaBhatt_MET_Apr2023_S1_00111%2520(1).jpg",
            });
          }
        }
      });
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Show Notification</button>
    </div>
  );
};

export default PushNotificationButton;

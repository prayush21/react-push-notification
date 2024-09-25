// service-worker.ts
const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener("push", (event: PushEvent) => {
  const data = event.data ? event.data.json() : {};
  const title: string = data.title || "New Notification";
  const options: NotificationOptions = {
    body: data.body || "You have a new message",
    icon: data.icon || "/icon.png",
    badge: data.badge || "/badge.png",
  };

  event.waitUntil(sw.registration.showNotification(title, options));
});

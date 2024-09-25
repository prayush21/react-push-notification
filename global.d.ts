// global.d.ts
interface PushEvent extends ExtendableEvent {
  data: {
    json: () => any;
  };
}

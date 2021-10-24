const pubsub = {
  events: {},
  publish(eventName, data) {
    if (pubsub.events[eventName]) {
      pubsub.events[eventName].forEach((callback) => callback(data));
    }
  },
  subscribe(eventName, callback) {
    if (!Array.isArray(pubsub.events[eventName])) {
      pubsub.events[eventName] = [];
    }
    pubsub.events[eventName].push(callback);
  },
};

export default pubsub;

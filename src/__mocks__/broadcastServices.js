const broadcastServices = {
  createBroadcast: data => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  },

  fetchBroadcast: data => {
    console.log(data);
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  },
};

export default broadcastServices;

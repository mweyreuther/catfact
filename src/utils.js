function sleep(duration) {
  return new Promise((resolve, reject) => {
    if (!duration) resolve(true);
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
}

export { sleep };

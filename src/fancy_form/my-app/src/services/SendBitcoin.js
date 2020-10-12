const sendImitation = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

export const sendBitcoin = () => {
  return sendImitation();
}
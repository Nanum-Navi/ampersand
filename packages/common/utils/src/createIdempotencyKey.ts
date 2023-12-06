export const createIdempotencyKey = (length = 30) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";

  for (let i = 0; i < length; i += 1) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
};

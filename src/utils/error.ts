export const getMessageFromError = (error: any) => {
  const message = error?.response?.data?.error || error?.message;
  return message;
};

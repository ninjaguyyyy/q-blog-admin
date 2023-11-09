const TOKEN_STORAGE_KEY = 'ACCESS_TOKEN';

export const getToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
};

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const checkTokenExpiration = (token: string) => {
  const decodedJwt = parseJwt(token);

  if (decodedJwt.exp * 1000 < Date.now()) {
    return true;
  }

  return false;
};

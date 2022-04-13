export function getItem(key) {
  return localStorage.getItem(key);
}

export function setItem(key, value) {
  return localStorage.setItem(key, value);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}

export function isItem(key, value) {
  const item = JSON.parse(getItem(key));

  if (item) {
    const isArrayValue = item.some((v) => v === value);

    if (isArrayValue) {
      return true;
    }

    return false;
  }

  return false;
}

const USER_KEY = "bytespace:user";
const FOLLOWING_KEY = "bytespace:following";
const listeners = new Set();

export function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function read(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }
  listeners.forEach((listener) => listener());
}

export function getUser() {
  return read(USER_KEY, null);
}

export function saveUser(user) {
  write(USER_KEY, user);
}

export function isFollowing(creatorSlug) {
  return read(FOLLOWING_KEY, []).includes(creatorSlug);
}

export function setFollowing(creatorSlug, follow) {
  const current = read(FOLLOWING_KEY, []).filter((slug) => slug !== creatorSlug);
  write(FOLLOWING_KEY, follow ? [...current, creatorSlug] : current);
}

export function safeRedirectPath(path, fallback = "/") {
  return path && path.startsWith("/") && !path.startsWith("//") ? path : fallback;
}

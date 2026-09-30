const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function login({ email }) {
  await wait(800);
  return { user: { email } };
}

export async function signup({ name, email }) {
  await wait(800);
  return { user: { name, email } };
}

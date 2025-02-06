export const getRandomArrayElement = <T>(prompts: T[]) => {
  return prompts[Math.floor(Math.random() * prompts.length)];
};

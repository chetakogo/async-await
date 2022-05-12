import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    return result;
  } catch (error) {
    throw new Error(error);
  }
})();

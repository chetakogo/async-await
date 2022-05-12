import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('should sum', async (done) => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  done();
});

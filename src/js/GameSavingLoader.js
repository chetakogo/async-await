/* eslint-disable no-undef */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return resolve(JSON.parse(value));
  }
}
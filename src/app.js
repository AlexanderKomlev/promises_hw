import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(json)
      .then((response) => {
        const data = JSON.parse(response);
        return new GameSaving(data.id, data.created, data.userInfo);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

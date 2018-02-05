import { observable, runInAction, action } from 'mobx';
import marked from 'marked';

const BASE_URL = 'https://api.github.com/repos/HackYourFuture';
export default class ModuleInfoStore {
  @observable info = null;

  @action
  getInfo = name => {
    fetch(`${BASE_URL}/Project/readme`)
      .then(res => res.json())
      .then(jsonRes => {
        runInAction(() => {
          this.info = this.decodeAndTurnInHtml(jsonRes.content);
        });
      });
  };

  decodeAndTurnInHtml = data => {
    const decoded = atob(data);
    return marked(decoded);
  };
}

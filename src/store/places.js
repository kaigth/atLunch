import {
  action,
  makeAutoObservable,
  observable,
} from 'mobx';

export default class places {
  items = [];

  constructor() {
    makeAutoObservable(this, {
        items: observable,
        setPlaces: action,
    })
  }

  get places() {
    return this.items;
  }

  setPlaces = (places) => {
    this.items = places;
  }
};

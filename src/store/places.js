import {
  action,
  makeAutoObservable,
  observable,
} from 'mobx';

export default class places {
  items = [];
  activePlace = null;

  constructor() {
    makeAutoObservable(this, {
        activePlace: observable,
        items: observable,
        setActivePlace: action,
        setFavorite: action,
        setPlaces: action,
        sortBy: action,
    });

    this.setPlaces = this.setPlaces.bind(this);
    this.setActivePlace = this.setActivePlace.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  get places() {
    return this.items;
  }

  parseFavorites(arr, compareArr) {
    return arr.map(place => {
      const value = compareArr.find(val => place.reference === val);
      if (value === place.reference) {
        return { ...place, favorite: true };
      }

      return { ...place, favorite: false };
    })
  }

  setPlaces(places) {
    const filteredPlaces = places.filter(item => item.business_status === 'OPERATIONAL');
    const favorites = JSON.parse(window.localStorage.getItem('favorites'));
    const newItems = this.parseFavorites(filteredPlaces, favorites);
    this.items = newItems;
  }

  sortBy(order='asc', type) {
    if (this.items.length <= 0) return;
    if (order === 'asc') return this.items.sort((a, b) => b[type] - a[type]);

    return this.items.sort((a, b) => a[type] - b[type]);
  }

  get activePlace() {
    return this.activePlace;
  }

  setActivePlace(reference) {
    const item = this.items.find(place => place.reference === reference);
    this.activePlace = item;
  }

  setFavorite(item) {
    const favs = JSON.parse(window.localStorage.getItem('favorites')) || [];
    const matchItem = favs.find(fav => fav === item);
    let tempArr = [];

    if (matchItem) {
      tempArr = favs.filter(fav => fav !== item);
    } else {
      tempArr = favs.concat(item);
    }

    const parsed = this.parseFavorites(this.items, tempArr);
    this.items = parsed;

    window.localStorage.setItem('favorites', JSON.stringify(tempArr));
  }
};

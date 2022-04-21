import {
    action,
    makeAutoObservable,
    observable,
} from 'mobx';
   
export default class map {
  map = null;
  activeMarker = null;

  constructor() {
    makeAutoObservable(this, {
        map: observable,
        setPlaces: action,
        activeMarker: observable,
        setActiveMarker: action,
    });

    this.setMap = this.setMap.bind(this);
    this.setActiveMarker = this.setActiveMarker.bind(this);
  }

  get map() {
    return this.map;
  }

  setMap(googleMap) {
    this.map = googleMap;
  }

  get activeMarker() {
    return this.activeMarker;
  }

  setActiveMarker(marker) {
    this.activeMarker = marker;
  }
};

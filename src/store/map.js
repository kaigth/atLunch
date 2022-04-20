import {
    action,
    makeAutoObservable,
    observable,
   } from 'mobx';
   
   export default class map {
     map = null;
   
     constructor() {
       makeAutoObservable(this, {
           map: observable,
           setPlaces: action,
       })
     }
   
     get map() {
       return this.map;
     }
   
     setMap = (googleMap) => {
       this.map = googleMap;
     }
   };
   
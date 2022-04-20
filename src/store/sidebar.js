import {
    action,
    makeAutoObservable,
    observable,
   } from 'mobx';
   
export default class sidebar {
    open = false;
    activePlace = '';

    constructor() {
        makeAutoObservable(this, {
            open: observable,
            toggleOpen: action,
            activePlace: observable,
            setActivePlace: action,
        })
    }

    get open() {
        return this.open;
    }

    toggleOpen = () => {
        this.open = !this.open;
    }

    get activePlace() {
        return this.activePlace;
    }

    setActivePlace = (reference) => {
        this.activePlace = reference;
    }
};
   
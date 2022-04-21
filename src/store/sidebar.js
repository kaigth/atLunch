import {
    action,
    makeAutoObservable,
    observable,
   } from 'mobx';
   
export default class sidebar {
    open = false;

    constructor() {
        makeAutoObservable(this, {
            open: observable,
            toggleOpen: action,
        });

        this.toggleOpen = this.toggleOpen.bind(this);
        this.openSidebar = this.openSidebar.bind(this);
    }

    get open() {
        return this.open;
    }

    toggleOpen() {
        this.open = !this.open;
    }

    openSidebar() {
        this.open = true;
    }
};
   
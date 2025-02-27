import { makeAutoObservable, autorun } from "mobx";

class NewStore {
  userDetails = null;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  setUserDetails(details) {
    this.userDetails = details;
  }

  loadFromLocalStorage() {
    const storedData = localStorage.getItem("mobx-store");
    if (storedData) {
      this.userDetails = JSON.parse(storedData);
    }
  }
}

const Store = new NewStore();

// Persist store data to localStorage whenever it changes
autorun(() => {
  if (Store.userDetails) {
    localStorage.setItem("mobx-store", JSON.stringify(Store.userDetails));
  }
});

export default Store;

class Storage {
  #dbName = "todosStorage";
  id = 1;

  constructor() {
    this.#getId();
  }

  #getId() {
    const data = this.getItems();
    if (!data) return;

    this.id = this.getItems().at(0).id + 1;
  }

  getItems() {
    return JSON.parse(localStorage.getItem(this.#dbName));
  }

  setItem(todoItem) {
    const localTodoItem = { ...todoItem };

    if (typeof localTodoItem !== "object") {
      throw new Error("Should be an object data type");
    }

    const existingData = this.getItems();
    let dataToSave = existingData ? existingData : [];
    const currentTodo = {
      id: this.id,
      executionStatus: false,
      title: localTodoItem.title.trim(),
      description: localTodoItem.description.trim(),
    };

    dataToSave = [currentTodo, ...dataToSave];
    localStorage.setItem(this.#dbName, JSON.stringify(dataToSave));
    this.id += 1;
    return dataToSave;
  }

  changeStatus = (target, todoItemId) => {
    const existingData = this.getItems();
    const newData = [...existingData];
    const status = target.checked;
    const currentIndex = newData.findIndex((item) => item.id === todoItemId);
    newData[currentIndex].executionStatus = status;
    localStorage.setItem(this.#dbName, JSON.stringify(newData));
    return newData;
  };

  changeContent = (todoItemId, currentTitle, currentDescription) => {
    const existingData = this.getItems();
    const newData = [...existingData];
    const currentIndex = newData.findIndex((item) => item.id === todoItemId);
    newData[currentIndex].title = currentTitle;
    newData[currentIndex].description = currentDescription;
    localStorage.setItem(this.#dbName, JSON.stringify(newData));
    return newData;
  };

  removeItem(todoItemId) {
    const existingData = this.getItems();
    const newData = [...existingData].filter((item) => item.id !== todoItemId);
    localStorage.setItem(this.#dbName, JSON.stringify(newData));
    return newData;
  }

  clearStorage() {
    localStorage.removeItem(this.#dbName);
    this.id = 1;
  }
}

export default new Storage();

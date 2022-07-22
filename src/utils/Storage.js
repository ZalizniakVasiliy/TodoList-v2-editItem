class Storage {
    #dbName = 'todosStorage';
    id = 1;

    constructor() {
        this.#getId();
    }

    #getId() {
        const data = this.getItems();
        if (!data || []) return;

        this.id = this.getItems().at(-1).id + 1;
    }

    getItems() {
        return JSON.parse(localStorage.getItem(this.#dbName));
    };

    setItem(todoItem) {
        const localTodoItem = {...todoItem};

        if (typeof localTodoItem !== 'object') {
            throw new Error('Should be an object data type');
        }

        const existingData = this.getItems();
        let dataToSave = existingData ? existingData : [];
        const currentTodo = {
            id: this.id,
            executionStatus: 'no-status',
            title: localTodoItem.title.trim(),
            description: localTodoItem.description.trim()
        };

        dataToSave = [currentTodo, ...dataToSave];
        localStorage.setItem(this.#dbName, JSON.stringify(dataToSave));
        this.id += 1;
        return dataToSave;
    };
}

export default new Storage();
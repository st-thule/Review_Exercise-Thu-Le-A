export default class ToDo {
    constructor(todo) {
        this.id = todo?.id || 0,
        this.title = todo?.title || "",
        this.completed = todo?.completed || false
    }

    
}
import { v4 as uuidv4 } from 'uuid';

export default class TodoItem {
    constructor(isChecked, text) {
        this.id = uuidv4();
        this.isChecked = isChecked;
        this.text = text;
    }
}

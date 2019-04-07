export class ConversationModel {
    intents: Array<any>;
    entities: Array<any>;
    input: {};
    output: {};
    context: {};
    constructor() {
        this.intents = [];
        this.entities = [];
        this.input = {};
        this.output = {};
        this.context = {};   
    }
}

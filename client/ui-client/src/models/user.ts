export class UserModel {
    _id: string;
    name: string;
    age: number;
    address: string;
    sex: string;
    maritalStatus: string;
    conversation: Array<any>;
    constructor() {
        this.name = "";
        this.age = 0;
        this.address = "";
        this.sex = "";
        this.maritalStatus = "";        
        this.conversation = [];
    }
}
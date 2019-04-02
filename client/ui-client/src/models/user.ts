export class UserModel {
    _id: string;
    name: string;
    age: number;
    address: string;
    sex: string;
    maritalStatus: string;
    constructor() {
        this.name = "";
        this.age = 0;
        this.address = "";
        this.sex = "";
        this.maritalStatus = "";        
    }
}
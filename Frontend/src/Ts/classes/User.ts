import '../protos/ArrayPrototypes';

export default class User {
    protected name     :string;
    protected email    :string;
    protected password :string;
    protected gender   :boolean;
    
    constructor(name:string, email:string, password:string, gender:boolean) {
        // Check every string type argument
        if ([name,email,password].isAnyEmpty('Texts') || [gender].isAnyEmpty('NumBool'))
            throw new Error("Missing or Bad argument [G.K]");
            
        this.name     = name;
        this.email    = email;
        this.password = password;
        this.gender   = gender;
    }
}
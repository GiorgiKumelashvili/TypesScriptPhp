export default class User {
    protected name     :string;
    protected surname  :string;
    protected email    :string;
    protected password :string;
    protected age      :number;
    protected gender   :boolean;
    
    constructor(
        name     :string,
        surname  :string,
        age      :number,
        gender   :boolean,
        email    :string,
        password :string
    ) {
        // Check every string type argument
        if (this.checkProperties('Text', name,surname,email,password))
            throw new Error("Missing string argument [G.K]");
            
        this.name     = name;
        this.surname  = surname;
        this.age      = age;
        this.gender   = gender;
        this.email    = email;
        this.password = password;
    }

    private checkProperties(whichToCheck:string, ...args):boolean {
        if (whichToCheck == 'Text')
            return args.some(el => el == '' || el == undefined || el == null);
        else
            return args.some(el => isNaN(el) || el == undefined || el == null);
    }
}
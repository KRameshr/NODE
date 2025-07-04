class hero {
    fistname = 'default';
    lastname = 'default';
    constructor(fname,lname){
        this.fistname = fname;
        this.lastname = lname;
        // this will represent class member
    }
    sayname(){
        return this.fistname+ " " +this.lastname
    }
}
module.exports = {hero}

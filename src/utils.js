export const showMeThis = (tekst) => {
    return tekst;
};


class User {
    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(`Hi, my name is: ${this.name}`);
    }

    getName() {
      return this.name;
      //return getTheNameFromThis(); --> not working
    }

    whatIsThis() {
      console.log("[From inside an object] 'This' is: " + this);
      return "Just testing ...";
    }
}

const getTheNameFromThis = () => {
  return this.name;
}

export const createsAUserAndReturnsTheName = (username) => {
    let user = new User(username);
    user.sayHi();
    return user.getName();
};

export const whatIsThis = () => {
  let lars = new User("Lars");
  return lars.whatIsThis();
} 

export const whatIsThis2 = () => {
  console.log("[From the main execution context] 'This' is: " + this);
  return "Just testing (again) ...";
} 
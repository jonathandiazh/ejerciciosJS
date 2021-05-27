const setState = (state)=>{
  return !state;
}

export class BankAccount {
  constructor() {
    this.myBalance = 0;
    this.state = false; //Close
  }



  open() {
    if(this.state === true){
      throw new ValueError();
    }else{
      this.state = setState(this.state);
    }
  }

  close() {
    if(this.state === false){
      throw new ValueError();
    }else{
      this.myBalance = 0;
      this.state = setState(this.state);
    }
  }

  deposit(amount) {
    if(amount > 0){
      if(this.state === true){
        this.myBalance += amount;
      }else{
        throw new ValueError();
      }
    }else{
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if(amount >= 0){
      if(this.myBalance >= amount && this.state === true){
        this.myBalance -= amount;
      }else{
        throw new ValueError();
      }
    }else{
      throw new ValueError();
    }
  }

  get balance() {
    if(this.state === true){
      return this.myBalance;
    }else{
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
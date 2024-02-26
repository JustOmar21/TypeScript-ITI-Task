// Task 1

let arrNum : number[] = [1,2,3];

// Task 2

let arrNumStr : (number | string )[] = ["Final" , "Fantasy" , 7 , "Rebirth" , "Out" , 29 , "Feb"];
console.log(arrNumStr);

// Task 3

let numBool : number | boolean = 1 == 1 ? 21 : true;

// Task 4

function twoFunc(a , b)
{
   console.log("hi");
}
//twoFunc()

// Task 5


type addressType = {street : string , suite : string , city : string , zipcode : string , geo :{lat:number , lng:number}};
interface IEmployee {
   id : number,
   name : string,
   getUsername():string,
   setUsername(username : string):void,
   email : string,
   address : addressType
}

class Employee implements IEmployee{
   constructor(
      public id : number ,
      public name : string ,
      private username : string ,
      public email : string ,
      public address : addressType
      ){}

      getUsername(): string {
         return this.username;
      }

      setUsername(username): void {
         this.username = username;
      }
}

let emp = new Employee
( 1 ,"Omar Tarek" ,"JustOmar21" ,"tarekes68@gmail.com" ,
{street : "street" , suite : "suite" , city : "city" , zipcode : "code" , geo : {lat : 321 , lng : 213} })

// Task 6

class Manager extends Employee{
   public Display() {
      console.log(this.address);
   }
}

let manager = new Manager( 1 ,"Omar Tarek" ,"JustOmar21" ,"tarekes68@gmail.com" ,
{street : "street" , suite : "suite" , city : "city" , zipcode : "code" , geo : {lat : 321 , lng : 213} })

manager.Display();

// Task 7

interface IAccount{
   openDate : Date,
   addCustomer() : void,
   removeCustomer() : void
}


abstract class Account{
   constructor(public AccNo : number , protected balance : number ){}
   abstract debitAmount():number;
   abstract creditAmount():number;
   abstract getBalance():number;
}

class currentAccount extends Account implements IAccount{

   constructor( _AccNo : number , _balance : number , public openDate , public interestRate : number ){super(_AccNo , _balance)}
   addCustomer(): void {
      console.log("Customer added");
   }
   removeCustomer(): void {
      console.log("Customer removed");
   }
   debitAmount(): number {
      return this.balance;
   }
   creditAmount(): number {
      return this.balance;
   }
   getBalance(): number {
      return this.balance;
   }
   
}
class savingAccount extends Account implements IAccount{

   constructor( _AccNo : number , _balance : number , public openDate , public minBalance : number ){super(_AccNo , _balance)}
   addCustomer(): void {
      console.log("Customer added");
   }
   removeCustomer(): void {
      console.log("Customer removed");
   }
   debitAmount(): number {
      return this.balance;
   }
   creditAmount(): number {
      return this.balance;
   }
   getBalance(): number {
      return this.balance;
   }
   
}
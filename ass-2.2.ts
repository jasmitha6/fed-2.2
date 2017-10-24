

// creating  a company with employee and _dept as a private property 
class employee1 {
  private _employee: string;
  private _dept: number;

  constructor(employee: string, dept : number){
    this._employee = employer;
    this._dept = dept;
  }
// below function is returning employee and _dept
  getemployee(): string {
    return `Employee 1 belongs to  ${this._employee} and works in ${this._dept}`
  }
}
// calling getemployee function and printing the value in the console.
let employer = new employee1("kaushik", 2);
console.log(employer.getemployee())


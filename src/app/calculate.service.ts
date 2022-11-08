import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  sum: number = 0;
  value1: string = "";
  inputNumber: string = "";
  inputOperation: string = "";
  displayValue!: any;

  constructor() { }

  setValue1(btn: string){
    this.value1 = String(this.sum);
    this.displayValue = this.value1;
    this.inputNumber = "";
    this.inputOperation = btn;
  }

  setValue1FromEqual(){
    this.value1 = String(this.sum);
    this.inputOperation = "";
  }

  numberFromInout(btn: string){
    this.inputNumber = this.inputNumber + btn;
    this.displayValue = this.inputNumber;
    console.log("Number: ", this.inputNumber);
  }

  clear() {
    this.value1 = "";
    this.inputNumber = "";
    this.inputOperation = "";
    this.sum = 0;
    this.displayValue = undefined ;
  }

  plus(num1: number, num2: number) {
    this.sum = num1 + num2
  }

  minus(num1: number, num2: number){
    this.sum = num1 - num2
  }

  multiply(num1: number, num2: number){
    this.sum = num1 * num2
  }

  divide(num1: number, num2: number){
    this.sum = (num1 / num2)
  }

  
}

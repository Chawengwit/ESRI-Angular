import { Component, Input, OnInit, Output } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayValInComponent!: string ;

  constructor(private calculatorService: CalculateService) { }
  ngOnInit(): void {
  }

  displayBtnClick(btn: string){
    if( (btn === "+" || btn === "-" || btn === "X" || btn === "%") && this.calculatorService.inputOperation === "" ){
      if (this.calculatorService.value1 === ""){
        this.calculatorService.value1 = this.calculatorService.inputNumber; //value1
        this.calculatorService.displayValue = btn;
      } 
      this.calculatorService.inputOperation = btn;//operation
      this.calculatorService.inputNumber = "";
    }
    else if(btn === "+" || btn === "-" || btn === "X" || btn === "%" && this.calculatorService.inputOperation !== ""){
      if(this.calculatorService.inputOperation === "+"){
        this.calculatorService.plus(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1(btn);
      }
      else if(this.calculatorService.inputOperation === "-") {
        this.calculatorService.minus(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1(btn);
      }
      else if(this.calculatorService.inputOperation === "X"){
        this.calculatorService.multiply(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1(btn);
      }
      else if(this.calculatorService.inputOperation === "%"){
        this.calculatorService.divide(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1(btn);
      }
      else {
        console.log("Error");
      }
    }
    // =
    else if(btn === "="){
      if(this.calculatorService.inputOperation === "+"){
        this.calculatorService.plus(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1FromEqual();
      }
      else if(this.calculatorService.inputOperation === "-") {
        this.calculatorService.minus(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1FromEqual();
      }
      else if(this.calculatorService.inputOperation === "X"){
        this.calculatorService.multiply(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1FromEqual();
      }
      else if(this.calculatorService.inputOperation === "%"){
        this.calculatorService.divide(Number(this.calculatorService.value1),Number(this.calculatorService.inputNumber));
        this.calculatorService.setValue1FromEqual();
      }
      else {
        console.log("Error");
      }

      console.log("this is total: ",this.calculatorService.sum);
      this.calculatorService.displayValue = this.calculatorService.sum;
      //clear
      this.calculatorService.inputNumber = "";
      this.calculatorService.inputOperation = "";
    }
    else if(btn === "C"){
      this.calculatorService.clear();
    }
    else { //Number
      this.calculatorService.numberFromInout(btn);
    }
    //set display
    this.displayValInComponent = this.calculatorService.displayValue;

  }

}

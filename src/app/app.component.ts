import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  value:any
  currentValue = ''

  writeToInput(num:any){
    // alert(num)
    this.currentValue = this.currentValue + num
    console.log(this.currentValue);
    this.value = this.currentValue

  }

  back(){
    // console.log("Inside Bcak",this.currentValue);
    this.currentValue = this.currentValue.slice(0,-1)
    this.value = this.currentValue
    console.log("after slice",this.currentValue);
    if(this.value == ''){
      this.value = '0'
     this.currentValue = this.value 
    }
  }

  clearInput(){
    this.value = ""
    this.currentValue = this.value
  }

  evaluateExp(){
    this.value = eval(this.currentValue)
    this.currentValue = this.value
  }
}

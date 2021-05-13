import { Component, OnInit } from '@angular/core';
// <input id={{myId}} type = "text" value = "Jhon">
// https://angular.io/guide/binding-syntax
@Component({
  selector: 'app-property-binding',
  template: `<input [id]="myId" type = "text" value = "Jhon">
  <input [disabled]="true" id={{myId}} type = "text" value = "Jhon">
  <h2 class="text-success">Angular 9</h2>
  <h2 [class]="successClass">Angular 9</h2>
  <h2 class="text-special" [class]="successClass">Angular 9</h2>
  <h2 [class.text-danger]="hasError">Angular 9</h2>
  <h2 [ngClass]="messageClasses">class binding - use object&ngClass</h2>

  <h2 [style.color]= "hasError ? 'red':'orange'"> style binding - use if statement</h2>
  <h2 [style.color]= "hightlightColor"> style binding - use variable</h2>
  <h2 [ngStyle]= "titleStyle"> style binding - use object&ngStyle</h2>


  <button (click) = "onClick($event)">click event binding - click to show a message and pass event</button>
  {{clickMessage}}

  <br/>
  <hr/>
  <input type = "text" #myInput>
  <button (click)="func(myInput.value)">Click to get value in text box</button>
  
  <hr/>
  <h1> two way data binding </h1>
  <input type="text" [(ngModel)]="name"/>{{name}}

  <hr />
  <h1>structural component</h1>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>The then Block</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>The else Block</h2>
  </ng-template>

  <hr/>
  <-- <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'green'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked red color</div>
    <div *ngSwitchCase="'orange'">You picked red color</div>
    <div *ngSwitchDefault>default color</div>
    </div> -->

    <div *ngFor="let color of colors">
      <h2 []>
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class PropertyBindingComponent implements OnInit {

  public color = "blue"
  displayName = true
  // class-binding
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public hightlightColor = "orange";
  public name="";
  public clickMessage = "";

  public func(msg){
    console.log(msg);
  }

  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyle={
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  public myId = "testId"

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    this.clickMessage = "The button clicked"
  }

}

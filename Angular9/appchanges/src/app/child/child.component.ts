import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() myFirstInputParameters: number;
  @Input() mySecondInputParameters: number;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.myFirstInputParameters != undefined)
      this.doSomething(this.myFirstInputParameters);
    // if (changes.mySecondInputParameters && changes.mySecondInputParameters.currentValue)
    //   this.doSomething1(this.mySecondInputParameters);
  }
  private doSomething(input: number) {
    console.log("First", input);
  }
  private doSomething1(input: number) {
    console.log("Second", input);
  }
}

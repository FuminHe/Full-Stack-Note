import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`<h1>Inline HTML</h1>
  <p>hello {{name}}</p>
  <p>{{name.length}}</p>
  <p>{{add(1,2)}}</p>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "John"
  add(a,b){
    return a+b
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appchanges';

  public num = 1;
  public num1 = 1;
  public fn() {
    this.num++;
  }
  public fn1() {
    this.num1++;
  }
}

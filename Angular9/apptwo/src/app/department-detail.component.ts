import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You Selected department with id = {{departmentId}}, name = {{departmentName}} </h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    `,
  styles: [
  ]
})

// <h3> Name: [department_name] = "getDepartmentName(departmentId)"</h3>
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.departmentId = id;
      let name = params.get("name");
      this.departmentName = name;

    })

    console.log(this.route)
  }

  goPrevious() {
    let previousId = this.departmentId * 1 - 1;
    // this.departmentId = previousId;
    this.router.navigate(["departments", previousId, this.departmentName]);
  }

  goNext() {
    let nextId = this.departmentId * 1 + 1;
    this.router.navigate(["departments", nextId, this.departmentName]);
  }

}

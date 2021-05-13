import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  // default path
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  // routes
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id/:name", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  // handle wrong routes
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent]

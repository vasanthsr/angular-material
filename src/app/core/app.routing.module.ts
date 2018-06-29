import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {ProjectsComponent} from '../projects/projects.component';
import {LoginComponent} from '../login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {RegisterComponent} from '../register/register.component';
import { AuthGuard } from '../auth.guard';
import { ContactsComponent } from '../contacts/contacts.component';
import { GanttComponent } from '../gantt/gantt.component';
import { KendoUiComponent } from '../kendo-ui/kendo-ui.component';
import { ReadmeComponent } from '../readme/readme.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent , canActivate: [AuthGuard]},
  { path: 'projects', component: ProjectsComponent , canActivate: [AuthGuard]},
  { path: 'contacts', component: ContactsComponent , canActivate: [AuthGuard]},
  { path: 'gantt', component: GanttComponent , canActivate: [AuthGuard]},
  { path: 'kendo-ui', component: KendoUiComponent , canActivate: [AuthGuard]},
  { path: 'readme', component: ReadmeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
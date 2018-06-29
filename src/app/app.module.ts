import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CustomMaterialModule} from "./core/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from "./core/app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from "./register/register.component";
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';
import {ProjectsService} from './services/projects.service';
import {ContactsService} from './services/contacts.service';
import 'hammerjs';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import {HttpModule} from '@angular/http';
import {AddDialogComponent} from './projects/dialogs/add/add.dialog.component';
import {EditDialogComponent} from './projects/dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './projects/dialogs/delete/delete.dialog.component';

import {AddContactDialogComponent} from './contacts/dialogs/add/add.dialog.component';
import {EditContactDialogComponent} from './contacts/dialogs/edit/edit.dialog.component';
import {DeleteContactDialogComponent} from './contacts/dialogs/delete/delete.dialog.component';

import { ContactsComponent } from './contacts/contacts.component';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import { TooltipComponent } from './common/tooltip/tooltip.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppbarComponent } from './appbar/appbar.component';

import { GanttComponent } from './gantt/gantt.component';
import {TaskService} from "./services/task.service";
import {LinkService} from "./services/link.service";
import { CardComponent } from './card/card.component';
import {FlexLayoutModule} from '@angular/flex-layout';

//Kendo UI
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { KendoUiComponent } from './kendo-ui/kendo-ui.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MenuModule } from '@progress/kendo-angular-menu';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { ReadmeComponent } from './readme/readme.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    RegisterComponent,
    NavComponent,
    ProjectsComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddContactDialogComponent,
    EditContactDialogComponent,
    DeleteContactDialogComponent,
    ContactsComponent,
    TooltipComponent,
    SidenavComponent,
    AppbarComponent,
    GanttComponent,
    CardComponent,
    KendoUiComponent,
    ReadmeComponent
    
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    HttpModule,
    MatSidenavModule,
    FlexLayoutModule,    
    ButtonsModule, LayoutModule, SortableModule, ToolBarModule, GaugesModule, DropDownsModule, MenuModule, ChartsModule, GridModule, PDFModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddContactDialogComponent,
    EditContactDialogComponent,
    DeleteContactDialogComponent
  ],
  providers: [AuthService, AuthGuard, ProjectsService, ContactsService, TaskService, LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }

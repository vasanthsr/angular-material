import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProjectsService} from '../services/projects.service';
import {Http} from '@angular/http';
import {MatDialog, MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {Project} from '../models/project';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  displayedColumns = ['name', 'reference', 'description','actions'];
  dataSource = new MatTableDataSource();
  projectList;
  index: number;
  projectId: string;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;

  constructor(public http: Http, private router: Router, private projectService: ProjectsService, public dialog: MatDialog,) {
    this.loadProjects();
  }

  loadProjects()
  {
      this.projectService.getProjects().subscribe(
          data => this.dataSource.data = data
      );
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  refresh() {
    this.loadProjects();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addNew(project: Project) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {project: project }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        //this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refresh();
      }
    });
  }

  startEdit(i: number, projectId: string, name: string, reference: string, description: string) {
    this.projectId = projectId;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {projectId: projectId, name: name, reference: reference, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        //const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        //this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refresh();
      }
    });
  }

  deleteItem(i: number, projectId: string, name: string, reference: string, description: string) {
    this.index = i;
    this.projectId = projectId;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {projectId: projectId, name: name, reference: reference, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        //const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        //this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refresh();
      }
    });
  }

}

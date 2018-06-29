
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '../models/project';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarConfig, MatSnackBarVerticalPosition} from '@angular/material';

@Injectable()

export class ProjectsService {
    myAppUrl: string = "http://localhost:57798/";
    message: string = "Success";
    actionButtonLabel = "Close";
    action: boolean = true;
    setAutoHide: boolean = true;
    autoHide: number = 5000;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    

    constructor(private http: Http, private snackBar: MatSnackBar) { }

    openSnackBarNotification(message: string) {
      let config = new MatSnackBarConfig();
      config.verticalPosition = this.verticalPosition;
      config.horizontalPosition = this.horizontalPosition;
      config.duration = this.setAutoHide ? this.autoHide : 0;   
      //config.panelClass = ['snackBarNotification-color']; //Use this class to change colours for snackbar notification
      this.snackBar.open(message ? message : this.message, this.action ? this.actionButtonLabel : undefined, config);
    }

    getProjects()
    {
        return this.http.get(this.myAppUrl + 'api/CommonProject/GetAll')
          .pipe(
            map(res => res.json()),
            catchError(this.errorHandler
          ));
    }

    getProjectById(id: string) {
        return this.http.get(this.myAppUrl + "api/CommonProject/GetProjectById/" + id)
        .pipe(
          map(res => res.json()),
          catchError(this.errorHandler
        ));
    }
    
      // ADD, POST METHOD
      saveProject(project: Project): void {
        this.http.post(this.myAppUrl + 'api/CommonProject/Create', project).subscribe(data => {          
          this.openSnackBarNotification("Successfully created the Project");
          },
          (err: HttpErrorResponse) => {
            this.openSnackBarNotification('Error occurred. Details: ' + err.name + ' ' + err.message);
        });
        }

      // UPDATE, PUT METHOD
      updateProject(project: Project): void {
        this.http.put(this.myAppUrl + 'api/CommonProject/Edit', project).subscribe(data => {
            this.openSnackBarNotification("Successfully edited the Project");
          },
          (err: HttpErrorResponse) => {            
            this.openSnackBarNotification('Error occurred. Details: ' + err.name + ' ' + err.message);
          }
        );
      }

     // DELETE METHOD
     deleteProject(id): void {
        this.http.delete(this.myAppUrl + "api/CommonProject/Delete/" + id).subscribe(data => {        
          this.openSnackBarNotification("Successfully deleted the Project");
      },
      (err: HttpErrorResponse) => {
        this.openSnackBarNotification('Error occurred. Details: ' + err.name + ' ' + err.message);
      }
    );
  }

    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: './edit.dialog.html',
  styleUrls: ['./edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public projectsService: ProjectsService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.projectsService.updateProject(this.data);
  }
}

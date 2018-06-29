import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ContactsService} from '../../../services/contacts.service';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../../../models/contact';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.dialog.html',
  styleUrls: ['./add.dialog.css']
  
})

export class AddContactDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contact,
              public contactsService: ContactsService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('primaryEmail') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.contactsService.saveContact(this.data);
  }
}

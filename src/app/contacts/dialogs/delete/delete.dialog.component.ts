import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ContactsService} from '../../../services/contacts.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: './delete.dialog.html',
  styleUrls: ['./delete.dialog.css']
})
export class DeleteContactDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public contactsService: ContactsService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.contactsService.deleteContact(this.data.contactId);
  }
}

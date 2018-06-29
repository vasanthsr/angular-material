import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ContactsService} from '../services/contacts.service';
import {Http} from '@angular/http';
import {MatDialog, MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {Contact} from '../models/contact';
import {AddContactDialogComponent} from './dialogs/add/add.dialog.component';
import {EditContactDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteContactDialogComponent} from './dialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  regularDistribution = 100 / 3;
  displayedColumns = ['firstName', 'surname', 'primaryEmail','description','contactTypeName','actions'];
  dataSource = new MatTableDataSource();
  contactsList;
  index: number;
  contactId: string;
  showCardView: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;

  public splitButtonData: Array<any> = [{
    text: 'High'
}, {
    text: 'Medium',
}, {
    text: 'Low',
}];

public dropdownButtonData: Array<any> = [{
    text: 'Female'
}, {
    text: 'Male',
},];

  constructor(public http: Http, private router: Router, private contactsService: ContactsService, public dialog: MatDialog,) {
    this.loadContacts();
  }

  loadContacts()
  {
      this.contactsService.getContacts().subscribe(
          data => this.dataSource.data = data
      );
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  toggleCardView() {
    this.showCardView = !this.showCardView;
  }

  refresh() {
    this.loadContacts();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addNew(contact: Contact) {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      data: {contact: contact }
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

  startEdit(i: number, contactId: string, firstName: string, surname: string, primaryEmail: string) {
    this.contactId = this.contactId;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      data: {contactId: contactId, firstName: firstName, surname: surname, primaryEmail: primaryEmail}
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

  deleteItem(i: number, contactId: string, firstName: string, surname: string, primaryEmail: string) {
    this.index = i;
    this.contactId = contactId;
    const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
      data: {contactId: contactId, firstName: firstName, surname: surname, primaryEmail: primaryEmail}
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

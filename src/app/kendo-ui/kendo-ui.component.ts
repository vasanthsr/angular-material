import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { products } from '../products';
import {ContactsService} from '../services/contacts.service';
import {Http} from '@angular/http';
import {Contact} from '../models/contact';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kendo-ui',
  templateUrl: './kendo-ui.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./kendo-ui.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class KendoUiComponent implements OnInit {
  title = 'Kendo UI Components!';
  showToolbar: boolean = false;
  showSortable: boolean = false;
  showSplitter: boolean = false;
  showProductsGrid: boolean = false;
  showContactsGrid: boolean = false;

  public contacts: Contact[];
  public products: any[] = products;

  public splitButtonData: Array<any> = [{
    text: 'High'
}, {
    text: 'Medium',
}, {
    text: 'Low',
}];

public dropdownButtonData: Array<any> = [{
    text: 'Option 1'
}, {
    text: 'Option 2',
}, {
    text: 'Option 3',
}];


  public items: string[] = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'
  ];

  constructor(public http: Http, private router: Router, private contactsService: ContactsService) {
    this.loadContacts();
  }

  loadContacts()
  {
      this.contactsService.getContacts().subscribe(
          data => this.contacts = data
      );
  }


  onToolbarButtonClick() {
    this.showToolbar = !this.showToolbar;
  }

  onSortableButtonClick() {
    this.showSortable = !this.showSortable;
  }

  onSplitterButtonClick() {
    this.showSplitter = !this.showSplitter;
  }

  onProductsGridButtonClick() {
    this.showProductsGrid = !this.showProductsGrid;
  }

  onContactsGridButtonClick() {
    this.showContactsGrid = !this.showContactsGrid;
  }
  ngOnInit() {
  }

}

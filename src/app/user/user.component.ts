import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];
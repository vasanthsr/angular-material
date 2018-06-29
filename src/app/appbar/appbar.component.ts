import { Component, OnInit, Input, Output } from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(event) {
    this.sidenav.mode = 'over';
    this.sidenav.toggle();
  }
}
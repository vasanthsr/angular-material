import { Component, OnInit, Input } from '@angular/core';
import {MatSidenav} from "@angular/material";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  handleClickMenu(event) {
    if (this.sidenav.mode === 'over')
      this.sidenav.close();
  }
}
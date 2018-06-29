import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {TooltipPosition} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);
  toolTipText : string = "Tooltip";

  constructor(private auth: AuthService) { }
  

  ngOnInit() {
  }

}

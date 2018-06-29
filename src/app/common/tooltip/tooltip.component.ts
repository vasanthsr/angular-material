import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input() positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  @Input() toolTipText : string = "abcd";

  constructor() { }

  ngOnInit() {
  }

}

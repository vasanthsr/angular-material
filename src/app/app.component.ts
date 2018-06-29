import { Component, HostBinding, NgZone, OnInit, ViewChild } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import {TooltipPosition} from '@angular/material';
import {FormControl} from '@angular/forms';
import { AuthService } from './services/auth.service';

const is = (fileName: string, ext: string) => new RegExp(`${ext}\$`).test(fileName);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  

  sidenavOpened: boolean = true;
  sidenavMode: string = 'side';
  title = 'Angular Prototype';
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);
  toolTipText : string = "Tooltip";


  @ViewChild("userDropDownList") public dropdownlist: any;
//   public userOptions: Array<{ text: string, value: number }> = [
//     { text: "Edit My Details", value: "edit" },
//     { text: "Update My Status", value: "save_alt" },
//     { text: "My Tasks", value: "list" },
//     { text: "My Messages", value: "drafts" },
    
// ];
public selectedValue: number = 2;

public items: any[] = [{
  text: 'VR',
  cssClass : "roundLabel",
  items: [
      {
          text: 'Edit My Details',
          items: [
              { text: 'about.html' },
              { text: 'index.html' },
              { text: 'logo.png' }
          ]
      },
      { text: "", cssClass: "k-separator" },
      {
          text: 'Notifications',
         
      },
      { text: "", cssClass: "k-separator" },
      {
          text: 'My Tasks',
         
      }
  ]
}];

   public iconClass({ text, items }: any): any {
       return {
           'k-i-edit': is(text, 'Edit My Details'),
           //'k-i-email': items !== undefined,
           'k-i-notification': is(text, 'Notifications'),
           'k-i-align-justify': is(text, 'My Tasks'),
           'k-i-email': is(text, 'My Messages'),
           'k-icon': true
       };
   };


  constructor(public overlayContainer: OverlayContainer, private ngZone: NgZone, private auth: AuthService) { 
    window.onresize = (e) => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.handleResizeWindow(window.innerWidth);
    //this.dropdownlist.toggle(true);
  }

  toggleDropDown() {
    this.dropdownlist.open();
  }

  private handleResizeWindow(width: number) {
    if (800 < width) {
      // for wide screen
      this.sidenavOpened = true;
      this.sidenavMode = 'side';
    } else {
      // for mobile
      this.sidenavOpened = false;
      this.sidenavMode = 'over';
    }
  }

  @HostBinding('class') componentCssClass;

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}

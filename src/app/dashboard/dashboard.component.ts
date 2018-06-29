import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public value: number = 30;
  //chart
  //public chartSeries: any[] = [{ data: [1, 2, 3, 5] }];
  // public chartTitle: any = { text: 'Sample Chart' };
  public data: any[] = [{
    kind: 'Site Preparation', share: 0.175
  }, {
    kind: 'Foundation', share: 0.238
  }, {
    kind: 'Framing', share: 0.118
  }, {
    kind: 'Roofing', share: 0.052
  }, {
    kind: 'Plumbing', share: 0.225
  }, {
    kind: 'Electrical', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }

  cards = [
    
    { title: 'Arc Gauge', cols: 1, rows: 1 },
    { title: 'Radial Gauge', cols: 1, rows: 1 },
    { title: 'Building Pie Chart', cols: 2, rows: 1 },
    
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options:any;
  data:any;

  ngOnInit() {
    this.initDonutChart();
  }
  initDonutChart() {
    let data = [
      {name: 'Completed', count: 3, percentage: 2, color: '#8abd4a'},
      {name: 'Pending', count: 10, percentage: 8, color: '#f8b70a'},
      {name: 'Overdue', count: 17, percentage: 15, color: '#6149c6'}
    ];
    var totalCount = 40;

    this.options = {
      chart: {
          type: 'pieChart',
          height: 450,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,

          pie: {
              startAngle: function(d) { return d.startAngle },
              endAngle: function(d) { return d.endAngle }
          },
          duration: 500,
          legend: {
              margin: {
                  top: 5,
                  right: 70,
                  bottom: 5,
                  left: 0
              }
          }
      }
  };

  this.data = [
    {key: 'Completed', y: 51, percentage: 2, color: '#9bbc58'},
    {key: 'Pending', y: 1, percentage: 8, color: '#5080b8'},
    {key: 'Overdue', y: 18, percentage: 15, color: '#ce8885'}
  ];
  }
}

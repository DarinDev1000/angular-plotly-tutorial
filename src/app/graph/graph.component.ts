import { Component, OnInit } from '@angular/core';
// import * as Plotly from 'plotly.js/dist/plotly.js';

// Importing as a cdn also works correctly
// I had to change target to es5 for this to work
import Plotly from 'plotly.js-dist';

// Little trick for Typescript if I use the cdn script version
// declare var Plotly: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const trace1 = {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
          color: '#C8A2C8',
          line: {
              width: 2.5
          }
      }
    };

    const data = [ trace1 ];

    const layout = {
      title: 'Responsive to window\'s size!',
      font: {size: 18}
    };

    const config = {responsive: true};

    Plotly.newPlot('myDiv', data, layout, config );
  }

}

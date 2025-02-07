import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './graphic-primera-caja.component.html',
  standalone: true,
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit{



  ngOnInit(): void {

    this.setChartData()

  }

  private setChartData(): void {
    this.doughnutChartLabels = [
      "Label 1",
      "Label 2",
      "Label 3"

    ];
    this.doughnutChartData.labels = [
      "Label 1",
      "Label 2",
      "Label 3"
    ];
    this.doughnutChartData.datasets[0].data = [20,60,50];
    this.doughnutChartData.datasets[0].backgroundColor = ["red","blue","green",];

  }

  public doughnutChartOptions : ChartConfiguration ['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display:false,
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 30,
          color: 'black',
          font: {
            size: 15,
            weight: 'bold',
          }
        }
      },

      tooltip: {},

      title: {
        text: 'Primera Caja',
        display: true
      }
    }
  };

  public doughnutChartLabels : string [] = [];
  public doughnutChartData: {
    labels: string[],
    datasets: ChartDataset<"doughnut">[]
  } = {
    labels: [],
    datasets: [{
      data:[],
      backgroundColor: [],
      hoverBackgroundColor: []
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';




}

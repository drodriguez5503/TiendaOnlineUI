import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphics-tercera-caja',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './graphics-tercera-caja.component.html',
  styleUrl: './graphics-tercera-caja.component.scss'
})
export class GraphicsTerceraCajaComponent implements OnInit{
  ngOnInit(): void {
    this.setChartData()
  }

  private setChartData():void {
    this.lineChartLabels = [];
    this.lineChartData.labels = [
      "Jan",
      "Feb",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    this.lineChartData.datasets[0].data = [35,8,10,35,26,31,22,67,23,31,20];
    this.lineChartData.datasets[0].borderColor= "red"
    this.lineChartData.datasets[0].pointBorderColor= "red"

    this.lineChartData.datasets[1].data = [23,36,2,45,73,23,57,21,32,45,60];
    this.lineChartData.datasets[1].borderColor= "blue"
    this.lineChartData.datasets[1].pointBorderColor= "blue"

    this.lineChartData.datasets[2].data = [10,41,34,40,95,17,21,27,91,13,50];
    this.lineChartData.datasets[2].borderColor= "green"
    this.lineChartData.datasets[2].pointBorderColor= "green"


  }

  public lineChartOptions: ChartConfiguration ['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        align: 'center',
        labels: {
          textAlign: 'right',
          usePointStyle: true,
          boxWidth: 10,
          padding: 40,
          color: 'black',
          font: {
            size: 10,
            weight: 'bold',
          }
        },
      },
      tooltip: {
        callbacks: {
          label: function (context):string {
            return `Valor: ${context.raw}`;
          }
        }
      },
      title: {
        text: 'Primera Caja graph2',
        display: true,
        color:'black',
        font: {
          size: 15,
          weight: 'bold',}
      }
    },
    scales: {
      x: {
        beginAtZero:true,
        display:true
      },
      y: {
        beginAtZero:true,
        display:true
      }
    }
  }

  public lineChartLabels: string[] = [];
  public lineChartData: {
    labels: string[],
    datasets: ChartDataset<"line">[]
  } = {
    labels: [],
    datasets: [
      {
        data:[],
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"red",
        fill:true,
        label:"",
        tension:0.5
      }, {
        data:[],
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"blue",
        fill:true,
        label:"",
        tension:0.5
      }, {
        data:[],
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"green",
        fill:true,
        label:"",
        tension:0.5
      }
    ]
  };
  public lineChartType: ChartType = 'line';

}

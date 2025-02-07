import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic3-primera-caja',
    imports: [
        BaseChartDirective
    ],
  templateUrl: './graphic3-primera-caja.component.html',
  styleUrl: './graphic3-primera-caja.component.scss'
})
export class Graphic3PrimeraCajaComponent implements OnInit{

  ngOnInit(): void {
    this.setChartData()
  }

  private setChartData():void {
    this.lineChartLabels = [];
    this.lineChartData.labels = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];

    this.lineChartData.datasets[0].data = [31,50,10,72,40,61,28,12,37,91,50];
    this.lineChartData.datasets[0].backgroundColor="rgba(0,255,0,0.1)"
    this.lineChartData.datasets[0].borderColor= "green"
    this.lineChartData.datasets[0].pointBorderColor= "green"
  }

  public lineChartOptions: ChartConfiguration ['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
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
          },

        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
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
        display:false
      },
      y: {
        beginAtZero:true,
        display:false
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
        backgroundColor: "rgba(0,255,0,0.1)",
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"green",
        fill:true,
        label:"Referral 5.54%"
      }
    ]
  };
  public lineChartType: ChartType = 'line';

}

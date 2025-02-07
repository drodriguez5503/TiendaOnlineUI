import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphic4-primera-caja',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './graphic4-primera-caja.component.html',
  styleUrl: './graphic4-primera-caja.component.scss'
})
export class Graphic4PrimeraCajaComponent implements OnInit{
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

    this.lineChartData.datasets[0].data = [35,8,10,35,26,31,22,67,23,31,20];
    this.lineChartData.datasets[0].backgroundColor="rgba(255,0,0,0.1)"
    this.lineChartData.datasets[0].borderColor= "red"
    this.lineChartData.datasets[0].pointBorderColor= "red"
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
          }
        },
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
        backgroundColor: "rgba(255,0,0,0.1)",
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"red",
        fill:true,
        label:"Other 50%"
      }
    ]
  };
  public lineChartType: ChartType = 'line';

}

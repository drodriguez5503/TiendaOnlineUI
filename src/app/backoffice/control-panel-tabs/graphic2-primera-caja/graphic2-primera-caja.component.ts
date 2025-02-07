import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graphic2-primera-caja',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './graphic2-primera-caja.component.html',
  styleUrl: './graphic2-primera-caja.component.scss'
})
export class Graphic2PrimeraCajaComponent implements OnInit{
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

    this.lineChartData.datasets[0].data = [20,60,10,57,26,31,45,87,23,54,60];
    this.lineChartData.datasets[0].backgroundColor="rgba(0,0,255,0.1)"
    this.lineChartData.datasets[0].borderColor= "blue"
    this.lineChartData.datasets[0].pointBorderColor= "blue"
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
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: [],
        pointBorderColor: [],
        pointBackgroundColor:"blue",
        fill:true,
        label:"Organic 44.46%"
      }
    ]
  };
  public lineChartType: ChartType = 'line';

}

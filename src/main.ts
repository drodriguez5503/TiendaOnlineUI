/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  ArcElement,
  CategoryScale,
  Chart,
  DoughnutController, Filler,
  Legend, LinearScale,
  LineController, LineElement,
  PieController, PointElement,
  Tooltip
} from 'chart.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//Configuration chart.js
Chart.register(ArcElement,PieController,DoughnutController,LineController,CategoryScale,LinearScale,PointElement,LineElement,Filler,Legend,Tooltip)


/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {ArcElement, Chart, DoughnutController, Legend, PieController, Tooltip} from 'chart.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//Configuration chart.js
Chart.register(ArcElement,PieController,DoughnutController,Legend,Tooltip)


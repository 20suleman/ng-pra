import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: ErrorComponent },
];

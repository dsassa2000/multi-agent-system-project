import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapExampleComponent } from 'src/app/apps/maps/map-example/map-example.component';
import { MapsComponent } from './maps/maps.component';
import { FooterSmallComponent } from "src/app/apps/footer-small/footer-small.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path     : "",
    component: MapsComponent,
  }
];

@NgModule({
  declarations: [
    MapsComponent,
    MapExampleComponent,
    FooterSmallComponent,
  ],
  imports: [

    RouterModule.forChild(routes),
    CommonModule,
    
  ]
})
export class ChatBarModule { }

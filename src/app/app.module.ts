import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { PieComponent } from './component/pie/pie.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './component/persona/persona.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonasService } from './services/personas.service';


const rutas: Routes = [
  { path: "inicio", component : CuerpoComponent  },
  { path: "persona", component : PersonaComponent  },
  {path:'',redirectTo:"/inicio", pathMatch:'full' },
  { path: "**", component : CuerpoComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
    
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

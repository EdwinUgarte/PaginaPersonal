import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';



const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component:  InicioComponent},
  {path: 'sobre', component:  SobreComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

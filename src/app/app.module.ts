import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { InfoCompanyComponent } from './components/info-company/info-company.component';
import { Pagina1prezzoComponent } from './components/prezzi/pagina1prezzo/pagina1prezzo.component';
import { Pagina2prezzoComponent } from './components/prezzi/pagina2prezzo/pagina2prezzo.component';
import { Pagina3prezzoComponent } from './components/prezzi/pagina3prezzo/pagina3prezzo.component';
import { Acquista1Component } from './components/buy-form/acquista1/acquista1.component';
import { Acquista2Component } from './components/buy-form/acquista2/acquista2.component';
import { Acquista3Component } from './components/buy-form/acquista3/acquista3.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    FooterComponent,
    InfoCompanyComponent,
    Pagina1prezzoComponent,
    Pagina2prezzoComponent,
    Pagina3prezzoComponent,
    Acquista1Component,
    Acquista2Component,
    Acquista3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

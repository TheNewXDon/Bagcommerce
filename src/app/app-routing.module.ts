import { InfoCompanyComponent } from './components/info-company/info-company.component';
import { Acquista3Component } from './components/buy-form/acquista3/acquista3.component';
import { Acquista2Component } from './components/buy-form/acquista2/acquista2.component';
import { Acquista1Component } from './components/buy-form/acquista1/acquista1.component';
import { Pagina3prezzoComponent } from './components/prezzi/pagina3prezzo/pagina3prezzo.component';
import { Pagina2prezzoComponent } from './components/prezzi/pagina2prezzo/pagina2prezzo.component';
import { Pagina1prezzoComponent } from './components/prezzi/pagina1prezzo/pagina1prezzo.component';
import { AuthGuard } from './auth/auth.guard';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate:[AuthGuard], children:[
    { path:"", redirectTo:"pagina1", pathMatch:"full" },
    { path:"pagina1", component: Pagina1Component, children: [
      { path:"prezzo", component: Pagina1prezzoComponent }
    ] },
    { path:"pagina2", component: Pagina2Component, children: [
      { path:"prezzo", component: Pagina2prezzoComponent }
    ] },
    { path:"pagina3", component: Pagina3Component, children: [
      { path:"prezzo", component: Pagina3prezzoComponent }
    ] },
  ]},
  { path:"acquista1", component:Acquista1Component },
  { path:"acquista2", component:Acquista2Component },
  { path:"acquista3", component:Acquista3Component },
  { path:"info", component:InfoCompanyComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

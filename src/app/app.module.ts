import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteInteligenteComponent } from './componente-inteligente/componente-inteligente.component';
import { ComponentePresentacionComponent } from './componente-presentacion/componente-presentacion.component';
import { ComponenteIsoladoComponent } from './componente-isolado/componente-isolado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteInteligenteComponent,
    ComponentePresentacionComponent,
    ComponenteIsoladoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [   ComponenteInteligenteComponent,
    ComponentePresentacionComponent,]
})
export class AppModule { }

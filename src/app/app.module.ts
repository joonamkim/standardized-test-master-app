import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    CardsComponent,
    FooterComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'results', component: ResultsComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

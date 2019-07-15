
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { DateCountPipe } from './date-count.pipe';


const routes:Routes =[
  {path:'Home', component:SearchComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DateCountPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
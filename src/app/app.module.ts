import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from './products/product.module';
@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
  RouterModule.forRoot([
    {path:'welcome',component:WelcomeComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',redirectTo:'welcome',pathMatch:'full'}
  ]),
  ProductModule  ],
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

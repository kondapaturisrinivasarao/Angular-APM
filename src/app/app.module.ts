import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/Star/star.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [AppComponent, 
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

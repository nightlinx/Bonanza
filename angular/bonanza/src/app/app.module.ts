import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Imports for loading & configuring the in-memory web api
// it is replacing the Http client's XHR backend service with an in-memory alternative.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//InMemoryDataService class primes the in-memory database.
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path:'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

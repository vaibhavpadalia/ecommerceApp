import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationServiceService } from './authentication-service.service';
import { HttpModule } from '@angular/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { FacebookModule } from 'ngx-facebook';
import { AuthGuard } from './auth.guard';
import { AuthService, AppGlobals } from 'angular2-google-login';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [AuthenticationServiceService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

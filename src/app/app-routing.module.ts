import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'products', component: ProductPageComponent , canActivate: [AuthGuard]},
    { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =
[WelcomeComponent, LoginPageComponent, SignupPageComponent, ProductPageComponent];

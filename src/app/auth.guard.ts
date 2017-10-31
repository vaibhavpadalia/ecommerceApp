import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: AuthenticationServiceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.service.isLoggedIn();
  }
}

import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const logoutGuard: CanDeactivateFn<unknown> = (
  component: unknown,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    if(confirm('Вы уверены?')) {
      localStorage.removeItem('token')
      return true
    }
  return false;
};

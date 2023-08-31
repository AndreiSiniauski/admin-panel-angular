import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, catchError, delay, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { User } from '../user';

export const userResolver: ResolveFn<User> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<User> => {

  const adminService = inject(AdminService);
  const router = inject(Router);

  return adminService.getPerson(route.params?.['id']).pipe(
    delay(1000),
    catchError(() => {
      router.navigate(['admin/contacts'])
      return EMPTY
    })
  )
};

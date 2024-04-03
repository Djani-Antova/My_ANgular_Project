import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/features/user/user.service';

@Injectable({ providedIn: 'root' })

export class NonAuthActivated implements CanActivate, OnDestroy {
    private ngUnsubscribe = new Subject<void>();

    constructor(private userService: UserService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> {
        return this.userService.user$.pipe(
            map(user => !user?._id || this.router.createUrlTree(['/home'])),
            takeUntil(this.ngUnsubscribe)
        );
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}

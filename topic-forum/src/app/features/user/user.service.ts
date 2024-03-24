import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User, UserForAuth } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();
  user: User | undefined;
  subscription: Subscription

  // USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
  })
  }

  login(email: string, password: string) {
    //tap listening for user
    return this.http
    .post<User>('/api/login', { email, password })
    .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
        .post<User>('/api/register', { 
          username, 
          email, 
          password, 
          rePassword
         })
        .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
    .post('/api/logout', {})
    .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

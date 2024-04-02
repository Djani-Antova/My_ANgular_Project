import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();
  user: User | undefined;
  subscription: Subscription;

  // When I want to keep an error message in the service
  private error$$ = new BehaviorSubject<string | undefined>(undefined);
  public error$ = this.error$$.asObservable();

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(
      tap(user => this.user$$.next(user)),
      catchError(error => {
        this.handleError(error);
        return of(null); // Return null or an empty object to complete the observable chain
      })
    );
  }

  updateProfile(username: string, email: string, phoneNumber?: string) {
    return this.http.put<User>('/api/users/profile', { username, email, phoneNumber }).pipe(
      tap(user => this.user$$.next(user)),
      catchError(error => {
        this.handleError(error);
        return of(null); // Handle the error and return a fallback value
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<User>('/api/login', { email, password }).pipe(
      tap(user => this.user$$.next(user)),
      catchError(error => {
        this.handleError(error);
        return of(null); // Prevent the error from propagating
      })
    );
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<User>('/api/register', { username, email, password, rePassword }).pipe(
      tap(user => this.user$$.next(user)),
      catchError(error => {
        this.handleError(error);
        return of(null); // Suppress the error in the component
      })
    );
  }

  logout() {
    return this.http.post('/api/logout', {}).pipe(
      tap(() => this.user$$.next(undefined)),
      catchError(error => {
        this.handleError(error);
        return of(null); // Complete the stream without error
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private handleError(error: any): void {
    // Here I can process the error, log it, or set it in a BehaviorSubject
    // console.error('UserService Error:', error);
    this.error$$.next(error.message || 'An unknown error occurred');
  }
}

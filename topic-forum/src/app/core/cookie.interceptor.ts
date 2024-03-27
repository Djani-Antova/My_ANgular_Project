import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorService } from "./error/error.service";
import { Router } from "@angular/router";

const { apiUrl } = environment;

@Injectable()

export class CookieInterceptor implements HttpInterceptor {

    constructor(private errorService: ErrorService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }       
        
        return next.handle(req)        
        .pipe(
            catchError((err) => {
                  //TODO can catch globally errors with specific status for each error
              if (err.status === 401) {
                this.router.navigate(['/auth/login']);
              } else {
                this.errorService.setError(err);
                this.router.navigate(['/error']);                
            }
            return [err];
      
            })
          );
    }
}

export const cookieInterceptorProvider: Provider = {
    multi: true,
    useClass: CookieInterceptor,
    provide: HTTP_INTERCEPTORS,
};
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';
import { Theme } from 'src/app/types/theme';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DeleteService } from 'src/app/shared/confirmations/delete.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})

export class ThemeDetailsComponent {
  theme: Theme | undefined;
  post: Post | undefined;
  subscribe$!: Subscription;
  errMessage!: string;
  currentPostText!: string;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private deleteService: DeleteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.getThemeWithDetails();
    }

    get username(): string {
      return this.userService.user?.username || '';
    }

    get userId(): string {
      return this.userService.user?._id || '';
    }

    get isLogged(): boolean {
      return this.userService.isLogged;
    }
  

    getThemeWithDetails(): void {
      const themeId = this.activatedRoute.snapshot.params['themeId'];     
      
  
      this.subscribe$ = this.apiService.getTheme(themeId).subscribe({
        next: (theme) => {
          this.theme = theme;     
        },
        error: (err) => {
          this.router.navigate(["**"]);
        }
      })
    }

    postComment(form: NgForm): void {
      const themeId = this.activatedRoute.snapshot.params['themeId'];
      
      if (form.invalid) {
        return;
      }
      const { postText } = form.value;      
  
      this.subscribe$ = this.apiService.postComment(postText, themeId).subscribe({
        next: () => {
          form.reset()
          this.getThemeWithDetails();
        },
        error: (err) => this.errMessage = err.error.message
      })
  
    }

    likePost(postId: string): void {
      this.subscribe$ = this.apiService.likePost(postId).subscribe({
        next: () => {
          this.getThemeWithDetails();
        },
        error: (err) => this.errMessage = err.error.message
      })
    }  
  
  
    deletePost(postId: string): void {
      const themeId = this.activatedRoute.snapshot.params['themeId'];
      const msg = 'Are you sure you want to delete this post?';
  
      this.subscribe$ = this.deleteService.conform(msg).subscribe((hasComformed: boolean) => {
        if (hasComformed) {
          this.subscribe$ = this.apiService.deletePost(themeId, postId).subscribe({
            next: () => {
              this.getThemeWithDetails();
            },
            error: (err) => this.errMessage = err.error.message
          })
  
        }
      })
  
    }

    
    ngOnDestroy(): void {
      if (this.subscribe$) {
        this.subscribe$.unsubscribe();
      }
    }


}



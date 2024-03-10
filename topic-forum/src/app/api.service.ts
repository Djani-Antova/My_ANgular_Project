import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment    
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  // getLastThemes(limit?: number) {    // Rest-api do not support limit for themes
  //   const { apiUrl } = environment;
  //   const limitCount = limit ? `?limit=${limit}` : '';
  //   return this.http.get<Theme[]>(`${apiUrl}/themes${limitCount}`);
  // }

  postComment(postText: string, themeId: string) {
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText })
  }

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }

}

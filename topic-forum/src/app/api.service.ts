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

  addNewTheme(themeName: string, postText: string) {
    return this.http.post<Theme>('/api/themes', { themeName, postText })
  }

  // getLastThemes(limit?: number) {    // Rest-api do not support limit for themes
  //   const { apiUrl } = environment;
  //   const limitCount = limit ? `?limit=${limit}` : '';
  //   return this.http.get<Theme[]>(`${apiUrl}/themes${limitCount}`);
  // }

  postComment(postText: string, themeId: string) {
    return this.http.post<Post>(`/api/themes/${themeId}`, { postText })
  }
  
  likePost(postId: string) {
    return this.http.put<Post>(`/api/likes/${postId}`, {})
  }

  updatePost(themeId: string, postId: string, postText: string) {
    return this.http.put(`/api/themes/${themeId}/posts/${postId}`, { postText })
  }

  deletePost(themeId: string, postId: string) {
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`, {})
  }

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }

}

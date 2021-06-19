import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  miGit(){
    return this.http.get("https://api.github.com/users/AndresWuthrich");
  }
}

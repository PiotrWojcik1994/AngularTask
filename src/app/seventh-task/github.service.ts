import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  public getUserProjects(user: string) {
    return this.httpClient.get('https://api.github.com/users/' + user + '/repos').toPromise();
  }
}

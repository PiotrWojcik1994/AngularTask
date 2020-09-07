import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {

  user = '';

  data: any;
  wrongUserName: boolean;

  constructor(private githubService: GithubService) {

  }

  ngOnInit() {
  }

  getData() {
    this.githubService.getUserProjects(this.user).then((data: any) => {
      this.data = data;
      this.wrongUserName = false;
    }, error => {
      this.wrongUserName = true;
      this.data = null;
    });
  }

}

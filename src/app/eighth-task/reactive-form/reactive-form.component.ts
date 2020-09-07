import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  userName = new FormControl('', [Validators.required]);
  userSureName = new FormControl('', [Validators.required]);
  userAge = new FormControl('', [Validators.required]);

  userList: User[] = [];

  constructor() {
    this.userForm = new FormGroup({
      name: this.userName,
      sureName: this.userSureName,
      age: this.userAge
    });
  }

  ngOnInit() {
  }

  addUser() {
    const name = this.userForm.get('name').value;
    const sureName = this.userForm.get('sureName').value;
    const age = this.userForm.get('age').value;
    const user = new User(name, sureName, age);
    this.userList.push(user);
    this.userForm.reset();
  }

  removeUser(i: number) {
    this.userList.splice(i, 1);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { SixthTaskComponent } from './sixth-task/sixth-task.component';
import { ChangeSpaceDirective } from './sixth-task/change-space.directive';
import { DisplayComponent } from './fifth-task/display/display.component';
import { IncrementComponent } from './fifth-task/increment/increment.component';
import { UserProjectsComponent } from './seventh-task/user-projects/user-projects.component';
import {GithubService} from './seventh-task/github.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './eighth-task/reactive-form/reactive-form.component';
import { AnsweringPointTestComponent } from './ninth-task/answering-point-test/answering-point-test.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    ThirdTaskComponent,
    SixthTaskComponent,
    ChangeSpaceDirective,
    DisplayComponent,
    IncrementComponent,
    UserProjectsComponent,
    ReactiveFormComponent,
    AnsweringPointTestComponent,
    SecondTaskComponent,
    FourthTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstTaskComponent} from './first-task/first-task.component';
import {ThirdTaskComponent} from './third-task/third-task.component';
import {SixthTaskComponent} from './sixth-task/sixth-task.component';
import {DisplayComponent} from './fifth-task/display/display.component';
import {UserProjectsComponent} from './seventh-task/user-projects/user-projects.component';
import {ReactiveFormComponent} from './eighth-task/reactive-form/reactive-form.component';
import {AnsweringPointTestComponent} from './ninth-task/answering-point-test/answering-point-test.component';
import {SecondTaskComponent} from './second-task/second-task.component';
import {FourthTaskComponent} from './fourth-task/fourth-task.component';


const routes: Routes = [
    {path: 'firstTask', component: FirstTaskComponent},
    {path: 'secondTask', component: SecondTaskComponent},
    {path: 'thirdTask', component: ThirdTaskComponent},
    {path: 'fourthTask', component: FourthTaskComponent},
    {path: 'fifthTask', component: DisplayComponent},
    {path: 'sixthTask', component: SixthTaskComponent},
    {path: 'seventhTask', component: UserProjectsComponent},
    {path: 'eighthTask', component: ReactiveFormComponent},
    {path: 'ninthTask', component: AnsweringPointTestComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

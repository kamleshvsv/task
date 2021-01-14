import { AllMemberComponent } from './all-member/all-member.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
{
  path:'',
  component : AllMemberComponent
},
{
  path:'member/:id',
  component:MemberDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

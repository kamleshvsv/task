import { DesignComponent } from './design/design.component';
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
},
{
  path:'design',
  component:DesignComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

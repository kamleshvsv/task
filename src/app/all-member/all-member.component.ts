import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.scss']
})
export class AllMemberComponent implements OnInit {
  isLoader: Boolean = false;
  AllMemberData: any = []
  constructor(private _apiService: ApiService, private route : Router) {

    this._apiService.getAllMember().subscribe((res: any) => {
      if (res.status == true) {
        this.isLoader = true;
        this.AllMemberData = res.memberships
      }
    });
    // this._apiService.getAllMember().subscribe((res)=>{
    //   if(res.memberships === true) {
    //     this.AllMemberData = res
    //     this.isLoader = false;
    //   }

    // })
  }

  ngOnInit() {

  }


  //get Member Details
  getMemberDetails(id: string) {
    console.log(id)
    this.route.navigate(['member/'+id])

  }
}

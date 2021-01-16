import { ApiService } from './../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  isLoader: Boolean = false;
  MemberData: any = []
  membershipId: string;
  constructor(private route: ActivatedRoute, private _apiService: ApiService) {

//Get membershipId 
    this.membershipId = this.route.snapshot.params.id;

    this._apiService.memberDetails(this.membershipId).subscribe((res: any) => {
      if (res.status == true) {
        this.MemberData = res.memberships;
        this.isLoader = true
      }
      console.log(res)

    })

  }

  ngOnInit() {
  
  }

}

import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log("hello member")
    // membershipId
    // console.log(this.route.snapshot)
    // this.route.queryParams.subscribe(params => {
    //   console.log(params, "params")
    //   this.membershipId = params['id'];
    //   console.log(this.membershipId)
    // });
  }

  ngOnInit() {

  }

}

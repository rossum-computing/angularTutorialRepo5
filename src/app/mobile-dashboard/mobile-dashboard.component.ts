import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../shared/mobiles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileData : any;


  constructor(public mobilesService: MobilesService, public router:Router) { 
    // console.log(mobilesService.mobileData)
    this.mobileData = mobilesService.mobileData
  }

  ngOnInit() {
  }
  view(mobileName) {
    // console.log(mobileName)
    let url = 'mobileview/' + mobileName
    this.router.navigate([url])
    // this.mobilesService.mobileViewInput(mobileName)
  }

}

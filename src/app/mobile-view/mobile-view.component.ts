import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../shared/mobiles.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit {
  mobileView: any;
  flag = true;

  constructor(public mobilesService : MobilesService, public http: HttpClient,
    public router: Router, public route: ActivatedRoute) { 
      this.route.paramMap.subscribe(data => {
        console.log(data['params'].mobileName)
        this.mobileView = mobilesService.mobileViewInput(data['params'].mobileName)
      })
    setTimeout(()=>{
      this.flag=false;
    }, 500)
    this.mobileView = mobilesService.mobileViewOutput()
    // console.log(this.mobileView)
  }

  ngOnInit() {
  }
  postItem() {
    let url = environment.server_url + "postitem"
    let body = this.mobileView
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'authorization': 'access_token_cookie'
      })
    }
    this.http.post(url, body, httpOptions).subscribe(
      data => {
        alert(data['message']);
        this.router.navigate(['/mobiledashboard']);
      },
      error => {
        console.log(error)
      }
    )

  }

}

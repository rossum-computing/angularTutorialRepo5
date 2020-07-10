import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns = ['name', 'price']
  cartData = []

  constructor(public http:HttpClient) { 
    this.getCartList()
  }

  ngOnInit() {
  }

  getCartList() {
    let url = environment.server_url + 'getcart';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'authorization': 'access_token_cookie'
      })
    }

    this.http.get(url, httpOptions).subscribe(
      data => {
        let cart = []
        for (let mobile in data) {
          cart.push(data[mobile])
        }
        this.cartData = cart
        console.log(this.cartData)
      },
      error => {
        console.log(error)
      }
    )
  }

  getTotalCost() {
    let totalPrice = 0;
    for (let mobile of this.cartData) {
      totalPrice += Number(mobile.price)
    }
    return totalPrice
  }


}

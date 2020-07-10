import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'name', 'price', 'delivery_date'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  order_id: number;
  price: number;
  delivery_date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order_id: 11234, name: 'Samsung Galaxy S9', price: 30000, delivery_date: '31 March 2020'},
  {order_id: 21232, name: 'Dual Shock 4', price: 4000, delivery_date: '15 April 2020'},
  {order_id: 34123, name: 'Motorola G99', price: 25000, delivery_date: '2 July 2020'},
  {order_id: 11234, name: 'Samsung Galaxy S9', price: 30000, delivery_date: '31 March 2020'},
  {order_id: 21232, name: 'Dual Shock 4', price: 4000, delivery_date: '15 April 2020'},
  {order_id: 34123, name: 'Motorola G99', price: 25000, delivery_date: '2 July 2020'},
  {order_id: 11234, name: 'Samsung Galaxy S9', price: 30000, delivery_date: '31 March 2020'},
  {order_id: 21232, name: 'Dual Shock 4', price: 4000, delivery_date: '15 April 2020'},
  {order_id: 34123, name: 'Motorola G99', price: 25000, delivery_date: '2 July 2020'},
  {order_id: 11234, name: 'Samsung Galaxy S9', price: 30000, delivery_date: '31 March 2020'},
  {order_id: 21232, name: 'Dual Shock 4', price: 4000, delivery_date: '15 April 2020'},
  {order_id: 34123, name: 'Motorola G99', price: 25000, delivery_date: '2 July 2020'},
];

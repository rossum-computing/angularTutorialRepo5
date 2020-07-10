import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {
  mobileData = [
    {"path": "assets/nokia.jpg", "name": "Nokia", "price": "12000", "description" : ["2K Display", "Snapdragon Processor", "2K Display", "Snapdragon Processor", "2K Display", "Snapdragon Processor", ]},
    {"path": "assets/samsung.jpg", "name": "Samsung", "price": "13000", "description" : ["2K Display", "Exynos Processor",  "2K Display", "Snapdragon Processor", ]},
    {"path": "assets/sony.jpg", "name": "Sony", "price": "14000", "description" : ["2K Display", "Snapdragon Processor", "2K Display", "Snapdragon Processor", "2K Display", "Snapdragon Processor", ]},
    {"path": "assets/motorola.jpg", "name": "Motorola", "price": "15000", "description" : ["2K Display", "Snapdragon Processor", "2K Display", "Snapdragon Processor", ]},
    {"path": "assets/apple.jpg", "name": "Apple", "price": "16000", "description" : ["1K Display", "Apple Processor" ]},
  ]
  mobileNameInput : string;
  mobileViewInput(mobileName) {
    console.log(mobileName)
    this.mobileNameInput = mobileName
    for (let mobile of this.mobileData) {
      if (mobile['name'] == this.mobileNameInput) {
        return mobile
      }
    }
    return "Mobile Not Found"
  }

  mobileViewOutput() {
    for (let mobile of this.mobileData) {
      if (mobile['name'] == this.mobileNameInput) {
        return mobile
      }
    }
    return "Mobile Not Found"
  }


  constructor() { }
}

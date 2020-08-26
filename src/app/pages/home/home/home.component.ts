import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      description: 'ricas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 4,
      title: 'tucus'
    },
    {
      description: 'deliciosas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 2,
      price: 5,
      title: 'salteñas'
    },
    {
      description: 'frutifantasticos',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 10,
      title: 'licuados de papaya'
    },
    {
      description: 'grasosos',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 2,
      price: 6,
      title: 'pasteles'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

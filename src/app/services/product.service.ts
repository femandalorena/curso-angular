import {Injectable} from '@angular/core';

@Injectable()

export class ProductService {

  constructor() {

  }

  public getProducts(): any [] {

    return [
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

  }

}



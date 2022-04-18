import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestourentsService {

  restaurent = [
    {
      image:'https://b.zmtcdn.com/data/pictures/chains/5/900425/2537717c03d80d197d1761988adbbcf7.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Photo of a Shiba Inu',
      name:'Haji Ebrahim Restaurent',
      foodItems:'Burger, Fast Food, Desert',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/6/95126/7ff747d1d7de4bc685722c1976f07fa6_o2_featured_v2.jpg',
      name:'Hotel Saravana Bhavan',
      foodItems:'South Indian, Kerala, North Indian',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/chains/4/900424/a0e0e6af187acfafd0751efc218d30bb.jpg?output-format=webp',
      name:'Real Arabia',
      foodItems:'North Indian, Chinese, Arabic',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/8/903738/630befdd1044115fcb1349e7fa9723c3.jpg',
      name:'Thaal Family Restaurant',
      foodItems:'Burger, Fast Food, Desert',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/7/95147/ebb878bd9ead6e2e23e7ba06662b48b0.jpg',
      name:'Ceylon Bake House',
      foodItems:'Biryani, South Indian, Chinese, Arabian, North Indian, Shake',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/6/18347416/e01ffc3a4d1f4a76e63b3250299f4793.jpg',
      name:'Burger King',
      foodItems:'Burger, Fast Food, Beverages',

    }
     
  ];

  constructor() { }
  
  getRestourentsList(){
    return this.restaurent;
  }
}

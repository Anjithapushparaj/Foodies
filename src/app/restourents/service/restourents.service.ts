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

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/chains/2/19663422/cb0815b8b04ef8613e7f00e43041c703.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      name:'The Aurum Cloud',
      foodItems:'Kerala',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/9/19196489/db449a30d51788c6d96afb13a56e1ed1.jpg',
      name:'Charcoal Shack Restaurant',
      foodItems:'Biryani, Arabian, Jamaican, Beverages',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/7/901777/ffc63ad090e9535087762168fd68acd0.jpg',
      name:'Soofi Mandhi',
      foodItems:'Arabian, South Indian, Chettinad, Beverages',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/8/19246688/782df4b5f24c8ce0c08242284f5dba45.jpg',
      name:'Shawarma Daddy',
      foodItems:'Lebanese, Arabian, Fast Food, Beverages',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/7/19468387/80cd632d6ea31fcd65ee09d7eaa1ba2e.jpg',
      name:'Foodx Restaurant',
      foodItems:'Chinese, North Indian, South Indian, Beverages',

    },
    {
      image:'https://b.zmtcdn.com/data/pictures/chains/7/902987/82fd142b05ebe39092b77133c6c5823a.jpg',
      name:'The Ice Cream Factory',
      foodItems:'Desserts, Ice Cream, Beverages, Shake',

    }
     
  ];

  constructor() { }
  
  getRestourentsList(){
    return this.restaurent;
  }
}

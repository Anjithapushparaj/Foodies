import { Component, OnInit} from '@angular/core';
import { RestourentsService } from '../service/restourents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restourent',
  templateUrl: './add-restourent.component.html',
  styleUrls: ['./add-restourent.component.scss']
})
export class AddRestourentComponent implements OnInit {

  restaurentName;
  location;
  foodItems = [];
  newRestourent = {};
  imageUrl;
  constructor( private rest:RestourentsService,
    private rtr:Router) { }

  ngOnInit(): void {
  }

  addNewRestaurent(){
    this.newRestourent = this.createRestourent();
    this.rest.addRestaurent(this.newRestourent);
    this.rtr.navigate(['/restaurents']);
  }
  createRestourent(){
    return {
      image:this.imageUrl,
      name: this.restaurentName,
      foodItems: this.foodItems
    };
  }

  onFileSelected(event){
    this.imageUrl =event.target.files[0].name;
    console.log(this.imageUrl);
  }

}

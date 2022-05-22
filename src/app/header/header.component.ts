import { Component, OnInit } from '@angular/core';
import { filter } from 'lodash';
import { debounceTime, Subject } from 'rxjs';
import {RestourentsService} from './../restourents/service/restourents.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchPattern;
  filteredRestaurents;
  restaurent;
  private subjectKeyUp = new Subject<any>();
  constructor(private service:RestourentsService) { }

  ngOnInit(): void {
    this.subjectKeyUp.pipe((debounceTime(1300))).subscribe((key)=>{
      console.log(key);
      this.getRestaurent(key);
    });
  }

  getRestaurent(value){
    this.service.getRestourent(value).subscribe((rest) =>{
      this.restaurent= rest;
      console.log(this.restaurent);
    })
  }
  onSearchRestaurent(event){
    this.searchPattern = event.target.value;
    this.subjectKeyUp.next(this.searchPattern);
  }
}

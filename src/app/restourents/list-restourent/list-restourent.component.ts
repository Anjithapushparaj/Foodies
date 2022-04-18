import { Component, OnInit } from '@angular/core';
import { RestourentsService } from '../service/restourents.service';

@Component({
  selector: 'app-list-restourent',
  templateUrl: './list-restourent.component.html',
  styleUrls: ['./list-restourent.component.scss']
})
export class ListRestourentComponent implements OnInit {

  restourentList=[];

  constructor(private restService:RestourentsService) { }

  ngOnInit(): void {
    this.getRestourentDetails();
  }

  getRestourentDetails(){
    {
      this.restourentList = this.restService.getRestourentsList();
    }
  }

}

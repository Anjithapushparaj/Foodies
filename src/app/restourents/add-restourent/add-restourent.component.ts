import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-restourent',
  templateUrl: './add-restourent.component.html',
  styleUrls: ['./add-restourent.component.scss']
})
export class AddRestourentComponent implements OnInit {

  restourentName;

  constructor() { }

  ngOnInit(): void {
  }

}

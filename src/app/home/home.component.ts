import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getGlobalData().subscribe({
      next: (result) =>{
        console.log(result);
      }
    })
  }

}

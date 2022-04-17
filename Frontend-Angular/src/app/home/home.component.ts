import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(u:any){
    this._api.username=u.value.username;
    this.router.navigate(['/tweets']);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  userTweets:any=[];
  text:any;
  quote:any=false;
  mood:any;
  nomood:any;
  name:any;
  constructor(private http:HttpClient,private _api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    if(!this._api.username){
      this.router.navigate(['/']);
    }
    this.http.get('https://twitter-node-backend.vercel.app/get/username/'+this._api.username).subscribe((data:any)=>{
      this.name=data.data.username;
      if(!this.name){ 
        this.router.navigate(['/']);
      }
      this.http.get('https://twitter-node-backend.vercel.app/tweets/'+data.data.id).subscribe((details:any)=>{
        this.userTweets=details.data;
        console.log(details);
      })
    },((err:any)=>{
      this.router.navigate(['/']);
    }))
    
    
  }


  select(txt:any){
    this.text=txt;
    this.http.get('https://twitter-node-backend.vercel.app/sentiment/'+txt).subscribe((details:any)=>{
        
        this.mood=details.score;
        console.log(details);
    },((err:any)=>{
      this.mood=0;
      
    }))
  }

  quoteMake(){
    this.quote=true;
  }
}

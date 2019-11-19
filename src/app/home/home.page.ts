import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items:any;
  public specId:number;
  public placeholder:number;
  data:Observable<any>;
  url:string;
  url_remote:string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.url_remote ="https://api.myjson.com/bins/130zqe";
    this.specId = +this.placeholder;
    //this.getData();
    this.getRemoteData();

    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.placeholder= Math.floor(Math.random() * (this.items.length - 2)) + 1;
    console.log(this.placeholder);
    this.specId = +this.placeholder;
    this.data = this.http.get(this.url_remote);
    this.data.subscribe(result =>{
      this.items = result;
      });
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
  }
  /*getData(){
    let url ="/assets/data/database.json";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
    this.items = result;
    console.log(result);
    });
  }*/
  getRemoteData(){
    this.data = this.http.get(this.url_remote);
    this.data.subscribe(result =>{
    this.items = result;
    console.log(result);
    });
  }
    };
  

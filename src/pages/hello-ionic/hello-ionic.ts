import { GenericProvider } from './../../providers/generic/generic';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http
import { HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  data: any = {};
  users: any = [];
  http: any;
  // films: Observable<any>;
  constructor(public navCtrl: NavController, public httpc: HttpClient,
    private genericProvider: GenericProvider) {
    this.data.username = 'a';
    this.data.response = '';

    this.http = httpc;
    this.http.get('http://baui.com.ar')
      .subscribe((data) => Response);
    //  .subscribe(response => console.log(response));
  }

  submit() {
    var link = 'http://baui.com.ar/ionic.php';//'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
    var myData = JSON.stringify({ username: this.data.username });
    console.log(this.http.get("baui.com.ar"));

    this.http.get(link, myData)
      .subscribe(data => {
        console.log(data);
        this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
        console.log("Oooops!");
      });
  }

  getUsers() {
    this.genericProvider.getUsers().subscribe(resp => {
      this.users = resp.data;
    })
  }
}

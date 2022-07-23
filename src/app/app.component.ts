import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  productsJson: any;
  productsArray: any = [];

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.http.get('https://s3.amazonaws.com/open-to-cors/assignment.json').subscribe(res => {
      let restemp = res;

      console.log(restemp);
      this.productsJson = restemp;

      for (let key in this.productsJson.products) {

        this.productsArray.push(this.productsJson.products[key]);

      }

      this.productsArray.sort((a: any, b: any) => {
        return b.popularity - a.popularity;
      });

    })
  }
}

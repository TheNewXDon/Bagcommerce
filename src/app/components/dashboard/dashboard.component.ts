import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  constructor(private http: HttpClient,
    private scroller: ViewportScroller,
    private router: Router) { }

  ngOnInit(): void {
  }


  goDown() {
    setTimeout(
      () => {
        document.getElementById("footer")!.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      },500
    )

  }

  /*const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  */

/*  getHotels() {
    this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`).subscribe(
      res => console.log(res)
    )
  }
  fetch('https://booking-com.p.rapidapi.com/v1/hotels/all')
    .then(response => response.json())
    .then( (response : JSON)=> console.log(response))
    .catch(err => console.error(err));

*/
}

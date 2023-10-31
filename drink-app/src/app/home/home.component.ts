import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'drink-app';
  drinks: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }

  navigateToDetail(id: string) {
    this.router.navigate(['/detail', id]);
  }
}


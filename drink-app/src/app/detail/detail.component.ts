import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  title = 'detail-app';
  drinks: any[] = [];
  linguaSelezionata: string = 'it';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  cambiaLingua(lingua: string) {
    this.linguaSelezionata = lingua;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const drinkId = params['id']; // Questo deve corrispondere al nome del parametro definito nella route

      if (drinkId) {
        this.http
          .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
          .subscribe((response: any) => {
            console.log(response);
            this.drinks = response.drinks;
          });
      }
    });
  }
}
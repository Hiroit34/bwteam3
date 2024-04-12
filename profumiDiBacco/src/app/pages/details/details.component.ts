import { Component, OnInit } from '@angular/core';
import { IWine } from '../../Modules/i-wine';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  valuta: string = 'EUR';

  wine!: IWine;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<IWine>(`http://localhost:3000/wines/${id}`).subscribe(
        (wine) => {
          this.wine = wine;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  addToCart(wine: IWine, quantity: number = 1) {
    console.log('Aggiunto al carrello: ', wine.nome);
  }
}

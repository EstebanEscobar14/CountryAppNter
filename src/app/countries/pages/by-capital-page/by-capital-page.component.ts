import { Component } from '@angular/core';
import { ContruiesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesServices: ContruiesService ){}

  searchByCapital(term: string): void {
    this.countriesServices.searhCapital(term).subscribe( countries => {
      this.countries = countries;
    });
  }

}

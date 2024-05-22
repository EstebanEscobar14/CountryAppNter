import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContruiesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesServices: ContruiesService ){}

  searchByCountry(term: string): void {
    this.countriesServices.searhCountry(term).subscribe( countries => {
      this.countries = countries;
    });
  }



}

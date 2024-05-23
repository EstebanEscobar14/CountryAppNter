import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContruiesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesServices: ContruiesService ){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountry.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    this.countriesServices.searhCountry(term).subscribe( countries => {
      this.isLoading = true;
      this.countries = countries;
      this.isLoading = false;
    });
  }



}

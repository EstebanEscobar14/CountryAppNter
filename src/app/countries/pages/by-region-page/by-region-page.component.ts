import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContruiesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesServices: ContruiesService ){}

  searchByRegion(term: string): void {
    this.countriesServices.searhRegion(term).subscribe( countries => {
      this.countries = countries;
    });
  }

}

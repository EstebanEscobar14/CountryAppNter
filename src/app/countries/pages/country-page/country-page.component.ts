import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContruiesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesServices: ContruiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesServices.searchCountryByAlphaCode(id))
      )
      .subscribe( (country) => {
        if( !country ) return this.router.navigateByUrl('');
        return this.country = country;
        this.isLoading = false;
        })
      }
  }



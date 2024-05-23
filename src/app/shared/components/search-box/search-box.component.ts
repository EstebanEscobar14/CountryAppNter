import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debauncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debauncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( term => {
      this.onDebounce.emit(term);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(term: string): void {
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string){
    this.debauncer.next(searchTerm);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SpinnyService {

  private currentSpinnyState = new BehaviorSubject<any>(false);
  currentSpinnyStateObs = this.currentSpinnyState.asObservable();

  constructor() { }

  showSpinny(msg) {
    this.currentSpinnyState.next({ showSpinny: true, message: msg });
  }

  hideSpinny() {
    this.currentSpinnyState.next({ showSpinny: false, message: '' });
  }
}

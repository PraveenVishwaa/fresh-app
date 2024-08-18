import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isShowSpinner = new BehaviorSubject<boolean>(false);

  constructor() { }

  
}

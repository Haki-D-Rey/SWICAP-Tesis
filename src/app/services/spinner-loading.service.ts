import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoadingService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoading$: Observable<boolean> = this.loadingSubject.asObservable()

  constructor() {}

  show(): void {
    this.loadingSubject.next(true)
  }

  hide(): void {
    this.loadingSubject.next(false)
  }
}
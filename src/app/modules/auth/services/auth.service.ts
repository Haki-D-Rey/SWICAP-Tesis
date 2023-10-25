import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { IRequestUserLoginData, IResponseUserLoginData } from '../interfaces/user'
import { environment } from 'src/environments/enviroments'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null)
  private url: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  setToken(token: string | null): void {
    this.tokenSubject.next(token)
  }

  getToken(): string | null {
    return this.tokenSubject.value
  }

  logout(): void {
    this.setToken(null)
  }

  login(data: IRequestUserLoginData): Observable<IResponseUserLoginData> {
    return this.http.post<IResponseUserLoginData>(`${this.url}/login`, data)
  }
}

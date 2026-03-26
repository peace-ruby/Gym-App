import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<{ name: string; email: string } | null>(null);

  get user$(): Observable<{ name: string; email: string } | null> {
    return this._user.asObservable();
  }

  signin(email: string, password: string): Observable<boolean> {
    // fake implementation - always succeeds after a short delay
    this._user.next({ name: 'Demo User', email });
    return of(true);
  }

  signup(name: string, email: string, password: string): Observable<boolean> {
    // fake implementation
    this._user.next({ name, email });
    return of(true);
  }

  signout(): void {
    this._user.next(null);
  }
}

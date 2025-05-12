import { environment } from 'src/environments/environment.desa';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  getPosterUrl(path: string, size: string = 'w200'): Observable<string> {
    if (!path) {
      return of('https://picsum.photos/200/500');
    }

    //Simula petición
    return of(`${environment.imageApiUrl}${size}${path}`);
  }
}

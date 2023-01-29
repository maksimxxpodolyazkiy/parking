import { BehaviorSubject, Observable, map } from 'rxjs';

export abstract class DataBase<T> {
  private data$: BehaviorSubject<T[]> = new BehaviorSubject([]);

  public findOne(key: string, value: string): Observable<T | null> {
    return this.data$.pipe(
      map((data) => {
        const foundItem = data.find((item) => item[key] === value);
        return foundItem || null;
      }),
    );
  }

  abstract create<C>(createDto: C): Observable<T>;
}

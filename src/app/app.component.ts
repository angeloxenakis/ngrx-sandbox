// import { Component } from '@angular/core';
// import { Store } from "@ngrx/store"
// import { Observable } from "rxjs"
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { AppService } from "./app.service"

// interface AppState {
//   days: []
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   days$: Observable<any[]>
//   sortOptions

//   constructor(private store: Store<AppState>, private appService: AppService) {
//     this.days$ = this.store.select('days')
//     this.sortOptions = this.getSortOptions()
//   }

//   ngOnInit(): void {
//     this.appService.getData().subscribe(x => console.log(x))
//   }

//   public getSortOptions(): string[] {
//     return ["Date", "High", "Low", "Rain"]
//   }

//   public sortDays(value: string): void {
//     this.store.dispatch({type: value.toUpperCase()})
//   }

//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.sortOptions, event.previousIndex, event.currentIndex);
//   }
// }

import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();

  drop(event: CdkDragDrop<string[]>) {
    this.dataSource.move(event);
  }
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}

  move(event: CdkDragDrop<string[]>) {
    moveItemInArray(ELEMENT_DATA, event.previousIndex, event.currentIndex)
    this.data.next([...ELEMENT_DATA]);
  }
}
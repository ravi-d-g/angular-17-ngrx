import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, async } from 'rxjs';
import { AppState } from './ngRx/app.state';
import { selectCountList } from './ngRx/state/counterList.selector';
import { addItem, removeItem, resetItem } from './ngRx/state/counterList.actions';

export interface Item {
  userName: string,
  userId: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-ngrx';

  list = [{ userName: 'Ravi', userId: 1 }]
  selectCountList$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.selectCountList$ = this.store.select(selectCountList)
  }



  addItem() {
    let item = { userName: 'test', userId: this.list.length + 1 }
    this.list.push(item)

    this.store.dispatch(addItem({ item }))
  }
  removeItem(userId: number) {
    this.list.pop()
    this.store.dispatch(removeItem({ userId }))
  }
  resetItem() {
    this.list = []
    this.store.dispatch(resetItem())
  }
}
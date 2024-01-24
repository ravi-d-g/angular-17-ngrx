import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, resetItem } from './counterList.actions';
import { Item } from '../../app.component';

export const initialState = 0;

export interface CounterListState {
    list: Array<Item>
}
export const initialCounterState: CounterListState = {
    list: [{ userName: 'Ravi', userId: 1 } as Item]
}

export const counterListReducer = createReducer(
    initialCounterState,

    on(addItem, (state, { item }) => {
        const list = [...state.list, item];
        return { ...state, list };
    }),

    on(removeItem, (state, { userId }) => {
        const list = state.list.filter((item) => item.userId !== userId);
        return { ...state, list };
    }),

    on(resetItem, (state) => ({ ...state, list: [] }))
)
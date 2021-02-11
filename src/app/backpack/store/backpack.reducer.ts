import { Item } from '../../shared/item.model';
import * as BackpackAction from './backpack.action';

const initialState = {
  items: [],
};

export function backpackReducer(
  state = initialState,
  action: BackpackAction.AddItem
) {
  switch (action.type) {
    case BackpackAction.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
  }
}

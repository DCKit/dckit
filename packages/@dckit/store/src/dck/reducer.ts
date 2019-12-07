import { combineReducers } from 'redux'
import { itemsReducer } from '../items/reducer'
import { itemPropsReducer } from '../itemProps/reducer'
import { filtersReducer } from '../filters/reducer'
import { sortingReducer } from '../sorting/reducer'
import { processesReducer } from '../processes/reducer'

export const dckReducer = combineReducers({
  items: itemsReducer,
  itemProps: itemPropsReducer,
  filters: filtersReducer,
  sorting: sortingReducer,
  processes: processesReducer,
})

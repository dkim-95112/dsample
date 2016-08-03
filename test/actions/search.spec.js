import expect from 'expect'
import * as actions from '../../actions'

describe('search actions', () => {
  it('apiLoaded should set state', () => {
    expect(actions.apiLoaded()).toEqual({
      type: actions.API_LOADED
    })
  })

  // it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
  //   expect(actions.setVisibilityFilter('active')).toEqual({
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: 'active'
  //   })
  // })

  // it('toggleTodo should create TOGGLE_TODO action', () => {
  //   expect(actions.toggleTodo(1)).toEqual({
  //     type: 'TOGGLE_TODO',
  //     id: 1
  //   })
  // })
})

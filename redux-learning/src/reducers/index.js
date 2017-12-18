/**
 * Created by lenovo on 2017/12/18.
 */
import {combineReducers} from 'redux'

const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

const selectedSubreddit = (state = 'reactjs',action) => {
    switch (action.type){
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}
//
// const rootReducer = combineReducers({
//     selectedSubreddit
// })
const rootReducer = (state = {},action) => {
    return {
        selectedSubreddit : selectedSubreddit(state.selectedSubreddit,action)
    }
}
export default rootReducer
import {types} from '../../actions/types'
import postsReducer from './posts'

describe("Posts reducer", ()=>{
    it("should return default state", ()=>{
        const newState = postsReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it("should return posts", ()=>{
        const posts = [{title:"Test 1"},{title:"Test 2"},{title:"Test 3"}]
        const action = {
            type: types.GET_POSTS,
            payload:posts
        }
        const newState = postsReducer(undefined, action)
        expect(newState).toEqual(posts)
    })



})
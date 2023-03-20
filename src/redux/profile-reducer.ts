import { PostType, ProfileType, PhotosType } from './../types/types';
import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from '../api/profile-api';
import { BaseThunkType, InferActionTypes } from './redux-store';


let initialState = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'First post', likesCount: 15 },
        { id: 3, message: 'Hello, world', likesCount: 25 },
        { id: 4, message: 'New post', likesCount: 11 },
        { id: 5, message: 'Coffee time', likesCount: 25 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};


const profileReducer = (state = initialState, action: ActionsType): IninisialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {  //если тип такой-то,то вернется копия стейта,где профайл изменится на профайл, к-й сидит в экшэне
            return { ...state, profile: action.profile }
        }
        case 'SN/PROFILE/SET_STATUS': {
            return { ...state, status: action.status }
        }
        case 'SN/PROFILE/DELETE_POST': {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }

        case 'SN/PROFILE/SAVE_PHOTOS_SUCCESS': {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }

        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD_POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTOS_SUCCESS', photos } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer

export type IninisialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
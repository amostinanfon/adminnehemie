import { publicRequest, userRequest } from '../requestMethods';
import { addProductFailure, 
         addProductStart, 
         addProductSuccess, 
         deleteProductFailure, 
         deleteProductStart, 
         deleteProductSuccess, 
         getProductFailure, 
         getProductStart, 
         getProductSuccess, 
         updateProductFailure, 
         updateProductStart, 
         updateProductSuccess 
    } from './productRedux';

import { loginStart , 
         loginFailure ,
         loginSuccess, 
         getUserStart, 
         getUserSuccess, 
         getUserFailure, 
         deleteUserStart, 
         deleteUserSuccess, 
         deleteUserFailure 
    } from './userRedux';



export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}



export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id , dispatch) =>{
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id && res.data))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}
export const updateProduct = async (id , product , dispatch) =>{
    dispatch(updateProductStart());
    try {
         dispatch(updateProductSuccess(
            { id , product }
        ))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) =>{
    dispatch(addProductStart());
    try {
        const res = await userRequest.post("/products", product)
    dispatch(addProductSuccess(res.data));
    } catch (error) {
    dispatch(addProductFailure())
    }
}

export const getUsers = async (dispatch) =>{
    dispatch(getUserStart());
    try {
        const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
    } catch (error) {
    dispatch(getUserFailure());
    }
}
export const deleteUser = async (id,dispatch) =>{
    dispatch(deleteUserStart());
    try {
        const res = await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id && res.data))
    } catch (error) {
    dispatch(deleteUserFailure());
    }
}
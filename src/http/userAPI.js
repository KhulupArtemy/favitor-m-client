import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const createUserAccount = async (userLogin, userPassword) => {
    const {data} = await $authHost.post('api/user/createUserAccount', {userLogin, userPassword})
    return data
}

export const login = async (userLogin, userPassword) => {
    const {data} = await $host.post('api/user/login', {userLogin, userPassword})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const fetchUserLogins = async () => {
    const {data} = await $authHost.get('api/user/getUserLogins')
    return data
}

export const updateUserLogin = async (userLogin, newLogin) => {
    const {data} = await $authHost.put('api/user/updateUserLogin', {userLogin, newLogin})
    return data
}

export const deleteUserAccount = async (userLogin) => {
    const {data} = await $authHost.post('api/user/deleteUserAccount', {userLogin})
    return data
}
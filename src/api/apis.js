import HttpRequest from "./http";
import { urls } from "./urls";
const http = HttpRequest.getInstance();

export const login = (data) => {
    return http.post(urls.login, data);
}

export const register = (data) => {
    return http.post(urls.register, data);
}

export const getTaskById = (data) => {
    return http.post(urls.getTaskById, data);
}

export const getTaskByTypeId = (data) => {
    return http.post(urls.getTaskByTypeId, data);
}

export const getGifts = (data) => {
    return http.post(urls.getGifts, data);
}

export const updateGift = (data) => {
    return http.post(urls.updateGift, data);
}

export const getUserInfo = (data) => {
    return http.post(urls.getUserInfo, data);
}

export const acceptTask = (data) => {
    return http.post(urls.acceptTask, data);
}

export const createTask = (data) => {
    return http.post(urls.createTask, data);
}

export const searchTask = (data) => {
    return http.post(urls.searchTask, data);
}

export const updateUserInfo = (data) => {
    return http.post(urls.updateUserInfo, data);
}

export const exchangeGift = (data) => {
    return http.post(urls.exchangeGift, data);
}

export const addGift = (data) => {
    return http.post(urls.addGift, data);
}

export const deleteGift = (data) => {
    return http.post(urls.deleteGift, data);
}

export const getUserTasks = (data) => {
    return http.post(urls.getUserTasks, data);
}

export const completeTask = (data) => {
    return http.post(urls.completeTask, data);
}

export const getPostTasks = (data) => {
    return http.post(urls.getPostTasks, data);
}

export const getUserGifts = (data) => {
    return http.post(urls.getUserGifts, data);
}

export const getGiftsWithoutDelete = (data) => {
    return http.post(urls.getGiftsWithoutDelete, data);
}
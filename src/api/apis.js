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
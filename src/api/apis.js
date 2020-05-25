import HttpRequest from "./http";
import { urls } from "./urls";
const http = HttpRequest.getInstance();

export const login = (data) => {
    return http.post(urls.login, data);
}
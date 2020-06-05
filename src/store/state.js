let token = ''
try {
    if (localStorage.token) {
        token = localStorage.token
    }
} catch (e) { }

let id = ""
try {
    if (localStorage.id) {
        id = localStorage.id
    }
} catch (e) { }

let LoginForm = ""
try {
    if (localStorage.LoginForm) {
        LoginForm = localStorage.LoginForm
    }
} catch (e) { }

export default {
    token,
    LoginForm,
    id
}
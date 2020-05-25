let token = ''
try {
    if (localStorage.token) {
        token = localStorage.token
    }
} catch (e) { }

export default {
    token
}
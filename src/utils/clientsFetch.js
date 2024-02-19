import axios from "axios";
const clientsFetch = () => {
    return new Promise((resolve, reject) => {
        axios
            .get("http://localhost:8080/api/clients/1")
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    });
}

export default clientsFetch;
import axios from 'axios';

const baseUrl = `http://localhost:3001/footers`;

export function getFooters() {
    return new Promise((resolve, reject) => {
        axios
            .get(baseUrl)
            .then(response => {
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data.error);
                }
            });
    });
}

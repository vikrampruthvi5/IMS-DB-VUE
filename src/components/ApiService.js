export default class ApiService{
    async getDbDetails() {
        return await fetch('http://localhost:4501/db').
        then(response => response.json())
        .then(data => data['errno'] ? constant.sample_models : data);
    }
}
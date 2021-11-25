import axios from "axios";

const url = 'https://60d5dbf7943aa60017768c4e.mockapi.io';
const getApiTodo = {
    getAllTodoList() {
        return axios({
            url: `${url}/FiverrTodoApp`,
            method: 'GET'
        });
    },
    getAllTaskMonth(id) {
        return axios({
            url: `${url}/FiverrTodoApp/${id}`,
            method: 'GET'
        });
    },
    changeStatusTask(id,data){
        return axios({
            url: `${url}/FiverrTodoApp/${id}`,
            method: 'PUT',
            data: data,
        });
    }
}
export default getApiTodo;
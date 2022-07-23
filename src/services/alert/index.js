import axios from 'axios'

export const getAlerts = () => {
    return axios.get('https://alert-be-app.herokuapp.com/alert/getListOfAlert')
}

export const postAlert = (data) => {
    return axios.get('https://alert-be-app.herokuapp.com/alert/getListOfAlert')
}

export const editAlert = (data) => {
    console.log('data : ', data)
    return axios.put(`https://alert-be-app.herokuapp.com/alert/editAlert/${data._id}`, data)
}
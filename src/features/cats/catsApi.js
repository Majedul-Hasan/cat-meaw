import axios from "../../utils/axios";

const getAllCats  = async() =>{
    const response = await axios.get('/cats')
    return response
}
const getACat  = async(id) =>{
    const response = await axios.get(`/cats/${id}`)
    return response
}
const addACat = async(data) => {
    const response = await axios.post('/cats', data)
    return response.data
}
const editACat = async(id, data) => {
    const response = await axios.put(`/cats/${id}`, data)
    return response.data
}
const patchClickCount = async(id, click) => {
    const response = await axios.patch(`/cats/${id}`, {        
        click:  click + 1
    })
    return response.data
}
const deleteACat = async(id) => {
    const response = await axios.delete(`/cats/${id}`)
    return response.data
}

export {addACat, editACat, deleteACat, getAllCats, getACat,patchClickCount}
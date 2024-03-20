import Axios  from "axios";



export const Axiosinterceptors = () => {
    return (
        Axios.interceptors.request.use((request) => {
            console.log("starting request", request);
            return request;
        })
    )
}

import Axios from "axios";


const instance = Axios.create({
    baseURL: "https://react-my-burger-94811.firebaseio.com/"
});

export default instance
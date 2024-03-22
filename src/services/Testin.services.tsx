import Axios from "axios"

export const Testinservices = () => {
    return Axios.get("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login")
};

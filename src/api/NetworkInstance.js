import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: 'http://137.184.176.134:8070',
  });

  return networkInstance;
};


export default NetworkInstance;

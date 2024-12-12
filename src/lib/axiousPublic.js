import axios from "axios";

const axiousPublic = axios.create({
    baseURL:'http://localhost:3000',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

const useAxiousPublic = () => {
    return axiousPublic;
};

export default useAxiousPublic; 
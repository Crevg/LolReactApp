import axios from 'axios';
import ApiResponse from '../../models/Shared/ApiResponse.model';


//Axios interceptor for every response to check for error in API call.
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    //Set up default value for error
    let errorReponse: ApiResponse;
    errorReponse = {
      error: true,
      message: 'Internal Server Error',
      status: 500,
    };
    if (error.response && error.response.data) {
      if (error.response.data.status.status_code) {
        errorReponse.status = error.response.data.status.status_code;
      }
      if (error.response.data.status.message) {
        errorReponse.message = error.response.data.status.message;
      }
    }
    return Promise.reject({ ...errorReponse });
  },
);


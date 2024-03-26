/**
 * Set authorization
 * @param authorization
 * @returns
 * **/
export const setAuthorization = (authorization) => {
    localStorage.setItem("authorization", authorization);
  };
  
  /**
   * Get authorization
   * @returns
   * **/
  export const getAuthorization = () => {
    return localStorage.getItem("authorization");
  };
  
  /**
   * Clear authorization
   * @returns
   * **/
  export const clearAuthorization = () => {
    localStorage.removeItem('authorization');
  };
  


export const SUCCESS = 'SECCESS';
export const ERROR = 'ERROR';


export function success(){
    return { type : SUCCESS };
}

export function error(){
    return { type : ERROR  };
}

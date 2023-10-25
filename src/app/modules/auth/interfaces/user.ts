
export interface IRequestUserLoginData {
  type?: string;
  username: string;
  password: string;
  isRemenber?: boolean;
}


export  interface IResponseUserLoginData{
  nombreUsuario: string;
  token: string | null;
}

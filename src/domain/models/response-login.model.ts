import { UserModel } from "./user.model";

export interface ResponseLoginModel {
    status: boolean;
    token: string;
    usuario: UserModel
    msg: string;
}
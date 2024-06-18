import { UserModel } from "./user.model";

export interface ResponseGetUserModel {
    status: boolean;
    usuario: UserModel;
    msg: string;
}
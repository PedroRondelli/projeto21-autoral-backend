import { ApplicationError } from "../protocols";

export function incompatibilityError():ApplicationError{
    return {
        name:"Incompatibility Error",
        message:"Email ou Senha incorretos"
    }
}

export function userAlreadyExist():ApplicationError{
    return {
        name:"User already exist",
        message:"Email já cadastrado"
    }
}
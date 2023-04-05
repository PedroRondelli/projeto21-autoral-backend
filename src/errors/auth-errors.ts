import { ApplicationError } from "../protocols";

export function incompatibilityError():ApplicationError{
    return {
        name:"Incompatibility Error",
        message:"Email ou Senha incorretos"
    }
}
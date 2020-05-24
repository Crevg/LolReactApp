import ProfileData from "./ProfileData.model"

type ApiResponse = {
    error: boolean,
    message: string,
    info? : any | ProfileData,
    status : number
}

export default ApiResponse
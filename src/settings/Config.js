import { Alert} from 'react-native';


var Url='http://';

export const GetAllProducts = Url+'curlyapi/herokuapp.com/api/products';



// user, id,  email, uToken,loginRoot



export const SharedGetUserId = "_id"
export const SharedGetUserName = "username"
export const SharedGetUserTel = "username"
export const SharedGetUserEmail = "email"
export const SharedGetUserAddress = "address"
export const SharedGetUserProfilePic = "profilepic"
// export const SharedGetUserPass = "password"
// export const SharedGetUserCookie = "userCookie"
// export const SharedStatusProfil = "profilStatus"
// export const SharedGetUserStatus = "uStatus"
// export const loginStatusType = "isAdmin"
// export const SharedGetToken = "accessToken"


function getSharedParam(params) {
    return params
}

export function alertfunc(params) {
    Alert.alert("Uyarı!", params, [
        {
            text: "Tamam",
            onPress: () => null
        }
    ]);
}

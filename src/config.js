import dotenv from "dotenv";
dotenv.config()

export default {
    PORT: process.env.PORT || 8080,
    mongoLocal: {
        client: "mongodb",
        connection: "mongodb://localhost:27017/ecommerce"
    },
    mongoRemote:{
        client: "mongodb",
        connection: `mongodb+srv://${process.env.userMongo}:${process.env.passwordMongo}@cluster0.4le3q.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
    },
    firebase: {
        "type": "service_account",
        "project_id": "basefirebase-787e9",
        "private_key_id": "e5f5829b48662104402784e4ea27a109aaab9274",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8QbS6Cwvxhy1z\n2W7b/Or5MbEpCYK6tZj3qfkWFLNd3FTOk0gzhO9YPbUAytcuAaeINSytWRCaOMV/\ndxsYr4q8jsBjbCg3+7mfSX/BAYHTf8xmQqpMJhl/cswgrY3PpIULIemscxLVQkeo\nibtlxDFIusA/bU7A7vVcfWoGBFEgLeV2Brr2JlZ9NSBusTnEYZou0MzYxrY6woTN\nl+4s9fCng7kf4zu+vvhpKiWUKWmyMmeGe2VAvAvv1CPdl2eF+BihoXYJpdAlqyFl\nDw+46gbbiMMvs27lHml1iCn3Us/UBF4Vd2xkfnRtIZC04Pa1KnyJdCqoHYbzJzwS\nVPeY1vztAgMBAAECggEAElEQTQOzI0pkPT/cHfJjSGCx3IzM1+7AVeSHVEMqWokM\nBVdmMIEQKpVCbbPOsO6/Rqzpzmn6iA7bBHZpwAKgbI01IddNqHjJDDsB/5zubU4j\nbJWy7RrN400fmFRalmfq+/TOQBWoMPC0eS0BezrWEr384472mSYG4HthW/mCjS9P\nSIa5g/rhBxdtqrZv/dFYyAz7Bc1R7IPr5vQbggJd2xNf5rxkswPjNN60Joc0eSoA\nfLRj3e9/PwN+j0LzNGY8gcoACi9GLh05juXANfiOd0IzhqQaERJB98NaaHU8bmmD\nP9kzQVO0w258TGQLY7pUvXrXxER9qS/bPD1b40dW3wKBgQDfqMAdRhxC6rb343MV\n33X2V71b84AEhqymfARvFRZzYe6BdLc0HMMuotny8A3pQNPZOwyeYU3PSmatwjOM\nQxsQO2nI+LaOQRbvSDdBo4S1rt5SEDROGT+ao+PEqv83+dvFWQMLoNbKVwAJ6zQw\n8WQRCsoVK0+0NKOrIvjzFaU5ZwKBgQDXenOPL6wXTqAXt2u4Kx/tkzI7KsHwCfeK\nVdTWgnMJWTSp8Z5utwRuWUGkwDJD5+Kx6s2FmZ6lu0xbW8lACYkHMZ/D3MpjLfjg\n6NwYsEs5S0/HEJ3pr+UHd1FS5ey9bJk5RWtmn+zf+pRwc2JjX2Cq5ShMKfMQFRIx\nZn48+WteiwKBgQDdTe2iSbBHKlYXHDDQ8MaZFSIiLON8FwIYzdfZTkVjsAA+ig2I\n+/jJWYxMzOkG5wV4CeynfmJufRDyV5mH7RKHUjKPEEIaqh8Wbx91zGXRHBGRo8UN\njgAYdJg4DnbwnUOvly7jP6eomMNKDTgcQY4hKsrgfXWlOvzDppwsczuEewKBgC13\n3EyZjaG5aJS4kpVhHDKgfdf4VMYXBFH/fJLrIeUWGsPFhV3tZpT2ZqCiIbkshCxw\n1H9dhBmKpTkd7CCEIpMPCJxmyZoWCE9FM7RN9wGW/7WMrxWxlQ13QwTQGZ16/fYU\nzO3xzyUQFiSIZHl9lcNZ6Z/wtiZtm9Iqw3aQVvSzAoGBAK6AHYD7GoeStk8fggcR\nX3OkLjykrZBl36oELVajPD0Bx3s7cY6obSCSG4Jivk0EcVwaaOTRW3NLTCwPSxuL\nizMiwkpizr//dn4UyQJ7NVWKH2Yjuz6opX/qk35slWoI/iiBbKuKdrpUgyjB5Srp\nxrbHPCPftthclmszV3uMaxLC\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-73syg@basefirebase-787e9.iam.gserviceaccount.com",
        "client_id": "115516779435738224900",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-73syg%40basefirebase-787e9.iam.gserviceaccount.com"
    }
}
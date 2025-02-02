import { Account, AppwriteException, Avatars, Client, Databases, ID } from 'react-native-appwrite';
export const appWriteConfig = {

    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.example.aora',
    projectId: '679c75550010cb7eb398',
    databaseId: '679c7730000534377c9c',
    userCollectionId: '679c77560034c87878a1',
    videoCollectionId: '679c77800018a3b7b3d8',
    storageId: '679c78a9002b9fad853d'

}

const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatar=new Avatars(client);
const database=new Databases(client);

export const createUser = async (email,password,username) => {


    try {
        const newAccount=await account.create(ID.unique(),email,password,username)
        if(!newAccount) throw Error;
        const avatarUrl=avatar.getInitials(username);
        await signIn(email,password);
        const newUser=await database.createDocument(appWriteConfig.databaseId,appWriteConfig.userCollectionId,ID.unique(),{
            accountId:newAccount.$id,
            email,
            username,
            avatar:avatarUrl
        }
    )
    return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
export async function signIn(email,password) {
    try {
        const session=await account.createEmailPasswordSession(email,password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
    
}
import NextAuth from "next-auth/next";
import { CredentialsProviderType } from "next-auth/providers/credentials";

const authOptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
            }
        })
    ]
}
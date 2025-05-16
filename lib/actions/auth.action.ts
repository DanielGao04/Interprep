'use server';

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try{
        const userRecord = await db .collection('users').doc(uid).get()

    } catch (e: any) {
        console.error('Error creating a user', e)
        if(e.code === 'auth/email-already-exists') {
            return {
                success: false ,
                message: 'Email already in use'
            }
        }

        return {
            success: false,
            message: 'Error creating an account'
        }

    }
}
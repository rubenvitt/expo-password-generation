import {useReducer, useState} from "react";

const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
const numbers = '0123456789'
const specialChars = '*#-.,öäü§$%&/';

interface PasswordProps {
    length: number;
}

export const usePasswordGenerator = () => {

    function newPassword(state: unknown, {length}: PasswordProps) {
        let result = "";
        const chars = capitalLetters + lowerLetters + numbers + specialChars;

        for(let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }

        return result;
    }

    const [password, generatePassword] = useReducer(newPassword, newPassword(null, {length: 100}))

    return {
        password: password,
        generatePassword: generatePassword
    }
}


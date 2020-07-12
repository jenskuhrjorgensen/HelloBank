import {AccountById} from "../Model/Account"

export function fetchAccounts(): Promise<AccountById> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "0": {
                    name: "My First account1"
                },
                "1": {
                    name: "My First account2"
                },
                "2": {
                    name: "My First account3"
                },
                "3": {
                    name: "My First account4"
                },
            })
        }, 2000)
    })
}

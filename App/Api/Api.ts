import {AccountById} from "../Model/Account"
import {AccountBuilder} from "../Model/AccountBuilder"
import {OwnerById} from "../Model/Owner"
import {OwnerBuilder} from "../Model/OwnerBuilder"

const DELAY = 2000

interface AccountsNormalized {
    result: Array<string>,
    entities: {
        accounts: AccountById,
        owners: OwnerById,
    }
}

// The API has been mocked to return normalized data - this should probably be done in a mapper layer, because the backend would return Array<Account>
export function fetchAccounts(): Promise<AccountsNormalized> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                result: [
                    "0",
                ],
                entities: {
                    accounts: {
                        "0": new AccountBuilder()
                            .id("0")
                            .name("My First account1")
                            .description("Description")
                            .balance(123.4)
                            .owner("0")
                            .build(),
                        "1": new AccountBuilder()
                            .id("1")
                            .name("My First account1")
                            .description("Description")
                            .balance(-234.4)
                            .owner("0")
                            .build(),
                        "2": new AccountBuilder()
                            .id("2")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "3": new AccountBuilder()
                            .id("3")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "4": new AccountBuilder()
                            .id("4")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "5": new AccountBuilder()
                            .id("5")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "6": new AccountBuilder()
                            .id("6")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "7": new AccountBuilder()
                            .id("7")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "8": new AccountBuilder()
                            .id("8")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "9": new AccountBuilder()
                            .id("9")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "10": new AccountBuilder()
                            .id("10")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "11": new AccountBuilder()
                            .id("11")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "12": new AccountBuilder()
                            .id("12")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                        "13": new AccountBuilder()
                            .id("13")
                            .name("My other First account1")
                            .description("Description")
                            .balance(1000.2)
                            .owner("1")
                            .build(),
                    },
                    owners: {
                        "0": new OwnerBuilder().firstName("John").build(),
                        "1": new OwnerBuilder().firstName("Paul").build(),
                    }
                }
            })
        }, DELAY)
    })
}

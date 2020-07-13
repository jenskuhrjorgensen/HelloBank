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
                            .name("Savings")
                            .description("This account is for my savings")
                            .owner("0")
                            .build(),
                        "1": new AccountBuilder()
                            .id("1")
                            .name("Check")
                            .description("This is my check account")
                            .owner("0")
                            .build(),
                        "2": new AccountBuilder()
                            .id("2")
                            .name("Real estate")
                            .description("This is for my real estate expenses")
                            .owner("1")
                            .build(),
                        "3": new AccountBuilder()
                            .id("3")
                            .name("Private")
                            .description("This is for fun!!")
                            .owner("1")
                            .build(),
                        "4": new AccountBuilder()
                            .id("4")
                            .name("Shared")
                            .description("This is for my wife...")
                            .owner("1")
                            .build(),
                        "5": new AccountBuilder()
                            .id("5")
                            .name("Kids")
                            .description("This is our kids' savings account")
                            .owner("1")
                            .build(),
                        "6": new AccountBuilder()
                            .id("6")
                            .name("Spending")
                            .description("This is for general expenses")
                            .owner("1")
                            .build(),
                        "7": new AccountBuilder()
                            .id("7")
                            .name("Some other account 1")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "8": new AccountBuilder()
                            .id("8")
                            .name("Some other account 2")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "9": new AccountBuilder()
                            .id("9")
                            .name("Some other account 3")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "10": new AccountBuilder()
                            .id("10")
                            .name("Some other account 4")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "11": new AccountBuilder()
                            .id("11")
                            .name("Some other account 5")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "12": new AccountBuilder()
                            .id("12")
                            .name("Some other account 6")
                            .description("Description")
                            .owner("1")
                            .build(),
                        "13": new AccountBuilder()
                            .id("13")
                            .name("Some other account 7")
                            .description("Description")
                            .owner("1")
                            .build(),
                    },
                    owners: {
                        "0": new OwnerBuilder().firstName("John").lastName("Doe").build(),
                        "1": new OwnerBuilder().firstName("Paul").lastName("Rudd").build(),
                    }
                }
            })
        }, DELAY)
    })
}

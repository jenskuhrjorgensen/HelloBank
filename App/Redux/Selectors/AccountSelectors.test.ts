import {filterByPropertiesFactory, filterByStringReduceFactory} from "./AccountSelectors"
import {Account} from "../../Model/Account"
import {AccountBuilder} from "../../Model/AccountBuilder"
import {propertyOf} from "../../Utils"

describe("AccountSelectors ", () => {
    describe("filterByStringReduceFactory ", () => {
        it("empty filter and empty object ; false", () => {
            const obj = {}
            const propertyName = propertyOf<Account>("name")
            const result = filterByStringReduceFactory(obj, "")(false, propertyName)
            expect(result).toBeFalse()
        })

        it("empty filter and empty name ; true", () => {
            const obj = {name: ""}
            const propertyName = propertyOf<Account>("name")
            const result = filterByStringReduceFactory(obj, "")(false, propertyName)
            expect(result).toBeTruthy()
        })

        it("filter 'sec' and empty name ; false", () => {
            const obj = {name: ""}
            const propertyName = propertyOf<Account>("name")
            const result = filterByStringReduceFactory(obj, "sec")(false, propertyName)
            expect(result).toBeFalsy()
        })

        describe("Test ignoring case ", () => {
            it("filter 'sec' and empty name 'My Second' ; true", () => {
                const obj = {name: "My second"}
                const propertyName = propertyOf<Account>("name")
                const result = filterByStringReduceFactory(obj, "sec")(false, propertyName)
                expect(result).toBeTruthy()
            })

            it("filter 'SEC' and empty name 'My Second' ; true", () => {
                const obj = {name: "My second"}
                const propertyName = propertyOf<Account>("name")
                const result = filterByStringReduceFactory(obj, "sec")(false, propertyName)
                expect(result).toBeTruthy()
            })
        })
    })

    describe("filterByPropertiesFactory ", () => {
        it("empty filter ; true", () => {
            const account = new AccountBuilder().name("").description("").build()
            const propertyNames = [propertyOf<Account>("name")]
            const result = filterByPropertiesFactory("", propertyNames)(account)
            expect(result).toBeTruthy()
        })

        it("filter 'sec' and empty name + description ; false", () => {
            const account = new AccountBuilder().name("").description("").build()
            const propertyNames = [propertyOf<Account>("name")]
            const result = filterByPropertiesFactory("sec", propertyNames)(account)
            expect(result).toBeFalsy()
        })

        it("filter 'sec' and name 'My second' ; true", () => {
            const account = new AccountBuilder().name("My second").description("").build()
            const propertyNames = [propertyOf<Account>("name")]
            const result = filterByPropertiesFactory("sec", propertyNames)(account)
            expect(result).toBeTruthy()
        })

        it("filter 'sec' and description 'My second' ; true", () => {
            const account = new AccountBuilder().description("My second").name("").build()
            const propertyNames = [propertyOf<Account>("description")]
            const result = filterByPropertiesFactory("sec", propertyNames)(account)
            expect(result).toBeTruthy()
        })
    })
})

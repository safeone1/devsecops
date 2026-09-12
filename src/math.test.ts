
import {describe,it,expect} from "vitest";
import {sum} from "./math";


describe("sum",()=>{
    it ("should return the sum of two numbers",()=>{
        expect(sum(2,3)).toBe(5)
    })
})
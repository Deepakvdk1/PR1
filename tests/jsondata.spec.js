import data from "../testdata/data.json"
import {test } from "@playwright/test";


test("single data fetching",async({page})=>{
    console.log(data.abc)
    console.log(data.def)
    console.log(data.ghi)
})



//  data.forEach((Obj,i) => {
//     test(`multiple obj ${i}`,async()=>{
//        await console.log(Obj.abc);
//         await console.log(Obj.def);
//         await console.log(Obj.ghi);
//        await console.log(Obj.lmno);    
//     })
    
// });

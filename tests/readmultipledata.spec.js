import { test } from '@playwright/test'
import excel from 'exceljs'
test("read multipledata",async({page})=>{
    const book=new excel.Workbook()
    await book.xlsx.readFile('testdata/ddt.xlsx')// loads the file 
    const sheet = book.getWorksheet("Sheet1"); //get the sheet 
    for (let i=1;i<=sheet.rowCount; i++){ //iteration to read the rows 
        let row = sheet.getRow(i)     //get each row 
        let data1= row.getCell(i).toString()
      
        for (let j=1; j<=sheet.columnCount; j++) //get each coloumn 
                   {
            let data2= sheet.getRow(i).getCell(j).toString() // gettin the cell value with respect to coloumn
            data1=data1+ data2 + ' ' //data is concatinated to be
            }
        
            
        }

    })
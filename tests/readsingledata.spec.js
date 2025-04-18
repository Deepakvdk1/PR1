import { test } from '@playwright/test';
import excel from 'exceljs';

test("read data", async () => {
  const book = new excel.Workbook();
  await book.xlsx.readFile('./TestData/ddt.xlsx');

  const sheet = book.getWorksheet("Sheet1");

  const data = sheet.getRow(1).getCell(1).toString();
  console.log("Read data:", data);
});

test("write data", async () => {
  const book2 = new excel.Workbook();
  await book2.xlsx.readFile('./TestData/ddt.xlsx');

  // ✅ Check if Sheet2 exists, create if not
  let sheett = book2.getWorksheet('Sheet2');
  if (!sheett) {
    sheett = book2.addWorksheet("Sheet2");
  }

  // ✅ Write data
  sheett.getRow(1).getCell(2).value = "sdfghj";

  // ✅ Save the file (fix path typo)
  await book2.xlsx.writeFile('./TestData/ddt.xlsx');
});
    
   

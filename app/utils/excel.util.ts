import { utils, writeFile, read } from "xlsx";

export class ExcelUtils {
  static download(data: any[], title: string) {
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(data);
    utils.book_append_sheet(workbook, worksheet, title);
    writeFile(workbook, `${title.replace(/\s+/g, "-")}_${Date.now()}.xlsx`);
  }

  static async toJson<T = any>(file: File) {
    const workbook = read(await file.arrayBuffer());
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return utils.sheet_to_json<T>(worksheet);
  }
}

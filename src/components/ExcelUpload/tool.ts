import * as jschardet from "jschardet";
// @ts-ignore
import { parse } from "papaparse";

/**
 * 检查编码
 * @param base64Str Base64 字符串
 * @returns 编码类型
 */
const detectEncoding = (base64Str: string): string => {
  const str = atob(base64Str.split(";base64,")[1]);
  let encoding = jschardet.detect(str).encoding;
  if (encoding === "windows-1252") {
    encoding = "ANSI";
  }
  return encoding;
};

/**
 * 解析 CSV 文件
 * @param file CSV 文件
 * @returns 解析后的二维数组
 */
export const parseCsvFile = (file: File): Promise<any[][]> => {
  return new Promise((resolve, reject) => {
    const fReader = new FileReader();
    fReader.readAsDataURL(file);
    fReader.onload = (evt: ProgressEvent<FileReader>) => {
      if (evt.target?.result) {
        const data = evt.target.result as string;
        const encoding = detectEncoding(data);

        parse(file, {
          encoding: encoding,
          complete: (results: any) => {
            let res = results.data;
            if (res[res.length - 1] === "") {
              res.pop();
            }
            // console.log("res", res);
            resolve(res);
          },
          error: (error: any) => {
            reject(error);
          },
        });
      } else {
        reject(new Error("文件读取失败"));
      }
    };
    fReader.onerror = (error) => {
      reject(error);
    };
  });
};

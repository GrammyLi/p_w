import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { FC } from "react";
import "./index.less";
import { parseCsvFile } from "./tool";

type ExcelUploadPropsType = {
  onChange: (data: string[][]) => void;
  children?: React.ReactNode; // Allow children to be passed
};
const ExcelImport: FC<ExcelUploadPropsType> = (props: any) => {
  const handleUpload: UploadProps["onChange"] = (fileList) => {
    parseCsvFile(fileList.file as any)
      .then((res) => {
        console.log("我的数据", res);
        const parsedData: string[][] =
          res
            ?.slice(1)
            // 过滤掉没有数据的
            ?.filter?.((el: string[]) => el?.some((item) => item))
            ?.map((row) => {
              return row;
            }) || [];
        props.onChange?.(parsedData);
      })
      .catch((err: any) => {
        message.error("解析失败" + err.message ? `:${err.message}` : "");
      });
  };

  return (
    <Upload.Dragger
      accept=".csv"
      showUploadList={false}
      beforeUpload={() => false}
      onChange={handleUpload}
      fileList={[]}
      className="ai-graphic-excel-upload"
    >
      {props?.children || null}
    </Upload.Dragger>
  );
};

export default ExcelImport;

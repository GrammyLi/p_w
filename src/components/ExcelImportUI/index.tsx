import { Button } from "antd";
import { FC } from "react";
import "./index.less";
import ExcelUpload from "../ExcelUpload";

const ExcelImportUI: FC<{
  demoUrl: string;
  onChange: (data: string[][]) => void;
}> = (props) => {
  const handleExcelChange = (data: string[][]) => {
    props.onChange(data);
  };

  return (
    <div className="g-excel-import-ui">
      <div className="g-excel-import-ui__icon"></div>
      <Button type="link" href={props.demoUrl}>
        CSV模板下载
      </Button>
      <ExcelUpload onChange={handleExcelChange}>
        <Button type="primary">上传CSV文件</Button>
      </ExcelUpload>
      <div className="g-excel-import-ui__tip">仅支持.csv文件</div>
    </div>
  );
};

export default ExcelImportUI;

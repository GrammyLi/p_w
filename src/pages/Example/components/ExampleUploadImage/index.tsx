import React, { useState } from "react";
import { message, Image } from "antd"; // 引入 Image 组件

import "./index.less"; // 导入样式
import { UploadImage } from "../../../../components/UploadImage";

const ExampleUploadImage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]); // 保存上传的文件列表
  const [filePreviews, setFilePreviews] = useState<string[]>([]); // 用于保存文件的预览 URL
  const [uploadLoading, setUploadLoading] = useState<boolean>(false); // 上传加载状态

  // 处理文件变化
  const handleFileChange = (newFiles: File[]) => {
    // 保存文件
    setFiles(newFiles);

    // 生成文件预览 URL
    const previews = newFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);

    if (newFiles.length > 0) {
      message.success("文件上传成功！");
    } else {
      message.error("没有文件上传！");
    }
  };

  // 处理上传加载状态
  const handleUploadLoading = (loading: boolean) => {
    setUploadLoading(loading);
  };

  return (
    <div className="example-upload-image">
      <h2 className="example-upload-image__title">图片上传示例</h2>

      {/* UploadImage 组件 */}
      <UploadImage
        onChange={handleFileChange}
        uploadLoading={uploadLoading}
        className="example-upload-image__upload"
      />

      {/* 显示已上传的文件预览和文件名 */}
      <div className="example-upload-image__uploaded-files">
        {files.length > 0 ? (
          <div className="example-upload-image__file-preview">
            {filePreviews.map((preview, index) => (
              <div key={index} className="example-upload-image__file-item">
                {/* 使用 Ant Design 的 Image 组件展示图片 */}
                <Image
                  src={preview}
                  alt={`uploaded-img-${index}`}
                  className="example-upload-image__image-preview"
                  preview={true} // 禁用图片预览，保持界面整洁
                  width={120} // 设置图片的宽度，保持一致的大小
                  height={120} // 设置图片的高度
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
                {/* <p className="example-upload-image__file-name">
                  {files[index].name}
                </p> */}
              </div>
            ))}
          </div>
        ) : (
          <p className="example-upload-image__no-files">没有上传文件</p>
        )}
      </div>
    </div>
  );
};

export default ExampleUploadImage;

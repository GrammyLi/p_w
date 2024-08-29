import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./index.less";

interface UploadImageProps {
  onChange: (base64: string) => void;
  className?: string; // 添加 className 参数
  downloadElment?: React.ReactNode;
}

const imageTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp"];

export const UploadImage: React.FC<UploadImageProps> = ({
  onChange,
  className,
  downloadElment,
}) => {
  const [loading, setLoading] = useState(false);

  // 将文件转换为 Base64 格式
  const getBase64 = (file: File, callback: (base64: string) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result as string);
  };

  // 处理文件上传
  const handleUpload = ({ file }: any) => {
    setLoading(true); // 设置加载状态为 true
    getBase64(file, (base64) => {
      setLoading(false); // 转换完成后，恢复加载状态为 false
      onChange(base64); // 将 base64 字符串传递给父组件
    });
  };

  // 验证文件类型是否为图片
  const beforeUpload = (file: File) => {
    const isImage = imageTypes.includes(file.type);
    if (!isImage) {
      message.error("只能上传图片格式文件（JPG, PNG, GIF, BMP）");
    }
    return isImage; // 只有是图片类型才允许上传
  };

  return (
    <div className={classNames("upload-image", className)}>
      <Upload
        className="upload-image__input"
        showUploadList={false} // 不显示上传文件列表
        beforeUpload={beforeUpload} // 在上传前验证文件类型
        customRequest={handleUpload} // 自定义上传处理逻辑
      >
        <div className="upload-image__label">
          {loading ? (
            <div className="upload-loading">
              <UploadOutlined className="upload-loading--icon" />
              <span className="upload-loading--text">图片上传中</span>
            </div>
          ) : downloadElment ? (
            downloadElment
          ) : (
            <Button
              className="upload-btn"
              type="primary"
              icon={<UploadOutlined />}
            >
              立即上传图片
            </Button>
          )}
        </div>
      </Upload>
    </div>
  );
};

export default UploadImage;

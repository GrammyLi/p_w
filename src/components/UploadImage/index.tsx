import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd"; // 确保正确导入 UploadProps 类型
import { Button, message, Upload } from "antd";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "./index.less";

interface UploadImageProps {
  onChange: (files: File[]) => void; // 接收一个 File 对象数组
  className?: string;
  uploadLoading: boolean;
}

export const UploadImage: React.FC<UploadImageProps> = ({
  onChange,
  className,
  uploadLoading,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(uploadLoading);
  }, [uploadLoading]);

  // 自定义上传配置
  const uploadProps: UploadProps = {
    name: "file",
    multiple: true, // 允许多文件上传
    showUploadList: false, // 不显示上传文件列表
    accept: "image/*", // 限制只能上传图片文件
    beforeUpload(file, fileList) {
      // 验证文件大小
      let size = file.size / 1024;
      if (size > 40 * 1024) {
        message.error("图片最大不能超过40MB");
        return Upload.LIST_IGNORE; // 忽略超过大小限制的文件
      }

      // 直接在 beforeUpload 中处理上传逻辑
      setLoading(true); // 设置加载状态为 true

      // 将所有文件传递给 onChange 回调
      onChange(fileList.map((item) => item as File));

      setLoading(false); // 上传处理完成后恢复加载状态为 false
      return Upload.LIST_IGNORE; // 返回 Upload.LIST_IGNORE 以阻止默认的上传行为
    },
  };

  return (
    <div className={classNames("upload-image", className)}>
      <Upload {...uploadProps} disabled={loading}>
        <Button
          className="upload-btn"
          type="primary"
          icon={<UploadOutlined />}
          size="small"
          loading={loading}
        >
          插入图片
        </Button>
      </Upload>
    </div>
  );
};

export default UploadImage;

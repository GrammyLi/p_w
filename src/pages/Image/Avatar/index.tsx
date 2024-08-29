import React, { useState } from "react";
import "./index.less";

import { Button } from "antd";
import Category from "../components/Category";
import AvatarPreview from "../components/AvatarPreview";
import UploadImage from "../components/UploadImage";
import { FileEmpty } from "../components/FileEmpty";
import CropModal from "../components/CropModal";

const categoryList = [
  {
    id: 1,
    category: "国旗",
    icon: "🇨🇳",
    url: "https://grammyli.com/t/avatar/img/flag/hat4.png",
  },
  {
    id: 2,
    category: "毕业",
    icon: "🎓",
    url: "https://grammyli.com/t/avatar/img/graduation/graduation1.png",
  },
];

const AvatarAddChinaPage = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isCropModalVisible, setIsCropModalVisible] = useState(false);
  const [corpSrc, setCorpSrc] = useState<string | null>(null);
  const [canvasDataUrl, setCanvasDataUrl] = useState<string | null>(null);
  const [category, setCategory] = useState<number | string>(
    categoryList[0]?.id
  );

  const handleImageChange = (base64: string) => {
    setImageSrc(base64);
    setIsCropModalVisible(true); // 显示裁剪弹窗
  };

  const handleCropComplete = (croppedImage: string) => {
    setCorpSrc(croppedImage);
    setIsCropModalVisible(false);
  };

  const handleDownload = () => {
    if (canvasDataUrl) {
      const link = document.createElement("a");
      link.href = canvasDataUrl;
      link.download = "avatar_with_wrapper.png";
      link.click();
    }
  };

  return (
    <div className="tool-avatar-container">
      {!!corpSrc ? (
        <>
          <Category
            categoryList={categoryList}
            value={category}
            onChange={setCategory}
            offsetX={0}
          />
          <AvatarPreview
            imageSrc={corpSrc}
            wrapperUrl={
              categoryList?.find((v) => v.id === category)?.url as string
            }
            onExport={setCanvasDataUrl} // 将 canvas 数据传递到父组件
          />
          <div className="avatar-preview__actions">
            <Button type="primary" onClick={handleDownload}>
              下载图片
            </Button>
            <UploadImage
              onChange={handleImageChange}
              downloadElment={<Button type="primary">再次上传</Button>}
            />
          </div>
        </>
      ) : (
        <>
          <FileEmpty
            title={"头像加国旗"}
            list={[
              {
                url: "https://grammyli.com/img/avatar/hmbb.jpeg",
                name: "原图",
              },
              {
                url: "https://grammyli.com/img/avatar/hmbb-avatar.png",
                name: "效果图",
              },
            ]}
          />
          <UploadImage
            onChange={handleImageChange}
            className="tool-avatar-container__empty--upload"
          />
        </>
      )}

      {imageSrc && (
        <CropModal
          visible={isCropModalVisible}
          imageSrc={imageSrc}
          onCancel={() => setIsCropModalVisible(false)}
          onCropComplete={handleCropComplete}
        />
      )}
    </div>
  );
};

export default AvatarAddChinaPage;

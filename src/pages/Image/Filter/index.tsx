import React, { useState } from "react";
import "./index.less";
import { Button } from "antd";
import Category from "../components/Category";
import AvatarPreview from "../components/AvatarPreview";
import UploadImage from "../components/UploadImage";
import { FileEmpty } from "../components/FileEmpty";
import CropModal from "../components/CropModal";

const categoryList = [
  { category: "无滤镜", id: "" },
  { category: "灰度", id: "gray" },
  { category: "黑白", id: "blackWhite" },
  { category: "底片", id: "negative" },
  { category: "漫画", id: "comic" },
  { category: "怀旧", id: "nostalgia" },
  { category: "融合色调", id: "fusedCast" },
];

const AvatarAddChinaPage = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isCropModalVisible, setIsCropModalVisible] = useState(false);
  const [corpSrc, setCorpSrc] = useState<string | null>(null);
  const [canvasDataUrl, setCanvasDataUrl] = useState<string | null>(null);
  const [category, setCategory] = useState<number | string>(
    categoryList?.[0]?.id
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
            filterType={category} // 传递滤镜类型
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
            title={"头像加滤镜"}
            list={[
              {
                url: "https://grammyli.com/img/avatar/hmbb.jpeg",
                name: "原图",
              },
              {
                url: "https://grammyli.com/img/avatar/hmbb-filter.png",
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

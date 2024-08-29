import React, { useState, useCallback } from "react";
import { Modal, Slider, Button, Select } from "antd";
import Cropper, { Area, Point } from "react-easy-crop";
import "./index.less";

const { Option } = Select;

interface CropModalProps {
  visible: boolean;
  imageSrc: string;
  onCancel: () => void;
  onCropComplete: (croppedImage: string) => void;
}

const CropModal: React.FC<CropModalProps> = ({
  visible,
  imageSrc,
  onCancel,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(1); // 默认裁剪比例为1:1
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropChange = (crop: Point) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  const onCropCompleteInternal = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const getCroppedImg = useCallback(async () => {
    if (!croppedAreaPixels) {
      return;
    }

    const image = new Image();
    image.src = imageSrc;
    await new Promise<void>((resolve) => {
      image.onload = () => resolve();
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const { width, height } = croppedAreaPixels;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      width,
      height,
      0,
      0,
      width,
      height
    );

    return new Promise<string>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedUrl = URL.createObjectURL(blob);
          resolve(croppedUrl);
        }
      }, "image/jpeg");
    });
  }, [croppedAreaPixels, imageSrc]);

  const handleSubmit = async () => {
    const croppedImage = await getCroppedImg();
    if (croppedImage) {
      onCropComplete(croppedImage);
    }
  };

  const handleAspectChange = (value: number) => {
    setAspect(value);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={
        <div className="crop-modal__footer">
          <div className="crop-modal__select-wrapper">
            <Select
              defaultValue={aspect}
              style={{ width: 120 }}
              onChange={handleAspectChange}
              className="crop-modal__select"
              disabled={true}
            >
              <Option value={1}>1:1</Option>
              <Option value={4 / 3}>4:3</Option>
              <Option value={16 / 9}>16:9</Option>
              <Option value={3 / 2}>3:2</Option>
            </Select>
          </div>
          <div className="crop-modal__buttons">
            <Button onClick={onCancel}>取消</Button>
            <Button type="primary" onClick={handleSubmit}>
              确定
            </Button>
          </div>
        </div>
      }
      title="裁剪图片"
    >
      <div className="crop-container">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropCompleteInternal}
        />
      </div>
      <Slider
        min={1}
        max={3}
        step={0.1}
        value={zoom}
        onChange={onZoomChange}
        className="crop-slider"
      />
    </Modal>
  );
};

export default CropModal;

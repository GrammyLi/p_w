import React, { useEffect, useRef } from "react";
import { applyFilter, RGBA } from "./filter";
import "./index.less";

interface AvatarPreviewProps {
  imageSrc: string; // 裁剪后的头像图片
  wrapperUrl?: string; // 叠加在头像上的图层
  filterType?: string | number;
  onExport: (dataUrl: string) => void; // 用于导出 canvas 内容的回调函数
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({
  imageSrc,
  wrapperUrl,
  filterType,
  onExport,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log("filterType", filterType);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.setAttribute("crossorigin", "anonymous");
    image.src = imageSrc;

    const wrapper = new Image();
    wrapper.setAttribute("crossorigin", "anonymous");
    wrapperUrl && (wrapper.src = wrapperUrl);

    image.onload = () => {
      console.log("onload ", image);
      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 将裁剪后的图片绘制到画布
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // 在图片上叠加图层

      if (filterType) {
        // 获取图像数据
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const { data } = imageData;
        for (let i = 0; i < data.length; i += 4) {
          const colors: any = data.slice(i, i + 4);
          const newColors = applyFilter(filterType as string, colors);
          const [r, g, b, a] = newColors;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = a;
        }
        ctx.putImageData(imageData, 0, 0);

        // 导出 canvas 内容为图像数据 URL
        const dataUrl = canvas.toDataURL("image/png");
        onExport(dataUrl);
      }

      // 在图片上叠加图层
      if (!!wrapper) {
        wrapper.onload = () => {
          ctx.drawImage(wrapper, 0, 0, image.width, image.height);

          // 导出 canvas 内容为图像数据 URL
          const dataUrl = canvas.toDataURL("image/png");
          onExport(dataUrl);
        };
      }
    };
  }, [imageSrc, wrapperUrl, onExport, filterType]);

  return <canvas ref={canvasRef} className="avatar-preview__canvas" />;
};

export default AvatarPreview;

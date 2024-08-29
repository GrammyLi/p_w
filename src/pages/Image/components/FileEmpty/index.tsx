import React from "react";
import { PictureOutlined } from "@ant-design/icons";
import "./index.less";
import ImageWithSpin from "../../../components/ImageWithSpin";

interface FileEmptyPropsType {
  list: { url: string; name: string }[];
  title: string;
}

export const FileEmpty = (props: FileEmptyPropsType) => {
  const { list, title } = props;

  return (
    <div className="image-file-empty">
      <div className="image-file-empty__title">
        <PictureOutlined className="image-file-empty__title--icon" />
        <div className="image-file-empty__title--desc">{title}</div>
      </div>
      <div className="image-file-empty__example">
        {list.map(({ url, name }) => (
          <div className="image-file-empty__example--item" key={name}>
            <ImageWithSpin
              url={url}
              alt={name}
              className="image-file-empty__example--item-img"
            />
            <div className="image-file-empty__example--item-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

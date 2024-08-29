import classNames from "classnames";
import { FC } from "react";

import "./index.less";
import { propsType } from "./types";

const Category: FC<propsType> = (props) => {
  const { offsetX, onChange, value, categoryList } = props;

  const handleClick = (id: number | string) => {
    onChange && onChange(id);
  };

  return (
    <div
      className="category-container"
      style={{
        marginLeft: offsetX,
      }}
    >
      {categoryList?.map(({ id, category, icon }) => {
        return (
          <div
            key={id}
            className={classNames([
              "category-container__item",
              value === id ? "category-container__item--active" : "",
            ])}
            onClick={() => handleClick(id)}
          >
            {!!icon && (
              <div className="category-container__item--icon">{icon}</div>
            )}
            <div className="category-container__item--category">{category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

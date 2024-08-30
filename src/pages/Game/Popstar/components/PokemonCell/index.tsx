import React from "react";
import "./index.less";

interface PokemonCellProps {
  x: number;
  y: number;
  value: number;
  onClick: (x: number, y: number) => void;
  isSelected: boolean;
}

const PokemonCell: React.FC<PokemonCellProps> = ({
  x,
  y,
  value,
  onClick,
  isSelected,
}) => {
  const handleClick = () => {
    onClick(x, y);
  };

  return (
    <td
      className={`pokemon-cell ${value ? `p${value}` : ""} ${
        isSelected ? "highlighted" : ""
      }`}
      onClick={handleClick}
    >
      {/* 可在此添加图片或其他内容 */}
    </td>
  );
};

export default PokemonCell;

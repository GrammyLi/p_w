export interface Category {
  id: number | string;
  category: string;
  icon?: string;
  url?: string;
}

export type propsType = {
  value?: number | string;
  offsetX: number;
  categoryList: Category[];
  onChange?: (value: number | string) => void;
};

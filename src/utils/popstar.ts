// /**
//  * 创建宝可梦的矩阵
//  * @param row - 行数，默认为10
//  * @param col - 列数，默认为10
//  * @returns 随机填充的二维数组
//  */
// export const createPokemons = (row = 10, col = 10): number[][] => {
//   const pokemons = [];
//   for (let i = 0; i < row; i++) {
//     const row = [];
//     for (let j = 0; j < col; j++) {
//       const pokemonType = Math.floor(Math.random() * 6) + 1;
//       row.push(pokemonType);
//     }
//     pokemons.push(row);
//   }
//   return pokemons;
// };

// /**
//  * 处理点击事件
//  * @param pokemons - 当前宝可梦矩阵
//  * @param x - 行索引
//  * @param y - 列索引
//  * @returns 更新后的宝可梦矩阵和得分
//  */
// export const handleCellClick = (
//   pokemons: number[][],
//   x: number,
//   y: number
// ): { newPokemons: number[][]; pointsEarned: number } => {
//   // 检查当前点击的单元格是否有宝可梦
//   if (pokemons[x][y] === 0) {
//     return { newPokemons: pokemons, pointsEarned: 0 };
//   }

//   const visited = new Set<string>();
//   const stack = [[x, y]];
//   const value = pokemons[x][y];
//   let pointsEarned = 0;

//   while (stack.length > 0) {
//     const [cx, cy] = stack.pop()!;
//     if (!visited.has(`${cx}-${cy}`) && pokemons[cx][cy] === value) {
//       visited.add(`${cx}-${cy}`);
//       pokemons[cx][cy] = 0; // 清空这个单元格
//       pointsEarned += 10;

//       // 添加相邻的四个单元格
//       if (cx > 0) stack.push([cx - 1, cy]);
//       if (cx < pokemons.length - 1) stack.push([cx + 1, cy]);
//       if (cy > 0) stack.push([cx, cy - 1]);
//       if (cy < pokemons[0].length - 1) stack.push([cx, cy + 1]);
//     }
//   }

//   const newPokemons = applyGravity(pokemons);
//   return { newPokemons, pointsEarned };
// };

// /**
//  * 应用重力效果，模拟宝可梦掉落
//  * @param pokemons - 当前宝可梦矩阵
//  * @returns 应用重力效果后的宝可梦矩阵
//  */
// export const applyGravity = (pokemons: number[][]): number[][] => {
//   // 垂直下落
//   for (let col = 0; col < pokemons[0].length; col++) {
//     let emptyRow = pokemons.length - 1;

//     for (let row = pokemons.length - 1; row >= 0; row--) {
//       if (pokemons[row][col] !== 0) {
//         if (emptyRow !== row) {
//           pokemons[emptyRow][col] = pokemons[row][col];
//           pokemons[row][col] = 0;
//         }
//         emptyRow--;
//       }
//     }
//   }

//   // 水平移动
//   for (let col = pokemons[0].length - 1; col > 0; col--) {
//     if (pokemons.every((row) => row[col] === 0)) {
//       for (let row = 0; row < pokemons.length; row++) {
//         for (let currentCol = col; currentCol > 0; currentCol--) {
//           pokemons[row][currentCol] = pokemons[row][currentCol - 1];
//           pokemons[row][currentCol - 1] = 0;
//         }
//       }
//     }
//   }

//   return pokemons;
// };

export const createPokemons = (row = 10, col = 10): number[][] => {
  const pokemons = [];
  for (let i = 0; i < row; i++) {
    const row = [];
    for (let j = 0; j < col; j++) {
      const pokemonType = Math.floor(Math.random() * 6) + 1;
      row.push(pokemonType);
    }
    pokemons.push(row);
  }
  return pokemons;
};

export const handleCellClick = (
  pokemons: number[][],
  x: number,
  y: number
): { newPokemons: number[][]; pointsEarned: number } => {
  if (pokemons[x][y] === 0) {
    return { newPokemons: pokemons, pointsEarned: 0 };
  }

  const visited = new Set<string>();
  const stack = [[x, y]];
  const value = pokemons[x][y];
  let pointsEarned = 0;

  while (stack.length > 0) {
    const [cx, cy] = stack.pop()!;
    if (!visited.has(`${cx}-${cy}`) && pokemons[cx][cy] === value) {
      visited.add(`${cx}-${cy}`);
      pokemons[cx][cy] = 0;
      pointsEarned += 10;

      if (cx > 0) stack.push([cx - 1, cy]);
      if (cx < pokemons.length - 1) stack.push([cx + 1, cy]);
      if (cy > 0) stack.push([cx, cy - 1]);
      if (cy < pokemons[0].length - 1) stack.push([cx, cy + 1]);
    }
  }

  const newPokemons = applyGravity(pokemons);
  return { newPokemons, pointsEarned };
};

export const applyGravity = (pokemons: number[][]): number[][] => {
  for (let col = 0; col < pokemons[0].length; col++) {
    let emptyRow = pokemons.length - 1;

    for (let row = pokemons.length - 1; row >= 0; row--) {
      if (pokemons[row][col] !== 0) {
        if (emptyRow !== row) {
          pokemons[emptyRow][col] = pokemons[row][col];
          pokemons[row][col] = 0;
        }
        emptyRow--;
      }
    }
  }

  for (let col = pokemons[0].length - 1; col > 0; col--) {
    if (pokemons.every((row) => row[col] === 0)) {
      for (let row = 0; row < pokemons.length; row++) {
        for (let currentCol = col; currentCol > 0; currentCol--) {
          pokemons[row][currentCol] = pokemons[row][currentCol - 1];
          pokemons[row][currentCol - 1] = 0;
        }
      }
    }
  }

  return pokemons;
};

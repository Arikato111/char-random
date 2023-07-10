export type charRandomConfig = {
  count?: number;
  allowNumber?: boolean;
  allowLowerCase?: boolean;
};
function charRandom(config?: charRandomConfig): string {
  let abcOrigin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let textAll: string[] = abcOrigin.split("");

  // if allow lowerCase
  if (config?.allowLowerCase) {
    let textLower: string[] = abcOrigin.toLowerCase().split("");
    textAll.push(...textLower);
  }
  if (config?.allowNumber) {
    textAll.push(...["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  }
  let char: string = "";
  let limitCount: number = config?.count ?? 10;
  for (let i = 0; i < limitCount; i++) {
    let randomLen = Math.floor(Math.random() * textAll.length);
    char = char + textAll[randomLen];
  }
  return char;
}

export default charRandom;

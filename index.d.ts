export default function charRandom(count: number = 1, useNumber:boolean = false, uppercase: boolean = false): string {
  let textAll: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  if(!uppercase) {

    textAll.push(...[
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ]);
  }
    if (useNumber) {
textAll.push(...[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
}
  let char: string = "";
  for (let i = 0; i < count; i++) {
    let randomLen = Math.floor(Math.random() * textAll.length);
    char = char + textAll[randomLen];
  }
  return char;
}

export function splitArrayToChunks<Type>(
  inputArray: Type[],
  chunkSize: number
): Array<Array<Type>> {
  const array = [];
  for (let i = 0; i < inputArray.length; i += chunkSize)
    array.push(inputArray.slice(i, i + chunkSize));
  return array;
}

export function getCurrentDate(): string {
  return new Date(Date.now()).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

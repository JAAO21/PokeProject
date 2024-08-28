export const filterDataByName = (dataArray: any, keyword: string) => {
  return dataArray.filter((data: any) => data.name === keyword);
};

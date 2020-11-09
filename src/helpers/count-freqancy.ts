export const GetValueCounts = (array: string[]) => {
  
   const result = array.reduce(function (acc: any, curr: string) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
  
    return acc;
  }, {});

  return result;

}
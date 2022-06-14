const products1: Array<string> = ["bike", "shirt"];
const products2: string[] = [];

const products3: Array<number> = [1, 3];
const products4: number[] = [];

const products5: Array<boolean> = [true, false];
const products6: boolean[] = [];

const products7: Array<any> = [{}, ""];
const products8: any[] = [];

const products9: (string | number | null)[] = ["", "", 1, null];
const products10: Array<string | number | null> = ["", "", 1, null];


const foo = <T extends object>(obj: T) => {
  return {...obj, id: 'id'};
}

const f = foo({
  name: 'rahim'
});
console.log(f);





let items: [number, string, boolean] = [10, '', true];


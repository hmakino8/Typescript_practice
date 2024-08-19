// easy
{
  let isShow: boolean = true;
  let isEditing: boolean = false;
}
{
  let count: number = 15;
  let num: number = 2;
  let float: number = 2.33;
}
{
  let firstName: string = 'tarou';
  let lastName: string = "Yamada";
  let englishName: string = `mad`;
}
{
  let isShow: boolean = true;
  let count: number = 15;
  let firstName: string = 'tarou';
}
{
  let x: null = null;
}
{
  let y: undefined = undefined;
}
{
  let x: any = "hello";
  x = 1;
  x = undefined;
  x = [];
}
{
  let x: never;
}
{
  type A = string | number;
  let tmp: A = 1;
  type Count = number;
  let count: Count = 15;
  type FirstName = string;
  let firstName: FirstName = 'tarou';
  type LastName = string;
  let lastName: LastName = "suzuki";
}
{
  let isShow = true;
  let count = 15;
  let firstName = 'tarou';

  isShow = false;
  count = 8;
  firstName = 'suzuki';
}
{
  type Person = { name: string, age: number};
  const taro: Person = { name: 'tarou', age: 30 };
  const jiro: Person = { name: 'jiro', age: 22 };
}
{
  type Person = { name: string, age: number, email: undefined | string };
  const taro: Person = {
    name: 'tarou',
    age: 30,
    email: undefined
  }
  const jiro: Person = {
    name: 'jiro',
    age: 22,
    email: "jiro@code-lesson.com"
  }
}
{
  type Person = { name: string, age: number, email?: string};
  const taro: Person = { name: 'tarou', age: 30 };
  const jiro: Person = { name: 'jiro', age: 22, email: "jiro@code-lesson.com" }
}
{
  type BasicInfo = {
    name: string,
    age: number
  }
  type AdditionalInfo = {
    email: string;
  }
  const person: BasicInfo & AdditionalInfo = {
    name: 'taro',
    age: 20,
    email: 'taro@taro.com'
  }
}
{
  type Fruits = [string, string, string]; // string[]
  const fruits: Fruits = ["apple", "orange", "lemon"];
  type Nums = number[] //[number, number, number];
  const nums: Nums = [1, 2, 3];
}
{
  const main = (num: number) => {
    return num + num;
  }
  console.log(main(15));
}
{
  const func1 = (str: string): string => "hello" + str;
  const func2 = (str: string): number => ["hello"].push(str); //pushの返り値は配列の長さ
  const func3 = (str: string): void => console.log("hello" + str);
}
{
  const func1: (num: number) => number = (num) => num * 2;
  const func2: (num: number) => string = (num) => num + "px";
}
{
  type Hello = "hello";
  const hello: Hello = "hello";
}
{
  type NumberOrString = number | string;
  const num: NumberOrString = 1;
  const str: NumberOrString = "1";
}

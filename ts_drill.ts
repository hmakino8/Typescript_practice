//easy
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
{
  type Fruit = "apple" | "orange" | "lemon";

  const fruit1: Fruit = "apple";
  const fruit2: Fruit = "orange";
  const fruit3: Fruit = "lemon";
}
{
  type Person = {
    readonly name: string,
    readonly age: number,
    readonly email: string
  };
}
{
  // 型アサーション
  const LANGUAGE = {
    ENGLISH: "ENGLISH" as const,
    JAPANESE: "JAPANESE" as const,
    CHINESE: "CHINESE" as const
  };

  console.log(LANGUAGE.JAPANESE);
}
{
  let isShow = true;
  let count = 15;
  const firstName = 'tarou';
  const sports = ["tennis", "soccer"];
  const user = {id: 1, name: "jiro"};

  type IsShow = typeof isShow;
  type Count = typeof count;
  type FirstName = typeof firstName;
  type User = typeof user;
}
{
  const func = (x: unknown) => {
    const str: string = x as string;
    const num: number = x as number;
    const bool: boolean = x as boolean;
  };
}
{
  // nullを含まない型をアサーション
  const func1 = (x: string | null) => {
    const str: string = x!;
  }
}
{
  // 型ガード(nullでない場合のみメソッドを実行する)
  const func1 = (x: string | null) => {
    console.log(x?.length);
  };
  const func2 = (x: number | undefined) => {
    console.log(x?.toString());
  };
}
{
  type Person = {
    name?: string,
    age?: number,
    email?: string
  };

  // オブジェクト型のプロパティを全て必須にする。
  const person: Required<Person> = {
    name: "hoge",
    age: 30,
    email: "hoge@fuga.com"
  };

  // Person型からnameプロパティを抜き出した新しい型を宣言
  type Name = Pick<Person, "name">;

  // Person型からnameプロパティを除いた新しい方を宣言
  type NewPerson = Omit<Person, "name">;

  // Person型の全てのプロパティをReadonlyを使って変更不可にする
  type PersonReadonly = Readonly<Person>;
}
{
  // 共通の型を抜き出す
  type TypeA = number | string | null;
  type TypeB = number | number[] | null;

  type NewType = Extract<TypeA, TypeB>;
}
{
  // 特定の型を除外する
  type TypeA = number | string | null;

  type NewType = Exclude<TypeA, string>;
}
{ // 関数の引数の型を取得する
  const func = (a: string, b: string) => {
    return a + b;
  }

  type TypeA = Parameters<typeof func>;
}
{
  // 関数の戻り値の型を取得
  const func = () => {
    return {
      name: "taro",
      age: 25,
      email: "taro@example.com"
    }
  }

  type Person = ReturnType<typeof func>;
}

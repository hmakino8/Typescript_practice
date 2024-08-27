// EASY
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

// NORMAL
{
  type Tuple = [number, null, string];
  const nums: Tuple = [1, null, "Hello"];
}
{
  // 引数、戻り値なしのコールバック関数と数値のsecondを引数に持ち、string型を返す関数の型宣言
  type Func = {
    (func: ()=>void, second: number): string;
  };
}
{ // プロミスの戻り値の型
  const func = (): Promise<boolean>  => {
    return new Promise((resolve) => {
      resolve(true)
    });
  }
}
{ // User型のオブジェクトと複数のPost型のオブジェクトを持つUserWithPosts型を定義する
  type User = {
    id: string,
    name: string,
  };

  type Post = {
    id: string,
    title: string,
    content: string,
  };

  type UserWithPosts = User & { posts: Post[] };

  const userWithPosts: UserWithPosts = {
    id: "aaa",
    name: "bob",
    posts: [
      {
        id: "aaa",
        title: "hoge",
        content: "fuga"
      },
      {
        id: "bbb",
        title: "hoge2",
        content: "fuga2"
      }
    ]
  };
}
{
  type Post = {
    id: string,
    title: string,
    index: number
  };

  type Comments = {
    id: string,
    title: string,
    content: string,
    wordCount: number
  };

  type PostWithComments = Post & { comments: Comments[] };

  const postWithComments: PostWithComments = {
    id: "aaa",
    title: "testPost",
    index: 1,
    comments: [
      {
        id: "aaa",
        title: "hoge",
        content: "fuga",
        wordCount: 4
      },
      {
        id: "bbb",
        title: "hoge2",
        content: "fuga2",
        wordCount: 4
      }
    ]
  };
}
{ /*
     boolean型に読み取り専用を適用する

     Readonly<T>は配列やオブジェクトなど、変更可能な方に対して意味を持つ。
     イミュータブルなプリミティブ型には実質的に効果がない。
  */
  type TodoInput = {
    id: string,
    name: string,
    dueDate?: string,
    isDone: Readonly<boolean>
  };
}
{ // userオブジェクトのキーをユニオン型に変換する
  const user = {id: 3, name: "bob"};
  type UserKey = keyof typeof user; // "id" | "bob"
}
{
  const user = {id: 3, name: "bob"} as const;
  // {readonly id: 3, readonly name: "bob"}
  type UserKey = keyof typeof user; // "id" | "name"
  // typeof user -> {readonly id: 3, readonly name: "bob"}
  // keyof typeof user -> "id" | "name"
  type UserValue = typeof user[UserKey]; // "bob" | 3
  // typeof user[UserKey] -> UserKey型に対応するuserオブジェクトのプロパティの値
}
{
  const fruits = ["apple", "orange", "lemon"] as const;
  type FruitsType = typeof fruits[number]; // number -> インデックス型アクセス演算子
  // "apple" | "orange" | "lemon"
}
{
  type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

  const printLearningLanguage = (lang: CurriculumLanguage) => {
  switch (lang) {
      case "JavaScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "TypeScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "React":
        console.log(`I'm learnig ${lang}`);
        break;
      case "Go":
        console.log(`I'm learnig ${lang}`);
        break;
      default:
        const neverValue: never = lang;
        throw new Error(`${lang}はカリキュラムにない言語です`);
    }
  }
  //printLearningLanguage("C" as CurriculumLanguage);
}
{
  type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

  class ExhaustiveError extends Error {
    constructor(value: never, message = `${value}はカリキュラムにない言語です`) {
      super(message);
    }
  }

  const printLearningLanguage = (lang: CurriculumLanguage) => {
  switch (lang) {
      case "JavaScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "TypeScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "React":
        console.log(`I'm learnig ${lang}`);
        break;
      case "Go":
        console.log(`I'm learnig ${lang}`);
        break;
      default:
         throw new ExhaustiveError(lang);
    }
  }
  //printLearningLanguage("C" as CurriculumLanguage);
}
{
  const func1 = (x: string | number) => {
    if (typeof x === "string") {
      console.log(x.length);
    } else {
      console.log(x.toString);
    }
  };

  const func2 = (x: number | number[]) => {
    console.log(x.toString());
    if (typeof x === "number") {
      console.log(x.toString());
    } else {
      console.log(x.map((x) => x*2));
    }
  };
}
{ // プロパティが存在するか確認して型ガード
  type Person = {
    name: string,
    age: number,
    email?: string
  };

  const getEmail = (person: Person): string | undefined => {
    if ("email" in person)
    return person.email;
  };
}
{
  type Success = { isSuccess: true, message: string};
  type Failure = { isSuccess: false, error: string};

  const res = ( res: Success | Failure ) => {
    if (res.isSuccess) {
      console.log(res.message);
    } else {
      console.error(res.error);
    };
  };
}
{
  const func = async() => {
    try {
      await fetch("http://a.com");
    } catch (error) {
      if (typeof error === "object") {
        console.error(error);
      };
    };
  };
}
{ // オブジェクトを指定して型ガード
  const func = async() => {
    try {
      await fetch("http://a.com");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      };
    };
  };
}
{ /*
    typeofはプリミティブ型に対して使用されるのに対し、
    instanceofはオブジェクト型が特定のクラスまたはコンストラクタ関数によって
    作成されたかどうかを判定する。
  */
  class HttpError extends Error {
    status?: number = 404; // エラーコードに関連しないエラーもあるのでオプショナルにする
  };

  const func = async() => {
    try{
      await fetch("http://a.com")
    } catch(error) {
      if (error instanceof HttpError && error.status === 404) {
          console.log(error.status);
        };
    };
  }
}
{ // 型ガード(クラスが特定のクラスによって作成されたか&クラスのメンバが存在するかを確認)
  class HttpError extends Error {
    status?: number;
  }

  const func = async() => {
    try {
      await fetch("http://a.com")
    } catch (error) {
      if (error instanceof HttpError && "status" in error) {
        console.error(error.status);
      }
    }
  }
}
{
  const getString = (x: unknown): x is string => {
    return typeof x === "string";
  }

  const func = (x: unknown): string => {
    if (getString(x)) {
      return x
    } else {
      return "";
    }
  }
}
{
  type Person = {
    name: string,
    age: number,
    email: string
  };

  type NewPersonProps = Pick<Person, "name" | "age">; // 特定のプロパティをピックアップ
  type NewPersonProps2 = Omit<Person, "name" | "email">; // 特定のプロパティを除外
  type NewPersonProps3 = Readonly<Pick<Person, "name" | "email">>; // 特定のプロパティを変更不可にする
  type NewPersonProps4 = Partial<Pick<Person, "name" | "age">>; // 特定のプロパティをオプショナルにする
  type NewPersonProps5 = Readonly<Omit<Person, "email">>; // 特定のプロパティを除去し、変更不可にする
}
{
  type Person = {
    firstName: string,
    lastName: string,
    age: string,
    email: string,
    address: string
  };
  // type Person = Record<"firstName" | "lastName" | "age" | "email" | "address", string>;

  type PersonName = Pick<Person, "firstName" | "lastName">;
  type PersonInfo = Omit<Person, keyof PersonName>;
}
{ // インデックス型を定義
  let stringNumberObject: { [age: string]: number };
  let stringNumberObject2: Record<string, number>;
}
{ // in演算子のマッピング型
  type Keys = "javascript" | "python";
  type Obj = {[key in Keys]: string}; // keyは実際の変数ではなく、型レベルで使用される抽象的な名前。
}
{
  type Data<T> = {
    id: number,
    payload: T,
  };

  const data1: Data<number> = {
    id: 1,
    payload: 2
  };

  const data2: Data<string> = {
    id: 1,
    payload: "hoge"
  };

  const data3: Data<{name: string}> = {
    id: 1,
    payload: {
      name: "bob"
    }
  };
}
{
  type Data<T> = {id: number, message: T};
}
{
  function func<T>(x: T): T {
    return x;
  };
}
{ // T型にPerson型を追加
  type Person = {
    name: string,
    age: number,
  }

  const getAge = <T extends Person>(person: T): number => {
    return person.age;
  };
}

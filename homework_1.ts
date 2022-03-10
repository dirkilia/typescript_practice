// Task 1
const concat = (arg1: string, arg2: string):string => {
    return arg1 + arg2
}

concat('Hello ', 'World')

//Task 2
interface Hometask {
    howIDoIt: string,
    simeArray: (string | number)[],
    withData: {
        howIDoIt: string,
        simeArray: (string | number)[]
    }[]
}

const myHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Task 3
interface MyArray<T> {
	[N: number]: T;

    reduce<U>(fn: (el: T) => U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4]

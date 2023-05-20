const SIZE = {
	SMALL: 'S',
	MEDIUM: 'M',
	LARGE: 'L'
} as const

type Person = {
	name: string,
	price: number
}
type PersonKey = keyof Person;
type BookKey = "title" | 'prince' | 'rating'
console.log(PersonKey)

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
	console.log(size)
}

sizeCheck('SMALL')
sizeCheck('LARGE')

// value
type ValueOfSize = typeof SIZE[keyof typeof SIZE]

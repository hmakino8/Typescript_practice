const SIZE = {
  SMALL: 'S',
  MEDIUM: 'M',
  LARGE: 'L'
} as const

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
  console.log(size)
}

sizeCheck('SMALL')
sizeCheck('LARGE')

// value
type ValueOfSize = typeof SIZE[keyof typeof SIZE]

const sizeCheck2 = (size: ValueOfSize) => {
  console.log(size)
}

sizeCheck2('S')

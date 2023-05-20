type ObjectInArray1 = {
	id: number,
	name: string,
	hobby: string
}[]

type ObjectInArray2 = {
	[key: string] : string | number
}[]

const members: ObjectInArray1 = [
	{
		id: 1,
		name: 'hiroaki',
		hobby: 'soccer'
	}, {
		id: 2,
		name: 'kaneaki',
		hobby: 'aikido'
	}, {
		id: 3,
		name: 'yasuko',
		hobby: 'swimming'
	}
]

const members2: ObjectInArray2 = [
	{
		id: 1,
		name: 'hiroaki',
		hobby: 'soccer'
	}, {
		id: 2,
		name: 'kaneaki',
		hobby: 'aikido'
	}, {
		id: 3,
		name: 'yasuko',
		hobby: 'swimming'
	}
]

for(const member of members)
{
	console.log(`id: ${member.id}, name: ${member.name}, hobby: ${member.hobby}`)
}

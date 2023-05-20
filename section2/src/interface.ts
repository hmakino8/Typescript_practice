interface MemberInterface {
	name: string,
	age: number
}

const memberI: MemberInterface = {
	name: 'hmakino',
	age: 31
}

interface HobbyInterface {
	hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
	name: 'hmakino',
	age: 31,
	hobby: 'soccer'
}

console.log(memberInfoI.name)

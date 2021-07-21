/**
@author screwboss
@title  Sin Zoo
@desc   Zebra swag
*/

const pattern = [
	'    _▒▓█▓▒_    ',
]

const weights = [100, 700,]

const { floor, sin } = Math

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0004
	const x = coord.x - context.cols / 2
	const y = coord.y - context.rows / 2
	const o = sin(x * y * 0.0017 + y * 0.0033 + t ) * 30
	const i = floor(Math.abs(x + y + o))
	const c = (floor(coord.x * 0.09) + floor(coord.y * 0.009)) % 1
	
	
	return {
		char : pattern[c][i % pattern[c].length],
		color : 'black', //col[c],
		backgroundColor : 'white',
		fontWeight : weights[c],
	}
}






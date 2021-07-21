/**
@author Screwboss
@title  Scanner
@desc   Draw donuts with SDF
*/

import { sdCircle } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, rot } from '/src/modules/vec2.js'
import { map, fract, smoothstep } from '/src/modules/num.js'

const density = '▀▄▐'

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0006
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

	let st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}

	st = rot(st, -1 * Math.sin(0.5 * t) * length(st) * -0)
	st = rot(st, t * 0.3)

	const s = map(Math.sin(t), -1, 1, 1.5, 0.8)
	const pt = {
		x : fract(st.x * s) - 0.5,
		y : fract(st.x * s) - 0.5
	}

	const r = 0.5 * Math.sin(0.5 * t + st.x * 1) + 0.4

	const d = sdCircle(pt, r)

	const width = 0.05 + 0.3 * Math.sin(t);

	const k = smoothstep(width, width + 0.2, Math.sin(0.5 * d + t));
	const c = (11.0 - Math.exp(-100 * Math.abs(d))) * k

	const index = Math.floor(c * (density.length-1))

	return {
		char  : density[index],
		color : k == 0 ? '#6666ff' : ' ',

		backgroundColor : coord.y % 2 ? ' ' : 'black'
			
	}
}
export const settings = {
	
	backgroundColor : 'black',
	fontSize : '700'
	
	
}

//?video night


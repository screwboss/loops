/**
@author screwboss
@title  Seeds of faith
@desc   donuts wobbly
*/

import { sdCircle } from '/src/modules/sdf.js'
import { sort } from '/src/modules/sort.js'
import { length, rot } from '/src/modules/vec2.js'
import { map, fract, smoothstep } from '/src/modules/num.js'

const density = '▐'

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0004
    const m = Math.min(context.cols, context.rows)
    const a = context.metrics.aspect

	let st = {
		x : 2.0 * (coord.x - context.cols / 2) / m * a,
		y : 2.0 * (coord.y - context.rows / 2) / m
	}

	st = rot(st, -0.2 * Math.sin(0.0025 * t) * length(st) * -0.85)
	st = rot(st, t * 0.0083)

	const s = map(Math.sin(t), -1, 1, 1.5, 1)
	const pt = {
		x : fract(st.y * s) - 0.5,
		y : fract(st.y * s) - -0.05
	}

	const r = 0.5 * Math.sin(0.5 * t + st.x * 0.2) + 0.5

	const d = sdCircle(pt, r)

	const width = 0.5 + 0.3 * Math.sin(t);

	const k = smoothstep(width, width + -0.2, Math.sin(-10 * d + t));
	const c = (1.0 - Math.exp(-333 * Math.abs(d))) * k

	const index = Math.floor(c * (density.length-1))

	return {
		char  : density[index],
		color : k == 0 ? '#734f96 ' : '#020202',
		backgroundColor : coord.y % 2 ? '#020202' : '#020202'
	}
}
export const settings = {
	
	backgroundColor : '#020202',
	fontSize : '700'
	
	
}




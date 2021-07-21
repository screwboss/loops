/**
@author screwboss
@title  Moiré Pattern Number Talk
@desc   Click or tap to toggle mode
*/

import { vec2, dist, mulN } from '/src/modules/vec2.js'
import { map } from '/src/modules/num.js'

export const settings = { fps : 60, color : '#0048ba', backgroundColor: 'black' }

// Shorthands
const { sin, cos, atan2, floor, min } = Math

// Change the mouse pointer to 'pointer'
export const boot = (context) => context.settings.element.style.cursor = 'pointer'

// Cycle modes with click or tap
export const pointerDown = () => mode = ++mode % 3
let mode = 0

const density = ' 7    ░▌7▏|    5 3'

export function main(coord, context, cursor) {
	const t = context.time * 0.0001
	const m = min(context.cols, context.rows)
	const st = {
		x : 1.0 * (coord.x - context.cols / 1) / m,
		y : 1.0 * (coord.y - context.rows / 1) / m,
	}
	st.x *= context.metrics.aspect

	const centerB = mulN(vec2(cos(t*3), sin(t*7)), 0.5)
	const centerA = mulN(vec2(cos(t*5), sin(t*4)), 0.5)

	// Set A or B to zero to see only one of the two frequencies
	const A = mode % 2 == 0 ? atan2(centerA.y-st.y, centerA.x-st.x) : dist(st, centerA)
	const B = mode     == 0 ? atan2(centerB.y-st.y, centerB.x-st.x) : dist(st, centerB)

	const aMod = 14
	const bMod = 2

	const a = cos(A * aMod)
	const b = cos(B * bMod)

	const i = ((a * b) + 1) / 2 // mult
	//const i = ((a + b) + 2) / 4 // sum
	const idx = floor(i * density.length)
	return density[idx]
}

// Returns the rounded vector (component-wise)
export function round(a, out) {
	out = out || vec2(1, 0)
	out.x = Math.round(a.x)
	out.y = Math.round(a.y)
	return out
}



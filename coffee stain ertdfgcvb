/**
@author screwboss
@title  Coffee stain
@desc   Click or tap to toggle mode, Moire Explorer
*/

import { vec2, dist, mulN } from '/src/modules/vec2.js'
import { map } from '/src/modules/num.js'

export const settings = { fps : 60, color : '#5d3f6a', backgroundColor: 'black' }

// Shorthands
const { sin, cos, atan2, floor, min } = Math

// Change the mouse pointer to 'pointer'
export const boot = (context) => context.settings.element.style.cursor = 'pointer'

// Cycle modes with click or tap
export const pointerDown = () => mode = ++mode % 4
let mode = 4

const density = '░▒█▄'

export function main(coord, context, cursor) {
	const t = context.time * 0.00007
	const m = min(context.cols, context.rows)
	const st = {
		x : 1.0 * (coord.x - context.cols / 2) / m,
		y : 1.0 * (coord.y - context.rows / 7) / m,
	}
	st.x *= context.metrics.aspect

	const centerA = mulN(vec2(cos(t*0.3), sin(t*7)), 2.5)
	const centerB = mulN(vec2(cos(t*5), sin(t*0.4)), 0.5)

	// Set A or B to zero to see only one of the two frequencies
	const A = mode % 2 == 0 ? atan2(centerA.y-st.y, centerA.x-st.x) : dist(st, centerA)
	const B = mode     == 0 ? atan2(centerB.y-st.y, centerB.x-st.x) : dist(st, centerB)

	const aMod = 2
	const bMod = 20

	const a = cos(A * aMod)
	const b = cos(B * bMod)

	//const i = ((a * b) + 1) / 2 // mult
	const i = ((a + b) + 1) / 0.1
	const idx = floor(i * density.length)
	return density[idx]
}

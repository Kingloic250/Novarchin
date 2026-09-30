/**
 * Simplified Africa outline (lon, lat) projected equirectangularly into a
 * 700 × 740 viewBox, then filled with a dot grid. Computed once at import.
 */

type LonLat = [number, number]

const mainland: LonLat[] = [
  [-5.9, 35.8], [-1, 35.1], [3, 36.8], [10.2, 37.2], [11, 35.2], [10.1, 33.8], [11.5, 33.1], [15.2, 32.3],
  [16.6, 31.2], [19.9, 30.8], [20.1, 32.1], [23, 32.6], [25.2, 31.6], [29.9, 31.2], [32.3, 31.3], [32.5, 29.9],
  [33.9, 27.2], [35.5, 23.9], [37.2, 19.6], [38.5, 18], [39.5, 15.6], [41.7, 13.4], [43.1, 11.6], [44.5, 10.4],
  [51.2, 11.8], [51, 10.4], [48.9, 5.3], [45.3, 2], [42.5, -0.4], [40.2, -2.8], [39.7, -4.1], [39.3, -6.8],
  [39.7, -10.2], [40.5, -14.5], [36.9, -17.9], [34.9, -19.8], [35.5, -23.9], [32.6, -25.9], [32.1, -28.8],
  [31, -29.9], [27.9, -33], [25.6, -34], [22.1, -34.2], [20, -34.8], [18.4, -34.3], [17.9, -33], [16.5, -28.6],
  [15.2, -26.6], [14.5, -22.9], [11.8, -17.3], [13.4, -12.6], [13.2, -8.8], [12.3, -6.1], [11.8, -4.8],
  [8.8, -0.7], [9.4, 0.4], [9.7, 3.9], [8.4, 4.6], [6, 4.3], [3.4, 6.4], [1.2, 6.1], [-2, 4.7], [-4, 5.3],
  [-7.5, 4.4], [-10.8, 6.3], [-13.2, 8.5], [-15.6, 11.9], [-16.8, 13.4], [-17.5, 14.7], [-16.5, 16], [-16, 18.1],
  [-17.1, 20.9], [-16.3, 23.7], [-14.5, 26.1], [-13.2, 27.7], [-9.6, 30.4], [-9.8, 31.5], [-7.6, 33.6],
  [-6.8, 34.1],
]

const madagascar: LonLat[] = [
  [49.3, -12], [50.4, -15.5], [49.8, -17], [48.6, -20.5], [47.1, -24.9], [45.2, -25.6], [43.7, -23.4],
  [43.3, -21.8], [44.4, -20], [44, -17.3], [46.3, -15.8], [48, -13.6],
]

export const VIEW_W = 700
export const VIEW_H = 740

export const project = ([lon, lat]: LonLat): [number, number] => [(lon + 18) * 10, (38 - lat) * 10]

function inside([x, y]: LonLat, poly: LonLat[]) {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

const STEP = 1.3

function buildDots() {
  let d = ''
  for (let lat = 37; lat >= -35; lat -= STEP) {
    for (let lon = -18; lon <= 52; lon += STEP) {
      const p: LonLat = [lon, lat]
      if (inside(p, mainland) || inside(p, madagascar)) {
        const [x, y] = project(p)
        d += `M${x.toFixed(1)} ${y.toFixed(1)}h0`
      }
    }
  }
  return d
}

export const dotsPath = buildDots()

export interface City {
  id: string
  city: string
  country: string
  lonlat: LonLat
}

export const hub: City = { id: 'rw', city: 'Kigali', country: 'Rwanda', lonlat: [30.06, -1.95] }

export const cities: City[] = [
  { id: 'ke', city: 'Nairobi', country: 'Kenya', lonlat: [36.82, -1.29] },
  { id: 'ug', city: 'Kampala', country: 'Uganda', lonlat: [32.58, 0.35] },
  { id: 'tz', city: 'Dar es Salaam', country: 'Tanzania', lonlat: [39.28, -6.79] },
  { id: 'bi', city: 'Bujumbura', country: 'Burundi', lonlat: [29.36, -3.38] },
  { id: 'cd', city: 'Kinshasa', country: 'DR Congo', lonlat: [15.27, -4.44] },
  { id: 'ss', city: 'Juba', country: 'South Sudan', lonlat: [31.58, 4.85] },
  { id: 'so', city: 'Mogadishu', country: 'Somalia', lonlat: [45.34, 2.04] },
]

/** Curved route from the hub, bowed "upwards" like a flight path. */
export function routePath(to: City) {
  const [x1, y1] = project(hub.lonlat)
  const [x2, y2] = project(to.lonlat)
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dist = Math.hypot(x2 - x1, y2 - y1)
  const lift = Math.max(18, dist * 0.35)
  return `M${x1} ${y1}Q${mx} ${my - lift} ${x2} ${y2}`
}

import cloneObject from "./cloneObject"

function findEqual(a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  // this next bit isn't really necessary but hey...
  const aClone = cloneObject(a)
  const bClone = cloneObject(b)

  aClone.sort((a, b) => a - b)
  bClone.sort((a, b) => a - b)

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

export default findEqual

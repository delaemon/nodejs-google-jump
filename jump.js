var bignum = require('bignum');

function Hash(key, numBuckets) {

    var b = bignum(-1)
    var j = bignum(0)

    var nb = bignum(numBuckets)
    var k = bignum(key)
    var m = bignum('2862933555777941757')
    var ab = new ArrayBuffer(8)
    var f64a = new Float64Array(ab)
    var ui32a = new Uint32Array(ab)
    while (nb.gt(j)) {
        b = j
        k = k.mul(m).add(1)
        t1 = bignum(1).shiftLeft(31).toString()
        t2 = k.shiftRight(33).add(1).toString()
        ui32a[0] = parseInt(t1.slice(8, 16))
        ui32a[1] = parseInt(t1.slice(0, 8))
        t1 = f64a[0]
        ui32a[0] = parseInt(t2.slice(8, 16))
        ui32a[1] = parseInt(t2.slice(0, 8))
        t2 = f64a[0]
        j =  b.add(1).mul(t1/t2)
    }

    return b
}

console.log(Hash(1,7))

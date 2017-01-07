var bignum = require('bignum');

function Hash(key, numBuckets) {

    var b = bignum(-1)
    var j = bignum(0)

    var nb = bignum(numBuckets)
    var k = bignum(key)
    var m = bignum('2862933555777941757')
    while (nb.gt(j)) {
        b = bignum(j)
        k = k.mul(m).add(1)
        bb = b.add(1).toNumber().toFixed(8)
        t1 = bignum(1).shiftLeft(31).toNumber().toFixed(9)
        t2 = k.shiftRight(33).toNumber().toFixed(8)
        j = bignum(bb * (t1/t2))
        break // fixme
    }

    return b
}

console.log(Hash(1,7))

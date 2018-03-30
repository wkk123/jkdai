var arr = [
    [true, true, false, false, true],
    [true, false, true, false, false, ],
    [true, false, true, false, false, ],
    [true, false, true, false, false, ],
    [true, false, true, false, false, ]
]
var result = arr.forEach(function(e, index) {
    console.log(index, e)
})
const add = (a, b, callBack) => {
    setTimeout(() => callBack(a + b), 2000)
}
add(1, 4, (sum) => console.log(sum))
let hour = 24
let minute = 60
let sec = 60
let day = 30
let year = 365

console.log("количество секунд в сутках:", hour*minute*sec)
console.log("секунд в 30 сутках:", hour*30*minute*sec)
console.log("количество секнуд в году:", hour*365*minute*sec)
console.log("количество минут в сутках:", hour*minute)
console.log("количество минту в году:", minute*hour*year )

let bit = 1 // так понял бит тоже надо было прописать, чтобы был полный список системы едениц  ¯ \ _ (ツ) _ / ¯
let bytes = 8
let kilobytes = 1024
let megabytes = 1024
let gigabytes = 1024
let terabytes = 1024

console.log("байт в мегабайте:", bytes*kilobytes*megabytes )
console.log("количество байт в гигабайте:", bytes*kilobytes*megabytes*gigabytes)
console.log("количество байт в 10 гигабайтах:", bytes*kilobytes*megabytes*gigabytes*10)
console.log("количество байт в терабайте:", bytes*kilobytes*megabytes*gigabytes*terabytes)
console.log("количество килобайт в терабайте:", kilobytes*megabytes*gigabytes*terabytes)


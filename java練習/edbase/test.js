document.write("Hello World");
tashizan(3, 5);

function tashizan(num1, num2) {
    const result = num1 + num2;
    document.write(result)
}
document.getElementById("second").innerHTML = "書き換えました";
const btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    alert("送信してよろしいですか？");
})
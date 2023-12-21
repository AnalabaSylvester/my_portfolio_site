(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();







// function  addition(num1, num2) {
//     return num1 + num2
// }

// function  sub(num1, num2) {
//     num1 - num2
// }

// function  div(num1, num2) {
//     num1 / num2
// }

// function  mul(num1, num2) {
//     num1 * num2
// }



// let  oOperator = prompt("pick an option. ")

// switch (oOperator) {
//     case 1:
//        alert(addition(34, 34))
//         // result = Number(num1) + Number(num2)
//         // alert(`the result in addition is ${result}`)
//         break;

//     case 2:
//         result = num1 - num2
//         alert(`the result in subtraction is ${result}`)
//         break;

//     case 3:
//         result = num1 / num2
//         alert(`the result in division is ${result}`)
//         break;
//     case 4:
//         result = num1 * num2
//         alert(`the result in multiplication is ${result}`)
//         break;

//         default:
//             console.log("error")
//             break
// }


let btn_left_comparison_of_aspro = document.querySelector(".btn-left-comparison-of-aspro"),
    btn_right_comparison_of_aspro = document.querySelector(".btn-right-comparison-of-aspro")

btn_left_comparison_of_aspro.addEventListener("click", function() {
    btn_right_comparison_of_aspro.style.display = 'block'
    btn_left_comparison_of_aspro.style.display = 'none'
})

btn_right_comparison_of_aspro.addEventListener("click", function() {
    btn_right_comparison_of_aspro.style.display = 'none'
    btn_left_comparison_of_aspro.style.display = 'block'
})
const shipmentOptionEl = document.getElementsByClassName("shipment-type-card")


Array.from(shipmentOptionEl).map(element => {
    // element.addEventListener("hover", () => element.classList.add("selected-option"))

    element.addEventListener("click", () => {
        const radioInputEl = element.querySelector("input[type=radio]")
        const currentValue = radioInputEl.checked;
        radioInputEl.checked = !currentValue
        // console.log(currentValue);
        // if (currentValue.checked) {
        //     element.classList.add("selected-option")
        // }
    })
});


AFRAME.registerComponent("create-buttons",{
    init: function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "Rate us"
        button1.setAttribute("id", "rating-button");
        button1.setAttribute("class", "btn btn-warning");

        var button2 = document.createElement("button");
        button2.innerHTML = "Order now"
        button2.setAttribute("id", "order-button")
        button2.setAttribute("class", "btn btn-success")

        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)

    }
})
function permit(evt) {
    evt.preventDefault();
}

function jparse(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.target.files || evt.dataTransfer.files;

    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function () {
            return function (e) {
                da = JSON.parse(e.target.result);
                document.getElementById("nop").innerText = "Name: " + da.name.given + " " + da.name.family;
                document.getElementById("org").innerText = "Organization: " + da.managingOrganization.display;
                document.getElementById("gen").innerText = "Gender: " + da.gender;
                document.getElementById("num").innerText = "Number of Conditions: " + da.conditions.length;
                for (var j = 0; j < da.conditions.length; j++) {
                    var ul = document.getElementById("lst");
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(da.conditions[j]));
                    li.setAttribute("id", j);
                    ul.appendChild(li);
                }

                $("#drag-area").velocity("slideUp", {duration: 1000 });
                $("#block").velocity("slideUp", {duration: 500 });
                $("#up-btn").velocity("slideUp", {duration: 500 });

                document.getElementById("wrapper-out").style.visibility = 'visible';
                document.getElementById("again-id").style.visibility = 'visible';
            }
        })(f);
        reader.readAsText(f);
    }
}
for (let i = 0; i < 2; i++) {
    let item = document.getElementById("prj_title" + (i+1));
    item.onclick = () => {
        if (document.getElementById("prj" + (i+1)).style.display == "none") {
            document.getElementById("prj" + (i+1)).style.display = "block";
            document.getElementById("prj" + (i+1) + "-2").style.display = "none";
        }else {
            document.getElementById("prj" + (i+1)).style.display = "none";
            document.getElementById("prj" + (i+1) + "-2").style.display = "block";
            // document.getElementById("prj" + (i+1) + "-2").style.height = "100%";
        }

    }

}

// document.getElementById("prj2").style.display = "none";
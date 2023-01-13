var info0 = document.getElementById("rmpInfoNr0");
var info1 = document.getElementById("rmpInfoNr1");
var info2 = document.getElementById("rmpInfoNr2");
var info3 = document.getElementById("rmpInfoNr3");
var info4 = document.getElementById("rmpInfoNr4");
var info5 = document.getElementById("rmpInfoNr5");


function clickCheck(idName){
    var el = document.getElementById(idName);
    var elAbove = document.getElementById(idName).parentNode;
    console.log(elAbove.firstElementChild);

    if (el.style.display === "none"){
        console.log("display is now block");
        el.style.display = "block";
        el.style.borderTopRightRadius = 0;
        el.style.borderTopLeftRadius = 0;

        elAbove.firstElementChild.style.borderBottomRightRadius = 0;
        elAbove.firstElementChild.style.borderBottomLeftRadius = 0;
    }
    else{
        el.style.display = "none";
        el.style.borderTopRightRadius = null;
        el.style.borderTopLeftRadius = null;

        elAbove.firstElementChild.style.borderBottomRightRadius = null;
        elAbove.firstElementChild.style.borderBottomLeftRadius = null;
    }
}

info0.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo0")
}); 
info1.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo1")
}); 
info2.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo2")
}); 
info3.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo3")
}); 
info4.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo4")
}); 
info5.addEventListener('mouseenter', () => { clickCheck("rmpExtraInfo5")
});

info0.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo0")
}); 
info1.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo1")
}); 
info2.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo2")
}); 
info3.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo3")
}); 
info4.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo4")
}); 
info5.addEventListener('mouseleave', () => { clickCheck("rmpExtraInfo5")
});
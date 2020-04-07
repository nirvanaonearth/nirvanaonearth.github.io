function disableSelection(target){
    if (typeof target.onselectstart!="undefined")
        target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect!="undefined")
        target.style.MozUserSelect="none"
    else
        target.onmousedown=function(){return false}
    if(target != undefined && target != null)
        target.style.cursor = "default";
}

disableSelection(document);
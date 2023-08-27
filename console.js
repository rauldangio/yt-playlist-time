(function() {
    let spans = document.getElementsByTagName('span')
    let seconds = 0
    for(let i = 0; i < spans.length; i++){
        if(spans[i].classList.value.split(" ")[1] == "ytd-thumbnail-overlay-time-status-renderer"){
            time = spans[i].innerHTML.split(":")
            try {seconds += Number(time[0].trim())* 60+ Number(time[1].trim())}
            catch(error){continue}
        }        
    }
    let hour = seconds/3600
    let minutes = (hour - parseInt(hour)) * 60
    seconds = (minutes - parseInt(minutes)) * 60
    
    console.log(`Time:\nhour: ${parseInt(hour)}\nminutes: ${parseInt(minutes)} \nseconds: ${parseInt(seconds)}`)
})();
const progressBar = require("progress");

const bar = new progressBar("downloading [:bar], :rate/bps, :percent, :etas,", {
    total:20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 200)
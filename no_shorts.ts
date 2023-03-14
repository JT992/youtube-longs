let href = window.location.href.split("/");
if (href[0] == "https:" && href[1] == "" && href[2] == "www.youtube.com" && href[3] == "shorts") {
    window.location.href = `https://www.youtube.com/watch?v=${href[4]}`
}

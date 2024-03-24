    function downloadString(text, fileType, fileName) {
        var blob = new Blob([text], { type: fileType })
        var a = document.createElement('a')
        a.download = fileName
        a.href = URL.createObjectURL(blob)
        a.dataset.downloadurl = [fileType, a.download, a.href].join(':')
        a.style.display = "none"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500)
    }
    let x = document.getElementsByTagName('body')[0]
    let h = document.getElementsByTagName('head')[0]
    x.removeChild(x.lastChild);
    let html = `<!DOCTYPE html>
<html lang="en">
<head>${h.innerHTML}</head>
<body>${x.innerHTML}</body>
</html>
`
// html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, " ")
console.log(html)
downloadString(html, "text/html", "html.html")
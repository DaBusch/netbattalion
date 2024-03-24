
function generate(data) {
    for ( [i,d] of Object.entries(data)){
        let htm = templates[d.template](d)
        console.log(htm)
        downloadString(htm, "text/html", '/vkjfdshfjk/' + d.name)
    }
}
// function wait(t) {
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{res('kjfdlkasdjf');console.log(t)}, t)
        
//     })
// }
// wait(2000).then((x)=>{console.log(x);return 'AWEEEEEEEEEEEEEEEEEEEE'}).then((y)=>console.log(y))
// let butt = document.getElementsByTagName('button')[0]
// console.log(butt)


function getClick() {
    return new Promise(acc => {
      function handleClick() {
        document.removeEventListener('click', handleClick);
        acc();
      }
      document.addEventListener('click', handleClick);
    });
  }
async function simulate(data, tmp) {
    for ( [i,d] of Object.entries(data)){
        let htm = templates[tmp](d)
        console.log(htm)
        document.getElementsByTagName('body')[0].innerHTML = htm
        console.log('Wait on Click')
        await getClick()
    }
}
function downloadString(text, fileType, fileName) {
    let h = document.getElementsByTagName('head')[0],
    html = `<!DOCTYPE html>
<html lang="en">
<head>${h.innerHTML}</head>
<body>${text}</body>
</html>
`,
    blob = new Blob([html], { type: fileType }),
    a = document.createElement('a')
    document.getElementsByTagName('body')[0].innerHTML = text
    a.download = fileName
    a.href = URL.createObjectURL(blob)
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':')
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500)
}
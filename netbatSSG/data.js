
let data = [
    {
        name: 'index.html',
        template: 'tpl1',
        title:'title',
        content: 'Dies ist der Inhalt'
    },
    {
        
        name: 'eins.html',
        template: 'tpl1',
        title:'title 2',
        content: '<h1>Dies ist der Inhalt 2</h1>'
    },
    {
        name: 'zwei.html',
        template: 'tpl1',
        title:'title 3',
        content: 'Dies ist der Inhalt 3'
    }
]

, templates = {
    tpl1: (d)=>{
        return `
    <div>
        <h1>${d.title}</h1>
        <p>${d.content}</p>
    </div>
`
    }
}
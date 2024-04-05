
let data = [
    {
        name: 'index.html',
        template: 'tpl1',
        head: {
            title: 'Titeeeeel',
            scripts: [],
            links: ['./styles/tpl1.css'],
        },
        title:'Titel',
        content: 'Dies ist der Inhalt'
    },
    {
        
        name: 'eins.html',
        template: 'tpl2',
        head: {
            links: ['./styles/tpl2.css']
        },
        title:'Titel 2',
        content: '<h1>Dies ist der Inhalt 2</h1>',
        scripts: ['https://www.netbattalion.de/site/templates/scripts/nbl-lightbox.min.js'],
        links: ['https://www.netbattalion.de/site/templates/styles/nbl-lightbox.css']
    },
    {
        name: 'zwei.html',
        template: 'tpl3',
        head: {
            links: ['./styles/tpl3.css']
        },
        titel:'Titel 3',
        seiteninhalt: 'Dies ist der Inhalt 3'
    }
]

, templates = {
    tpl1(d){
        return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <p>${d.content}</p>
    </header>
    <nav>
        <h1>${d.title}</h1>
    </nav>
    <main>
        <p>${d.content}</p>
    </main></body>
`
    },
    tpl2(d){
        let h = `        
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <main>    
        <h1>${d.title}</h1>
        <p>${d.content}</p>
        <div class="nb-gallery">
            <div class='w3-card-1'>
                <a rel='g1' href='https://www.netbattalion.de/site/assets/files/1015/architektur.jpg' title='Architekturvisualisierung'>
                    <img src='https://www.netbattalion.de/site/assets/files/1015/architektur.200x200.jpg' title='Architekturvisualisierung' alt='Architekturvisualisierung'>
                </a>
            </div>
            <div class='w3-card-1'>
                <a rel='g1' href='https://www.netbattalion.de/site/assets/files/1015/meinroboter.jpg' title='Spaziergang'>
                    <img src='https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg' title='Spaziergang' alt='Spaziergang'>
                </a>
            </div>
        </div>
    </main>
    <footer>Footer</footer></body>
`
        return h
    },
    tpl3(d){
        return `      
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>${d.titel}</header>
    <nav></nav>
    <main>${d.seiteninhalt}</main>
    <footer></footer></body>
`
    }
}
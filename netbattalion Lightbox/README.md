
Demo here: https://www.netbattalion.de/3d-visualisierung/

Wrap CSS-Class "nb-gallery" around A-IMG-/A-Tag like in this examples:

**

    <section class='nb-gallery'>
        <h2>Gallerie 1</h2>
        <div>
            <a href='/images/image-1' title='Description'>
                <img src='/images/image-1-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
        <div>
            <a href='/images/image-2.jpg' title='Description'>
                <img src='/images/image-2-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
    </section>
        
    <h2>Gallerie 2</h2>
    <div class='nb-gallery'>
        <div>
            <a href='/images/image-3.jpg' title='Description'>
                <img src='/images/image-3-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
        <div>
            <a href='/images/image-4.jpg' title='Description'>
                <img src='/images/image-4-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
    </div>
        
    <div class='nb-gallery'>
        <h2>Gallerie 3</h2>
        <div>
            <a href='/images/image-5.jpg' title='Description'>
                <img src='/images/image-5-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
        <div>
            <a href='/images/image-6.jpg' title='Description'>
                <img src='/images/image-6-thumb.jpg' title='Description' alt='Description'>
            </a>
        </div>
    </div>
    
    
    <script type="text/javascript" src="/path-to-script/nlight2023.min.js"></script>
    <link rel="stylesheet" href="/path-to-style/nlight2023.css">
    **

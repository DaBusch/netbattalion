It works, but is maybe not yet finished.

Directives:
- "data-data" for object of variables and functions
- "data-init" for executing functions on page loaded
- "data-bind" + "data-set" for data binding (use "ref" to set and call bound variable e.g. "ref.variable")

For events use standard-attributes e.g. "onclick", "oninput".

I didn't yet get typechecking on numbers to work.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {margin: 1rem;}
        .red {
            background-color: red;
        }
        .green {
            background-color: green;
        }
    </style>
</head>
<body
    data-data="{
        a:()=>{ return 0 < 1 ? true : false },
        open: false,
        color: 'yellow',
        color2: 'orange',
        func: ( e ) => { e .innerHTML = 'Your clicked me'; console .log ( 'Do other stuff' ) }
    }"

    data-init="{
        doSomethingOnPageLoad: () => document .querySelector ( '#pageLoad' ) .innerHTML = 'This was set on pageload.'
    }"
>

    <div id="pageLoad"></div>

    <div id="bindtoText"
        data-bind="myVar"
        data-set="
            self.innerHTML = ref.myVar
            console.log(ref.myVar)
        "
    ></div>

    <div id="bindToClass"
        data-bind="myVar" class="red"
        data-set="
            self.classList.remove(...self.classList)
            self.classList.add(ref.myVar)
        "

    >green</div>

    <button
        onclick="
            open = !open
            ref.myVar == 'green' ? ref.myVar = 'red' : ref.myVar = 'green'
        "
    >Change Color</button>
    
    <button id="eins" class="red"
        data-bind="bool"
        onclick="
            ref.bool = !ref.bool
            ref.bool ? this.style.backgroundColor = color2 : this.style.backgroundColor = color
            console.log(ref.bool)
            self.innerHTML = ref.bool
        "
    >false</button>
    
    <div id="func"
        onclick="
            func(this)
        "
    >Click Me</div>

    <div>
        <p id="test3"
            data-bind="writtenText"
            data-set="self.innerHTML=ref.writtenText"

        >Updated on input</p>

        <input type="text" placeholder="Writesomething"
            oninput="
                ref.writtenText=this.value
            "
        >
</div>

<div>
    <span id="one" data-bind="numberOne" data-set="self.innerHTML=Number(ref.numberOne)">1</span> + 
    <span id="two" data-bind="numberTwo" data-set="self.innerHTML=Number(ref.numberTwo)">3</span> = 
    <span id="result" data-bind="result" data-set="self.innerHTML=Number(ref.numberOne) +Number( ref.numberTwo)">0</span>
    <br>
    <label for="one">First number</label>
    <input name="one" type="text"
        oninput="
            ref.numberOne=this.value
            ref.result=''
        "
    ><br>
    <label for="two">Second number</label>
    <input name="two" type="text"
        oninput="
            ref.numberTwo=Number(this.value)
            console.log(typeof(Number(this.value)))
            ref.result=''
        "
    >
</div>
        
    <script src="netbattalionJS.js"></script>
</body>
</html>

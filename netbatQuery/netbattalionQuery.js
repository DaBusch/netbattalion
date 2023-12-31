$=(
    (t,i)=>new function(){
        this.d=0,
        this.each=((t,s)=>{for(i in t)s(this);return this}),
        this.html=(t=>!t||t?(this.d.innerHTML=t,this):this.d.innerHTML),
        this.class=((t,s)=>(this.d.classList[t](s),this)),
        this.style=((t,s)=>(this.d.style[t]=s,this)),
        this.event=((t,s,i,e)=>"add"==t?(this.d.addEventListener(s,i,e),this):"remove"==t?(this.d.removeEventListener(s,i,e),this):this),
        this.insert=(t=>(a=document.createElement(t),this.d.appendChild(a),this.d=a,this)),
        this.parent=(()=>(this.d=this.d.parentNode,this)),
        this.attribute=((t,s,i)=>"set"==t?(this.d.setAttribute(s,i),this):"remove"==t?(this.d.removeAttribute(s),this):"get"==t?this.d.getAttribute(s):this),
        
        (() => (x = document.querySelectorAll(t), 1 == x.length ? this.d = x[0] : (() => { for (s of x) this.d = s, i(this) })()))()
    }
)

// $('tag|#id|.class|[data-foo="value"]|...', callback) returns one element or NodeList (NodeList needs Callback-function), 
// .d dom-element
// .each('callback(d)') -> loops throught Data-Object
// .html('innerHTML')
// .class('add|remove', 'class')
// .style('property', 'value')
// .event('add|remove', 'event', 'callback')
// .insert('newChild')
// .parent()
// .attribute('set|get|remove', 'attribute', 'value')
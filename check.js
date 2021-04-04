let fdiv = document.getElementById('first')
let btn = document.getElementById('btn');
btn.onclick=clik;
// let ary=['green','yellow','blue','purpal','brown','pink']
let obj={
    0:'indigo',
    1:'pink',
    2:'green',
    3:'blue',
    4:'yellow',
    5:'brown'

}
let clno = 0;
function clik(){
    // for(let i=0;i<;i++){
    fdiv.style.backgroundColor=obj[clno];
    clno++;
    // }
    if(clno===5){
        clno=0;
    }
    
}
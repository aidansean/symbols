var Greek_symbols = new Array() ;
var maths_symbols = new Array() ;
var other_symbols = new Array() ;
{
Greek_symbols.push('α') ;
Greek_symbols.push('β') ;
Greek_symbols.push('γ') ;
Greek_symbols.push('δ') ;
Greek_symbols.push('ε') ;
Greek_symbols.push('ζ') ;
Greek_symbols.push('η') ;
Greek_symbols.push('θ') ;
Greek_symbols.push('ι') ;
Greek_symbols.push('κ') ;
Greek_symbols.push('λ') ;
Greek_symbols.push('μ') ;
Greek_symbols.push('ν') ;
Greek_symbols.push('ξ') ;
Greek_symbols.push('π') ;
Greek_symbols.push('ρ') ;
Greek_symbols.push('σ') ;
Greek_symbols.push('ς') ;
Greek_symbols.push('τ') ;
Greek_symbols.push('υ') ;
Greek_symbols.push('φ') ;
Greek_symbols.push('χ') ;
Greek_symbols.push('ψ') ;
Greek_symbols.push('ω') ;

Greek_symbols.push('Γ') ;
Greek_symbols.push('Δ') ;
Greek_symbols.push('Ζ') ;
Greek_symbols.push('Θ') ;
Greek_symbols.push('Λ') ;
Greek_symbols.push('Ξ') ;
Greek_symbols.push('Π') ;
Greek_symbols.push('Σ') ;
Greek_symbols.push('Φ') ;
Greek_symbols.push('Χ') ;
Greek_symbols.push('Ψ') ;
Greek_symbols.push('Ω') ;

maths_symbols.push('<') ;
maths_symbols.push('>') ;
maths_symbols.push('≤') ;
maths_symbols.push('≥') ;
maths_symbols.push('±') ;
maths_symbols.push('≠') ;
maths_symbols.push('÷') ;
maths_symbols.push('×') ;
maths_symbols.push('−') ;
maths_symbols.push('∕') ;
maths_symbols.push('⁄') ;
maths_symbols.push('√') ;
maths_symbols.push('∛') ;
maths_symbols.push('∜') ;
maths_symbols.push('∞') ;
maths_symbols.push('ℵ') ;
maths_symbols.push('ƒ') ;
maths_symbols.push('′') ;
maths_symbols.push('″') ;
maths_symbols.push('‴') ;
maths_symbols.push('∴') ;
maths_symbols.push('⋅') ;
maths_symbols.push('¹') ;
maths_symbols.push('²') ;
maths_symbols.push('³') ;
maths_symbols.push('⟨') ;
maths_symbols.push('⟩') ;
maths_symbols.push('⊕') ;
maths_symbols.push('⊗') ;
maths_symbols.push('∫') ;
maths_symbols.push('∂') ;
maths_symbols.push('Δ') ;
maths_symbols.push('∇') ;

maths_symbols.push('∬') ;
maths_symbols.push('∭') ;
maths_symbols.push('⨌') ;
maths_symbols.push('∮') ;
maths_symbols.push('∯') ;
maths_symbols.push('∰') ;
maths_symbols.push('∱') ;
maths_symbols.push('⨑') ;
maths_symbols.push('∲') ;
maths_symbols.push('∳') ;

other_symbols.push('£') ;
other_symbols.push('€') ;

}

var symbols = new Array() ;
symbols.push(Greek_symbols) ;
symbols.push(maths_symbols) ;
symbols.push(other_symbols) ;

var names  = new Array() ;
var titles = new Array() ;
names.push('greek') ; titles.push('Greek alphabet') ;
names.push('maths') ; titles.push('Mathematics'   ) ;
names.push('other') ; titles.push('Other symbols' ) ;

var nCols = 12 ;

function start(){
  window.setTimeout(function() {
  add_symbols() ;
  var clip = new ZeroClipboard.Client() ;
  clip.addEventListener('mousedown',function(){ alert(0) ; clip.setText(Get('input_wide_copy_box').value) ; });
  clip.addEventListener('complete',function(client,text){} ) ;
  clip.glue('copy_button') ;
  
  var clip_big = new ZeroClipboard.Client() ;
  clip_big.addEventListener('mousedown',function() { clip_big.setText(Get('td_copy_box').innerHTML) ; });
  clip_big.addEventListener('complete',function(client,text){} ) ;
  clip_big.glue('table_symbols') ;
  Get('ZeroClipboardMovie_2').onClick = function(){ alert(0) ; } ;
  }, 100);
}

function add_symbols(){
  var tr, td ;
  for(var i=0 ; i<symbols.length ; i++){
    var tbody = document.getElementById('tbody_'+names[i]) ;
    for(var j=0 ; j<symbols[i].length ; j++){
      if(j%nCols==0) tr = document.createElement('tr') ;
      td = document.createElement('td') ;
      td.className = 'td_symbol' ;
      td.id = 'td_'+i+'_'+j
      td.style.zIndex = 99 ;
      td.innerHTML = symbols[i][j] ;
      
      tr.appendChild(td) ;
      
      if(j%nCols==nCols-1){
        tbody.appendChild(tr) ;
        tr = 0 ;
      }
      else if(j==symbols[i].length-1){
        for(var k=1+j%nCols ; k<nCols ; k++){
          td = document.createElement('td') ;
          td.className = 'td_symbol' ;
          td.style.zIndex = 1 ;
          tr.appendChild(td) ;
        }
        tbody.appendChild(tr) ;
      }
    }
    for(var j=0 ; j<symbols[i].length ; j++){
      var td = Get('td_'+i+'_'+j) ;
      td.addEventListener('mouseover',function(event){
        var symbol = event.target.innerHTML ;
        Get('td_copy_box').innerHTML = symbol ;
        var tds = document.getElementsByTagName('td') ;
        for(var i=0 ; i<tds.length ; i++){
          if(tds[i].className!='td_symbol') continue ;
          tds[i].style.zIndex = 99 ;
        }
        event.target.style.zIndex = -2 ;
      } ) ;
      td.addEventListener('mouseout',function(event){} ) ;
      td.addEventListener('mousedown',function(event){
        Get('input_wide_copy_box').value = Get('input_wide_copy_box').value + '' + event.target.innerHTML ;
      } ) ;
    }
  }
}
function clear_box(){ Get('input_wide_copy_box').value = '' ; }
function Get(id){ return document.getElementById(id) ; }

// ====== EDITA AQUÍ ======
const WHATSAPP = "573127858455"; // tu número con código de país, sin + ni espacios
const TALLAS = ["S","M","L","XL"];
const PRODUCTOS = [{"id": "GR-001", "n": "Camiseta Flawed and still worthy", "c": "camiseta"}, {"id": "GR-002", "n": "Camiseta Not luck, just God (roja)", "c": "camiseta"}, {"id": "GR-003", "n": "Gorra Not luck, just God", "c": "gorra"}, {"id": "GR-004", "n": "Camiseta oversize You need Jesus", "c": "camiseta"}, {"id": "GR-005", "n": "Hoodie Forgiven (negro)", "c": "hoodie"}, {"id": "GR-006", "n": "Camiseta Yeshua", "c": "camiseta"}, {"id": "GR-007", "n": "Camiseta You call it luck, I call it blessed", "c": "camiseta"}, {"id": "GR-008", "n": "Hoodie Yahweh", "c": "hoodie"}, {"id": "GR-009", "n": "Hoodie God's got my back", "c": "hoodie"}, {"id": "GR-010", "n": "Camiseta Jesus is king", "c": "camiseta"}, {"id": "GR-011", "n": "Camiseta Jesus saves", "c": "camiseta"}, {"id": "GR-012", "n": "Gorra Jesus / Yeshua", "c": "gorra"}, {"id": "GR-013", "n": "Camiseta Walk by faith", "c": "camiseta"}, {"id": "GR-014", "n": "Camiseta Jesus loves you", "c": "camiseta"}, {"id": "GR-015", "n": "Camiseta Team Jesus", "c": "camiseta"}, {"id": "GR-016", "n": "Camiseta Faith over fears", "c": "camiseta"}, {"id": "GR-017", "n": "Camiseta Saved by Grace", "c": "camiseta"}, {"id": "GR-018", "n": "Camiseta Just God (blanca)", "c": "camiseta"}, {"id": "GR-019", "n": "Camiseta Pray Trust Repeat", "c": "camiseta"}, {"id": "GR-020", "n": "Hoodie God has a plan for you", "c": "hoodie"}, {"id": "GR-021", "n": "Camiseta The king is coming", "c": "camiseta"}, {"id": "GR-022", "n": "Hoodie Jesus saves", "c": "hoodie"}, {"id": "GR-023", "n": "Camiseta Victory (negra)", "c": "camiseta"}, {"id": "GR-024", "n": "Camiseta Not luck, just God (negra)", "c": "camiseta"}, {"id": "GR-025", "n": "Camiseta OK, but first let's pray", "c": "camiseta"}, {"id": "GR-026", "n": "Camiseta God is everywhere", "c": "camiseta"}, {"id": "GR-027", "n": "Camiseta Victory (blanca)", "c": "camiseta"}, {"id": "GR-028", "n": "Hoodie Forgiven (blanco)", "c": "hoodie"}, {"id": "GR-029", "n": "Camiseta Daughter of the King", "c": "camiseta"}, {"id": "GR-030", "n": "Camiseta Jesus is my everything", "c": "camiseta"}, {"id": "GR-031", "n": "Camiseta Just God (negra)", "c": "camiseta"}, {"id": "GR-032", "n": "Hoodie Progress not perfection", "c": "hoodie"}, {"id": "GR-033", "n": "Buzo God is good", "c": "hoodie"}, {"id": "GR-034", "n": "Camiseta Jesus the way, the truth, the life", "c": "camiseta"}, {"id": "GR-035", "n": "Camiseta Balance", "c": "camiseta"}];
const DESTACADOS = ["GR-017","GR-005","GR-018"];
const IMGS = {
 "GR-001": "images/GR-001.jpg",
 "GR-002": "images/GR-002.jpg",
 "GR-003": "images/GR-003.jpg",
 "GR-004": "images/GR-004.jpg",
 "GR-005": "images/GR-005.jpg",
 "GR-006": "images/GR-006.jpg",
 "GR-007": "images/GR-007.jpg",
 "GR-008": "images/GR-008.jpg",
 "GR-009": "images/GR-009.jpg",
 "GR-010": "images/GR-010.jpg",
 "GR-011": "images/GR-011.jpg",
 "GR-012": "images/GR-012.jpg",
 "GR-013": "images/GR-013.jpg",
 "GR-014": "images/GR-014.jpg",
 "GR-015": "images/GR-015.jpg",
 "GR-016": "images/GR-016.jpg",
 "GR-017": "images/GR-017.jpg",
 "GR-018": "images/GR-018.jpg",
 "GR-019": "images/GR-019.jpg",
 "GR-020": "images/GR-020.jpg",
 "GR-021": "images/GR-021.jpg",
 "GR-022": "images/GR-022.jpg",
 "GR-023": "images/GR-023.jpg",
 "GR-024": "images/GR-024.jpg",
 "GR-025": "images/GR-025.jpg",
 "GR-026": "images/GR-026.jpg",
 "GR-027": "images/GR-027.jpg",
 "GR-028": "images/GR-028.jpg",
 "GR-029": "images/GR-029.jpg",
 "GR-030": "images/GR-030.jpg",
 "GR-031": "images/GR-031.jpg",
 "GR-032": "images/GR-032.jpg",
 "GR-033": "images/GR-033.jpg",
 "GR-034": "images/GR-034.jpg",
 "GR-035": "images/GR-035.jpg"
};
// =========================

const $=s=>document.querySelector(s);
const money=v=>"$"+v.toLocaleString("es-CO");
let cart=[],sel={};

function card(p){
  const unica=p.c==="gorra";
  sel[p.id]=sel[p.id]||(unica?"Única":TALLAS[1]);
  return `<article><div class="img"><img src="${IMGS[p.id]}" alt="${p.n}" loading="lazy"></div>
  <div class="name">${p.n}</div><div class="ref">Ref. ${p.id}</div>
  ${unica?`<div class="sizes"><span class="unica">Talla única</span></div>`:`<div class="sizes" data-id="${p.id}">${TALLAS.map(t=>`<button aria-pressed="${sel[p.id]===t}" data-t="${t}">${t}</button>`).join("")}</div>`}
  <button class="add" data-add="${p.id}">Agregar al pedido</button></article>`;
}
const CATS={camiseta:"Camisetas",hoodie:"Abrigos",gorra:"Accesorios"};
const VISTAS={tienda:["Tienda","Todas las referencias. Selecciona talla y agrega a tu pedido."],camisetas:["Camisetas","Selecciona talla y agrega a tu pedido."],abrigos:["Abrigos","Hoodies y buzos. Selecciona talla y agrega a tu pedido."],accesorios:["Accesorios","Gorras. Agrégalas a tu pedido."]};
function vista(v){
  const home=v==="inicio";
  $("#home").hidden=!home;$("#catalogo").hidden=home;
  document.querySelectorAll(".menu button").forEach(b=>b.setAttribute("aria-current",b.dataset.v===v?"page":"false"));
  if(!home){const [t,d]=VISTAS[v];$("#ctitle").textContent=t;$("#csub").textContent=d;
    $("#all").innerHTML=PRODUCTOS.filter(p=>v==="tienda"||CATS[p.c]===t).map(card).join("");}
  window.scrollTo({top:0});
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-v]");if(b){e.preventDefault();vista(b.dataset.v)}});
vista("inicio");

document.addEventListener("click",e=>{
  const s=e.target.closest(".sizes button");
  if(s){const id=s.parentNode.dataset.id;sel[id]=s.dataset.t;
    document.querySelectorAll(`.sizes[data-id="${id}"] button`).forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===s.dataset.t));return}
  const a=e.target.closest("[data-add]");
  if(a){const id=a.dataset.add,t=sel[id];const f=cart.find(c=>c.id===id&&c.t===t);
    f?f.q++:cart.push({id,t,q:1});render();
    a.textContent="Agregado ✓";setTimeout(()=>a.textContent="Agregar al pedido",1200);return}
  const q=e.target.closest("[data-q]");
  if(q){const [i,d]=q.dataset.q.split(",");const c=cart[+i];c.q+=+d;if(c.q<1)cart.splice(+i,1);render();return}
  const r=e.target.closest("[data-rm]");
  if(r){cart.splice(+r.dataset.rm,1);render()}
});

function open(v){$("#drawer").classList.toggle("on",v);$("#shade").classList.toggle("on",v);$("#drawer").setAttribute("aria-hidden",!v)}
$("#bar").onclick=()=>open(true);$("#close").onclick=()=>open(false);$("#shade").onclick=()=>open(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")open(false)});

function render(){
  const lines=cart.map(c=>({...c,p:PRODUCTOS.find(p=>p.id===c.id)}));
  const n=lines.reduce((a,l)=>a+l.q,0);
  const tl=t=>t==="Única"?"Talla única":"Talla "+t;
  $("#bar").classList.toggle("on",n>0);
  $("#barN").textContent=`Mi pedido · ${n} ${n===1?"prenda":"prendas"}`;
  $("#barT").textContent="Ver pedido";
  $("#items").innerHTML=lines.length?lines.map((l,i)=>`<div class="it"><div><div class="name">${l.p.n}</div><div class="ref" style="margin:0 0 4px">Ref. ${l.id} · ${tl(l.t)}</div><button class="rm" data-rm="${i}">Eliminar</button></div><div class="qty"><button data-q="${i},-1" aria-label="Quitar una">−</button><span>${l.q}</span><button data-q="${i},1" aria-label="Agregar una">+</button></div></div>`).join(""):`<p class="empty">Aún no has agregado prendas.</p>`;
  const msg="Hola Grace, quiero hacer este pedido:\n"+lines.map(l=>`• ${l.p.n} (${l.id}) · ${tl(l.t)} × ${l.q}`).join("\n");
  const wa=$("#wa");wa.href=lines.length?`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`:"#";
  wa.style.opacity=lines.length?1:.4;wa.style.pointerEvents=lines.length?"auto":"none";
  if(!lines.length)open(false);
}
render();

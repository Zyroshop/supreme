const items=[
["oversized-hoodie","CORE OVERSIZED HOODIE","hoodies",64.95,"Washed black · Heavyweight fit","BESTSELLER","photo-1556821840-3a63f95609a7"],
["zip-hoodie","DOUBLE ZIP HOODIE","hoodies",72.95,"Charcoal · Relaxed fit","NEW","photo-1578681994506-b8f463449011"],
["crewneck","MINIMAL CREWNECK","hoodies",54.95,"Heather grey · Everyday fit","","photo-1551028719-00167b16eac5"],
["graphic-tee","AFTER HOURS GRAPHIC TEE","tshirts",34.95,"Black · Back print","TRENDING","photo-1503341504253-dff4815485f1"],
["boxy-tee","BOXY ESSENTIAL TEE","tshirts",29.95,"Off-white · Boxy fit","ESSENTIAL","photo-1521572163474-6864f9cf17ab"],
["longsleeve","LAYER LONGSLEEVE","tshirts",36.95,"Washed grey · Loose fit","","photo-1523398002811-999ca8dec234"],
["puffer","PUFFER JACKET","jackets",99.95,"Black · Oversized silhouette","NEW DROP","photo-1544923246-77307dd654cb"],
["varsity","VARSITY BOMBER JACKET","jackets",89.95,"Black / cream · Relaxed fit","LIMITED","photo-1551028719-00167b16eac5"],
["denim-jacket","VINTAGE DENIM JACKET","jackets",84.95,"Washed blue · Boxy fit","","photo-1516257984-b1b4d707412e"],
["shell","CITY SHELL JACKET","jackets",79.95,"Black · Lightweight layer","","photo-1544923246-77307dd654cb"],
["cargo","UTILITY CARGO PANTS","pants",59.95,"Black · Loose fit","BESTSELLER","photo-1511196044526-5cb3bcb7071b"],
["baggy-jeans","BAGGY DENIM JEANS","pants",64.95,"Washed blue · Baggy leg","NEW","photo-1542272604-787c3835535d"],
["trackpants","OFF-DUTY TRACK PANTS","pants",49.95,"Charcoal · Wide leg","","photo-1551488831-00ddcb6c6bd3"],
["shorts","RELAXED CARGO SHORTS","shorts",39.95,"Stone · Relaxed fit","SUMMER","photo-1591195853828-11db59a44f6b"],
["jorts","DENIM JORTS","shorts",44.95,"Washed blue · Wide leg","","photo-1511196044526-5cb3bcb7071b"],
["beanie","RIB KNIT BEANIE","accessories",22.95,"Black · One size","","photo-1576871337622-98d48d1cf531"],
["cap","LOW PROFILE CAP","accessories",24.95,"Black · Adjustable","ESSENTIAL","photo-1588850561407-ed78c282e89b"],
["crossbody","UTILITY CROSSBODY BAG","accessories",29.95,"Black · Everyday carry","NEW","photo-1553062407-98eeb64c6a62"],
["sneakers","DAILY LOW SNEAKERS","accessories",84.95,"White / grey · Everyday wear","","photo-1542291026-7eec264c27ff"],
["belt","WEBBING BELT","accessories",19.95,"Black · Adjustable","","photo-1624222247344-550fb8d4c7f9"],
["rib-beanie-cream","RIB KNIT BEANIE — CREAM","hats",22.95,"Cream · Fold-over cuff","NEW","photo-1576871337622-98d48d1cf531"],
["balaclava","CITY BALACLAVA","hats",27.95,"Black · Cold-weather layer","TRENDING","photo-1576871337622-98d48d1cf531"],
["bucket-hat","UTILITY BUCKET HAT","hats",26.95,"Washed black · Everyday fit","","photo-1588850561407-ed78c282e89b"],
["logo-cap","ZYRO LOGO CAP","hats",24.95,"Stone · Adjustable strap","","photo-1588850561407-ed78c282e89b"],
["scarf","SOFT KNIT SCARF","accessories",29.95,"Charcoal · Winter essential","NEW","photo-1520903920243-00d872a2d1c9"],
["socks","SPORT CREW SOCKS","accessories",12.95,"White / black · 2-pack","","photo-1586350977771-b3b0nae40f8"],
["gloves","TECH FLEECE GLOVES","accessories",19.95,"Black · Touchscreen-friendly","","photo-1511499767150-a48a237f0083"],
["track-jacket","RETRO TRACK JACKET","jackets",74.95,"Black / grey · Relaxed fit","NEW","photo-1551488831-00ddcb6c6bd3"],
["puffer-vest","LIGHT PUFFER VEST","jackets",69.95,"Black · Layering piece","","photo-1544923246-77307dd654cb"],
["knit-sweater","TEXTURE KNIT SWEATER","hoodies",59.95,"Oatmeal · Relaxed fit","","photo-1576566588028-4147f3842f27"],
["tote","DAILY TOTE BAG","accessories",18.95,"Natural canvas · Everyday carry","","photo-1590874103328-eac38a683ce7"]
].map(x=>({id:x[0],name:x[1],cat:x[2],price:x[3],desc:x[4],badge:x[5],img:`https://images.unsplash.com/${x[6]}?auto=format&fit=crop&w=800&q=80`}));
items.push(...[
["wide-carpenter","WIDE LEG CARPENTER PANTS","pants",64.95,"Stone · Extra wide leg","NEW","photo-1473966968600-fa801b869a1a"],
["loose-denim-black","LOOSE FIT DENIM — BLACK","pants",66.95,"Washed black · Loose straight leg","NEW","photo-1542272604-787c3835535d"],
["parachute","PARACHUTE PANTS","pants",57.95,"Graphite · Ultra baggy fit","DROP","photo-1511196044526-5cb3bcb7071b"]
].map(x=>({id:x[0],name:x[1],cat:x[2],price:x[3],desc:x[4],badge:x[5],img:`https://images.unsplash.com/${x[6]}?auto=format&fit=crop&w=800&q=80`})));
items.push(...[
["zyro-beanie-black","ZYRO SIGNATURE BEANIE","Black","#171717","#f5f2ea",27.95],
["zyro-beanie-cream","ZYRO MONOGRAM BEANIE","Cream","#e7ddc9","#161616",29.95],
["zyro-beanie-grey","ZYRO BLOCK LOGO BEANIE","Grey","#777a7c","#fff",27.95],
["zyro-beanie-olive","ZYRO STREET BEANIE","Olive","#535b46","#f1e9d8",29.95]
].map(([id,name,color,bg,ink,price],i)=>({id,name,cat:"hats",price,desc:`${color} · Geborduurd ZYRO-logo · One size`,badge:"ZYRO DESIGN",img:`assets/${id}.svg`,gallery:[`assets/${id}.svg`,`assets/${id}-detail.svg`]})));
const cart=[];let category="all",query="";const eur=n=>new Intl.NumberFormat("nl-BE",{style:"currency",currency:"EUR"}).format(n);const grid=document.getElementById("productGrid"),cartEl=document.getElementById("cart"),shade=document.getElementById("shade"),toast=document.getElementById("toast");
function render(){const filtered=items.filter(p=>(category==="all"||p.cat===category)&&(p.name+" "+p.desc).toLowerCase().includes(query.toLowerCase()));grid.innerHTML=filtered.map(p=>`<article class="product"><button class="product-open" data-view="${p.id}" aria-label="Bekijk ${p.name}"><div class="product-image"><img loading="lazy" src="${p.img}" alt="${p.name}">${p.badge?`<span class="product-badge">${p.badge}</span>`:""}<span class="view-hint">BEKIJK PRODUCT ↗</span></div><div class="product-info"><h3>${p.name}</h3><span class="price">${eur(p.price)}</span></div><p class="product-desc">${p.desc}</p></button></article>`).join("");document.getElementById("noResults").classList.toggle("hidden",filtered.length>0)}
function message(t){toast.textContent=t;toast.classList.add("show");clearTimeout(message.t);message.t=setTimeout(()=>toast.classList.remove("show"),2000)}
function updateCart(){let count=cart.reduce((n,x)=>n+x.qty,0);document.getElementById("bagCount").textContent=count;document.getElementById("cartCount").textContent=count;document.getElementById("emptyCart").classList.toggle("hidden",count>0);document.getElementById("cartFooter").classList.toggle("hidden",!count);document.getElementById("cartItems").innerHTML=cart.map((x,i)=>{const p=items.find(p=>p.id===x.id);return `<div class="cart-row"><img src="${p.img}" alt=""><div><h3>${p.name}</h3><p>Maat: ${x.size||"One size"} · ${eur(p.price)}</p><div class="qty"><button data-qty="${i}" data-delta="-1">−</button>${x.qty}<button data-qty="${i}" data-delta="1">+</button></div></div><button class="remove" data-remove="${i}">×</button></div>`}).join("");document.getElementById("subtotal").textContent=eur(cart.reduce((n,x)=>n+items.find(p=>p.id===x.id).price*x.qty,0))}
function openCart(){cartEl.classList.add("open");shade.classList.remove("hidden")}function closeCart(){cartEl.classList.remove("open");shade.classList.add("hidden")}
const detail=document.getElementById("productDetail");let activeProduct=null,activeSize=null,activePhoto=0;
function sizesFor(p){return p.cat==="hats"||p.cat==="accessories"?["ONE SIZE"]:p.cat==="pants"?["XS","S","M","L","XL","XXL"]:["XS","S","M","L","XL","XXL"]}
function photosFor(p){return p.gallery||[p.img,p.img.replace(/w=800/,"w=1400")+"&detail=1"]}
function showPhoto(){const pics=photosFor(activeProduct);document.getElementById("detailMainImage").src=pics[activePhoto];document.getElementById("detailThumbs").innerHTML=pics.map((src,i)=>`<button class="thumb ${i===activePhoto?'chosen':''}" data-photo="${i}" aria-label="Foto ${i+1}"><img src="${src}" alt="Productaanzicht ${i+1}"></button>`).join("")}
function openDetail(id){activeProduct=items.find(p=>p.id===id);if(!activeProduct)return;activeSize=null;activePhoto=0;document.getElementById("detailName").textContent=activeProduct.name;document.getElementById("detailPrice").textContent=eur(activeProduct.price);document.getElementById("detailDesc").textContent=activeProduct.desc;document.getElementById("detailSizes").innerHTML=sizesFor(activeProduct).map(size=>`<button data-size="${size}" class="size-option">${size}</button>`).join("");document.getElementById("sizeHelp").textContent="Kies eerst je maat om toe te voegen.";showPhoto();detail.classList.remove("hidden");document.body.classList.add("modal-open")}
function closeDetail(){detail.classList.add("hidden");document.body.classList.remove("modal-open")}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-view]");if(b)openDetail(b.dataset.view)});
document.getElementById("detailClose").onclick=closeDetail;
detail.addEventListener("click",e=>{if(e.target===detail)closeDetail();const size=e.target.closest("[data-size]");if(size){activeSize=size.dataset.size;detail.querySelectorAll("[data-size]").forEach(b=>b.classList.toggle("chosen",b===size));document.getElementById("sizeHelp").textContent=`Geselecteerd: ${activeSize}`}const photo=e.target.closest("[data-photo]");if(photo){activePhoto=Number(photo.dataset.photo);showPhoto()}});
document.getElementById("detailAdd").onclick=()=>{if(!activeSize){document.getElementById("sizeHelp").textContent="Selecteer eerst een maat.";return}const x=cart.find(x=>x.id===activeProduct.id&&x.size===activeSize);x?x.qty++:cart.push({id:activeProduct.id,size:activeSize,qty:1});updateCart();closeDetail();message("Toegevoegd aan je bag · "+activeSize);openCart()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDetail()});
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;category=b.dataset.cat;document.querySelectorAll("[data-cat]").forEach(x=>x.classList.toggle("selected",x===b));render()});
document.getElementById("bagBtn").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;shade.onclick=closeCart;
document.getElementById("cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove]");if(q){const x=cart[Number(q.dataset.qty)];x.qty+=Number(q.dataset.delta);if(x.qty<1)cart.splice(cart.indexOf(x),1);updateCart()}if(r){cart.splice(Number(r.dataset.remove),1);updateCart()}});
document.getElementById("searchBtn").onclick=()=>{document.getElementById("searchBar").classList.toggle("hidden");document.getElementById("searchInput").focus()};document.getElementById("searchInput").oninput=e=>{query=e.target.value;render()};document.getElementById("clearSearch").onclick=()=>{document.getElementById("searchInput").value="";query="";render()};document.getElementById("mobileMenu").onclick=()=>document.querySelector("nav").classList.toggle("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("nav").classList.remove("open"));document.getElementById("checkout").onclick=()=>message("Checkout nog niet actief — demo-webshop.");render();updateCart();

// ZYRO Custom Lab — live concept preview
const customItem=document.getElementById("customItem");
const customText=document.getElementById("customText");
const customPlacement=document.getElementById("customPlacement");
const garment=document.getElementById("garmentPreview");
const garmentMark=document.getElementById("garmentMark");
const previewName=document.getElementById("previewName");
let customColor="#222222";
const garmentNames={hoodie:"OVERSIZED HOODIE",tee:"BOXY T-SHIRT",beanie:"RIB KNIT BEANIE",cap:"LOW PROFILE CAP",sweatshirt:"CREWNECK SWEATER",tote:"CANVAS TOTE BAG"};
function updatePreview(){
  garment.className="garment "+customItem.value;
  garment.style.setProperty("--garment-color",customColor);
  garmentMark.textContent=customText.value.trim()||"ZYRO";
  garmentMark.className="garment-mark "+customPlacement.value;
  const isLight=["#e9e5dc","#d9d0c1"].includes(customColor);
  garmentMark.style.color=isLight?"#222":"#f7f5ef";
  previewName.textContent=garmentNames[customItem.value]||"CUSTOM PIECE";
}
document.getElementById("customSwatches").addEventListener("click",e=>{
  const swatch=e.target.closest("[data-color]");if(!swatch)return;
  customColor=swatch.dataset.color;
  document.querySelectorAll(".swatch").forEach(s=>s.classList.toggle("active",s===swatch));
  updatePreview();
});
customItem.addEventListener("change",updatePreview);
customText.addEventListener("input",updatePreview);
customPlacement.addEventListener("change",updatePreview);
document.getElementById("saveDesign").addEventListener("click",()=>{
  const name=`CUSTOM ${garmentNames[customItem.value]}`;
  const text=customText.value.trim()||"ZYRO";
  const customId="custom-"+Date.now();
  const photo=customItem.value==="beanie"||customItem.value==="cap"?"https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80":"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80";
  items.push({id:customId,name,cat:"custom",price:69.95,desc:`Kleur ${customColor} · Print: ${text} · ${customPlacement.options[customPlacement.selectedIndex].text}`,badge:"YOUR DESIGN",img:photo});
  cart.push({id:customId,size:"ONE SIZE",qty:1});
  updateCart();
  message("Jouw ontwerp is toegevoegd aan de demo-bag");
  openCart();
});
updatePreview();

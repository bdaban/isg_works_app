import{_ as T,r as n,n as A,m as x,c as d,a as t,t as l,p,v as M,F as G,q as D,o as c,I as m,d as y,K as h}from"./B8_WjUqw.js";import{u as g}from"./BMbFKR4x.js";const Y={class:"p-6 bg-gray-100 min-h-screen"},I={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"},B={class:"bg-white p-4 rounded-lg shadow-md"},P={class:"text-3xl font-bold text-blue-500"},$={class:"bg-white p-4 rounded-lg shadow-md"},C={class:"text-3xl font-bold text-blue-500"},E={class:"bg-white p-4 rounded-lg shadow-md"},N={class:"text-3xl font-bold text-blue-500"},W={class:"mb-6"},q=["value"],V={class:"bg-white p-6 rounded-lg shadow-md"},L={class:"min-w-full bg-white"},X={class:"text-gray-600 text-sm font-light"},z={class:"py-3 px-6"},K={class:"py-3 px-6"},O={class:"py-3 px-6"},U={class:"py-3 px-6"},Z={class:"py-3 px-6"},j={class:"py-3 px-6"},H={__name:"index",setup(J){const b=n(0),v=n(0),_=n(0),o=n([]),u=n("");A(async()=>{const{data:a}=await g("/api/firma/get","$PslAyef5YX"),{data:e}=await g("/api/yerleske/get","$6PO73qLRkI"),{data:i}=await g("/api/calisan/get","$nn2AXZkwPl");b.value=a.value.length,v.value=e.value.length,_.value=i.value.length,o.value=await Promise.all(i.value.map(async s=>{const k=await R(s.id);return{...s,saglikRaporuGecerlilik:w(s.saglikRaporlari),sertifikaGecerlilik:w(s.sertifikalar),egitimGecerlilik:k}}))});const S=x(()=>{const a=o.value.map(e=>e.firma.firmaAdi);return[...new Set(a)]}),F=x(()=>u.value?o.value.filter(a=>a.firma.firmaAdi===u.value):o.value);x(()=>[...o.value].sort((a,e)=>{const i=Math.min(r(a.saglikRaporuGecerlilik),r(a.sertifikaGecerlilik),r(a.egitimGecerlilik)),s=Math.min(r(e.saglikRaporuGecerlilik),r(e.sertifikaGecerlilik),r(e.egitimGecerlilik));return i-s}));const r=a=>a==="Yok"?1/0:Number(a),R=async a=>{const{data:e}=await g(`/api/egitim/getByCalisanId?calisanId=${a}`,"$tWBWWSl2bW");if(e.value.length===0)return"Yok";const i=new Date,k=new Date(e.value[0].gecerlilikTarihi)-i;return Math.floor(k/(1e3*60*60*24))},w=a=>{if(a.length===0)return"Yok";const e=new Date,s=new Date(a[0].gecerlilikTarihi)-e;return Math.floor(s/(1e3*60*60*24))},f=a=>a==="Yok"?"text-gray-500":a>30?"text-green-500":"text-red-500";return(a,e)=>(c(),d("div",Y,[e[8]||(e[8]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-6"},"Dashboard",-1)),t("div",I,[t("div",B,[e[1]||(e[1]=t("h2",{class:"text-lg font-semibold text-gray-600 mb-2"},"Toplam Firma",-1)),t("p",P,l(b.value),1)]),t("div",$,[e[2]||(e[2]=t("h2",{class:"text-lg font-semibold text-gray-600 mb-2"},"Toplam Şube",-1)),t("p",C,l(v.value),1)]),t("div",E,[e[3]||(e[3]=t("h2",{class:"text-lg font-semibold text-gray-600 mb-2"},"Toplam Çalışan",-1)),t("p",N,l(_.value),1)])]),t("div",W,[e[5]||(e[5]=t("label",{for:"firmaFilter",class:"text-lg font-semibold text-gray-600"},"Firma Filtrele:",-1)),p(t("select",{id:"firmaFilter","onUpdate:modelValue":e[0]||(e[0]=i=>u.value=i),class:"ml-4 p-2 border border-gray-300 rounded-md"},[e[4]||(e[4]=t("option",{value:""},"Tümü",-1)),(c(!0),d(G,null,D(S.value,i=>(c(),d("option",{key:i,value:i},l(i),9,q))),128))],512),[[M,u.value]])]),t("div",V,[e[7]||(e[7]=t("h2",{class:"text-2xl font-semibold text-gray-700 mb-4"}," Sağlık Raporları, Sertifikalar ve Eğitimler ",-1)),t("table",L,[e[6]||(e[6]=t("thead",null,[t("tr",{class:"w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[t("th",{class:"py-3 px-6 text-left"},"Çalışan Adı"),t("th",{class:"py-3 px-6 text-left"},"Çalışan Firma Adı"),t("th",{class:"py-3 px-6 text-left"},"Sağlık Raporu Geçerlilik"),t("th",{class:"py-3 px-6 text-left"},"Sertifika Geçerlilik"),t("th",{class:"py-3 px-6 text-left"},"Eğitim Geçerlilik"),t("th",{class:"py-3 px-6 text-left"},"Durum")])],-1)),t("tbody",X,[(c(!0),d(G,null,D(F.value,i=>(c(),d("tr",{key:i.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",z,l(i.adi)+" "+l(i.soyadi),1),t("td",K,l(i.firma.firmaAdi),1),t("td",O,[t("span",{class:m(f(i.saglikRaporuGecerlilik))},[y(l(i.saglikRaporuGecerlilik)+" ",1),p(t("span",null,"gün",512),[[h,i.saglikRaporuGecerlilik!=="Yok"]])],2)]),t("td",U,[t("span",{class:m(f(i.sertifikaGecerlilik))},[y(l(i.sertifikaGecerlilik)+" ",1),p(t("span",null,"gün",512),[[h,i.sertifikaGecerlilik!=="Yok"]])],2)]),t("td",Z,[t("span",{class:m(f(i.egitimGecerlilik))},[y(l(i.egitimGecerlilik)+" ",1),p(t("span",null,"gün",512),[[h,i.egitimGecerlilik!=="Yok"]])],2)]),t("td",j,[t("span",{class:m([i.aktif?"text-green-500":"text-red-500"])},l(i.aktif?"Aktif":"Pasif"),3)])]))),128))])])])]))}},et=T(H,[["__scopeId","data-v-bb6a22ec"]]);export{et as default};

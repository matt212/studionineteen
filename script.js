// Image manifest is embedded so opening index.html directly (file://) works.
const MEDIA = {
  "home": [
    "./assets/images/WebsiteAD1.jpeg",
     "./assets/images/WebsiteAD2.jpeg",
     "./assets/images/WebsiteAD3.jpeg",
     "./assets/images/WebsiteAD4.jpeg"
  ],
  "press": [
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1463692065151-YN1JXYR868YHYBFOO9W5/390_thumb_1.jpg",
      "caption": "Elle Decor — Designers We Love"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1445457824194-JSR0D85U2HC440XGFHJT/thr_issue_36_murdochs_cover.jpg",
      "caption": "The Hollywood Reporter"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978227711-6G422DK1DBZHL9NUAMW2/4.jpg",
      "caption": "Elle Decor — All-American Chic"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978231456-SI6NL2LCUQTY54QR1LZD/page-1.jpg",
      "caption": "Architectural Digest"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978225984-OYS9AVQVT9MWQO22CN3R/1.jpg",
      "caption": "Architectural Digest"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978226806-W3OPM4W9WMJ3P4VIQSB1/3.jpg",
      "caption": "AD — Las Casas Más Bellas del Mundo"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978227212-DD1P0XJRK9FQNWOLS0FP/5.jpg",
      "caption": "Elle Decor — All-American Flair"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978227537-NLQ7ASOBMVR0E49VVO09/6.jpg",
      "caption": "Elle Decor — Chic Outdoor Living"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978227857-XR9ECIEGZ3B9PN29OMLB/8.jpg",
      "caption": "California Home + Design"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978228262-SJ7BX1MM5GA5ASZ92LHM/9.jpg",
      "caption": "Confidential"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978228078-AS400KYZCHO6RNXGA2PS/10.jpg",
      "caption": "California Style"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978228798-27D6DDNW4SRX88ZPHXGS/page-1-1.jpg",
      "caption": "Veranda"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978230204-5AZD9O619UJ0HPRRN879/page-1-2.jpg",
      "caption": "The New York Times T Magazine"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978229227-0858GBEKCWPP8SMNFHJT/page-1-3.jpg",
      "caption": "The Hollywood Reporter — Hollywood at Home"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978226664-L6PBRSIB2NF1LZBQA5JD/2.jpg.png",
      "caption": "Introspective Magazine — The Melrose Project"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1440978229686-48WG7HO5I3QNZUZBT1VZ/page-1-4.jpg",
      "caption": "C Home"
    },
    {
      "url": "https://images.squarespace-cdn.com/content/v1/55d0b162e4b0c6c37d38225e/1496449447214-CX6Q6GPD19DLKF8OOUA3/Screen%2BShot%2B2017-06-02%2Bat%2B5.22.46%2BPM.png",
      "caption": "Elle Decor — High Tech, High Style"
    }
  ]
};

(()=>{
 const gallery=document.querySelector('.hero-gallery');
 if(gallery){
   MEDIA.home.forEach((url,i)=>{
     const el=document.createElement('div');
     el.className='hero-shot'+(i===0?' active':'');
     el.style.backgroundImage=`url("${url}")`;
     gallery.appendChild(el);
   });
   const slides=[...gallery.querySelectorAll('.hero-shot')];
   if(slides.length>1){
     let index=0;
     setInterval(()=>{slides[index].classList.remove('active');index=(index+1)%slides.length;slides[index].classList.add('active');},5000);
   }
 }
 const grid=document.querySelector('#press-grid');
 if(grid){
   MEDIA.press.forEach(item=>{
     const a=document.createElement('a');a.className='press-item';
     a.href=item.url;a.target='_blank';a.rel='noopener';a.title=item.caption;
     const img=document.createElement('img');img.src=item.url;img.alt=item.caption;img.loading='lazy';
     a.appendChild(img);grid.appendChild(a);
   });
 }
})();

(function(){
  angular
  .module('dhWedding.wishlist')
  .service('wishlistService', wishlistService);

  wishlistService.$inject = [];

  function wishlistService() {
    var data = getData();

    var service = {
      data: data
    };
    return service;

    ////////

    function getData() {
      return [
        {
          items: [
            {
              title: 'Penge til vores bryllupsrejse',
              desc: 'Vi drømmer om en tur til Mexico'
            }
          ]
        }, {
          title: 'Porcelæn fra Royal Copenhagen',
          items: [
            {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteFluted/Tallerken-Coupe-27-cm/p/1016946',
              title: 'Store tallerkner',
              desc: 'Hvid riflet Cupe tallerken, 27 cm.'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteFluted/Tallerken-Coupe-23-cm/p/1016945',
              title: 'Små tallerkner',
              desc: 'Hvid riflet cupe tallerken, 23 cm.'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteFluted/Dyb-tallerken-24-cm/p/1016940',
              title: 'Dybe tallerkner',
              desc: 'Hvid riflet tallerken, 24 cm.'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteElements/Skal-137-cm/p/1017071',
              title: 'Skål',
              desc: 'Hvid Elements, 13,7 cm'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteElements/Skal-78-cl/p/1017493',
              title: 'Skål',
              desc: 'Hvid riflet, 78 cl'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteElements/Skal-320-cl/p/1017494',
              title: 'Skål',
              desc: 'Hvid Elements, 320cl'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Series/WhiteFluted/Fad-23-cm/p/1016929',
              title: 'Fad',
              desc: 'Hvid Riflet, 23 cm'
            }, {
              link: 'https://www.royalcopenhagen.com/dk/da/Products/CupsMugs/Termokop-35-cl/p/1017483',
              title: 'Kopper',
              desc: 'Blå Elements 35 cl,'
            },
            {
              link: 'https://www.royalcopenhagen.com/dk/da/Products/CupsMugs/Højhankskop-og-underkop-25-cl/p/1017049',
              title: 'Højhankskopper og underkopper',
              desc: 'Blå Elements, 25 cl'
            }
          ]
        }, {
          title: 'Bestik',
          items: [
            {
              link: 'http://www.georgjensen.com/da-dk/bestik/bernadotte-staal/bernadotte-saet-4-dele-011-012-017-033_3609504',
              title: 'Spisestel',
              desc: 'Georg Jensen, Bernadotte'
            }, {
              link: 'http://www.georgjensen.com/da-dk/bestik/bernadotte-staal/bernadotte-kagegaffel_3609043',
              title: 'Kagegafler,',
              desc: 'Georg Jensen, Bernadotte'
            }, {
              link: 'http://www.georgjensen.com/da-dk/bestik/bernadotte-staal/bernadotte-sauceske_3609153',
              title: 'Sovseske',
              desc: 'Georg Jensen, Bernadotte'
            }, {
              link: 'http://www.georgjensen.com/da-dk/bestik/bernadotte-staal/bernadotte-servingsske_3609115',
              title: 'Serveringsske',
              desc: 'Georg Jensen, Bernadotte'
            }, {
              link: 'http://www.georgjensen.com/da-dk/bestik/bernadotte-staal/bernadotte-servietringe-2-stk_3609375',
              title: 'Serveringsringe',
              desc: 'Georg Jensen, Bernadotte'
            }, {
              link: 'http://www.illumsbolighus.dk/shop/nordic_salatbestik.aspx',
              title: 'Salatbestik',
              desc: 'Trip Trap, Nordic'
            }
          ]
        }, {
          title: 'Køkkenet',
          items: [
            {
              title: 'Støbejernsgryde',
              desc: 'Le Creuset, 4,2 L, 24 cm, ”Ocean”',
              link: 'https://www.lecreuset.dk/kasserolle-m-trahandtag-og-stalknop'
            }, {
              link: 'http://www.triptrap.dk/shop/accessories/koekken/skaerebraet-50x27',
              title: 'Skærebræt',
              desc: 'TripTrap 50x27'
            }, {
              link: 'http://www.triptrap.dk/shop/accessories/koekken/skaerebraet-40x24',
              title: 'Skærebræt',
              desc: 'TripTrap 40x24'
            }, {
              link: 'http://www.triptrap.dk/shop/accessories/koekken/soft-board-small',
              title: 'Skærebræt',
              desc: 'TripTrap Soft Board small'
             }, {
              link: 'http://www.inspiration.dk/koekken-og-el/gastronomi/salt-og-peber/paris-peberkvaern-2',
              title: 'Peberkværn',
              desc: 'Peugeot Paris, 27 cm, Choco Træ'
             }, {
              link: 'http://www.kitchenone.dk/produkt/wilfa-wsp-1-kaffemaskine/?farve=2009',
              title: 'Kaffemaskine',
              desc: 'Wilfa WSP-1, alu'
            }, {
              link: 'https://www.nespresso.com/dk/da/product/umilk-sort-kaffemaskine',
              title: 'Kaffemaskine',
              desc: 'Umilk Pure Black Kaffemaskine, sort'
            }, {
              link: 'http://www.illumsbolighus.dk/shop/kitchenaid_artisan_elkedel-_medallion_silver.aspx',
              title: 'Elkedel',
              desc: 'KitchenAid Artisan elkedel, medallion silver'
            }, {
              link: 'http://www.spiegelau.dk/sparkling-glas-p-1766.html',
              title: 'Champagneglas',
              desc: 'Spiegelau, Sparkling glas 23 cm / 14,5 cl'
            }, {
              link: 'https://www.lecreuset.dk/kasserolle-m-trahandtag-og-stalknop',
              title: 'Kasserolle',
              desc: 'Le Le Creusets kasserolle m træhåndtag'
            }
          ]
        }, {
          title: 'Til boligen',
          items: [
            {
              link: 'http://www.livingshop.dk/carl-hansen-ch20-elbow-stol/',
              title: 'Spisestuestol',
              desc: 'Elbow chair, Wegner, Eg sæbe, stofgruppe 1'
            }, {
              link: 'http://luksuslamper.dk/shop/secto-octo-4240-3546p.html',
              title: 'Lampe',
              desc : 'Secto Octo 4240 pendel birk'
            }
          ]
        }
      ];
    }
  }
})();

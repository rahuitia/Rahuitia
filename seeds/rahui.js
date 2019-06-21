exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("rahui")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rahui").insert([
        {
          id: 31,
          user_id: 11,
          iwi: JSON.stringify(["Ngāpuhi"]),
          hapu: JSON.stringify(["Ngati Kuta", "Patukeha ki Te Rawhiti"]),
          description:
            "Maunganui Bay / Deep Water Cove closed to all fishing (except for kina)",
          korero:
            "Maunganui Bay, on the Cape Brett Peninsula in the Bay of Islands, was first closed to all fishing except kina on 1 December 2010 for a two­ year period. It has been rolled over every two years since then. Ngati Kuta and Patukeha ki Te Rawhiti, the two resident hapu, have requested a further closure as they consider that more time is required to allow depleted stocks in Maunganui Bay to continue rebuilding. The two hapu have maintained a traditional rahui (closure) over Maunganui Bay since March 2009, due to their concern about the depletion of fish stocks. The further closure provides ongoing statutory support for the traditional rahui",
          geo_ref: JSON.stringify([
            // { lat: -35.16643533792861, lng: 174.3177917555065 }, { lat: -35.188043311071716, lng: 174.1965988233776 }, { lat: -35.23264419283272, lng: 174.2728164747448 }, { lat: -35.16643533792861, lng: 174.3177917555065 }
            { lat: -35.18923619295228, lng: 174.29231824142357 },
            { lat: -35.18958691920857, lng: 174.29227532607933 },
            { lat: -35.19018315036989, lng: 174.29274739486596 },
            { lat: -35.19074430511325, lng: 174.29330529434105 },
            { lat: -35.19127038416533, lng: 174.29356278640648 },
            { lat: -35.19176138820733, lng: 174.29412068588158 },
            { lat: -35.19151588655723, lng: 174.29472150070092 },
            { lat: -35.19123531233449, lng: 174.29519356948754 },
            { lat: -35.19169124495442, lng: 174.2953652308645 },
            { lat: -35.19155095826696, lng: 174.29579438430687 },
            { lat: -35.19127038416533, lng: 174.29600896102806 },
            { lat: -35.19155095826696, lng: 174.2962664530935 },
            { lat: -35.19127038416533, lng: 174.29656686050316 },
            { lat: -35.19144574309238, lng: 174.29712475997826 },
            { lat: -35.19105995295325, lng: 174.29802598220726 },
            { lat: -35.19105995295325, lng: 174.29866971237084 },
            { lat: -35.19165617330526, lng: 174.29858388168236 },
            { lat: -35.19218224645304, lng: 174.29888428909203 },
            { lat: -35.19270831619444, lng: 174.29892720443627 },
            { lat: -35.19309409850654, lng: 174.29927052719017 },
            { lat: -35.193234382529475, lng: 174.29982842666527 },
            { lat: -35.193023956404225, lng: 174.30094422561547 },
            { lat: -35.19253295999246, lng: 174.30137337905785 },
            { lat: -35.19218224645304, lng: 174.30206002456566 },
            { lat: -35.191866602973136, lng: 174.30218877059838 },
            { lat: -35.19130545598101, lng: 174.30223168594262 },
            { lat: -35.19127038416533, lng: 174.3032187388601 },
            { lat: -35.19148081483238, lng: 174.30351914626976 },
            { lat: -35.19088459319354, lng: 174.30420579177758 },
            { lat: -35.19053387253867, lng: 174.3050211833181 },
            { lat: -35.19063908889409, lng: 174.3054503367605 },
            { lat: -35.191410671337245, lng: 174.3048924372854 },
            { lat: -35.19193674607464, lng: 174.3048066065969 },
            { lat: -35.19263817375907, lng: 174.30497826797387 },
            { lat: -35.19309409850654, lng: 174.30519284469506 },
            { lat: -35.19351494984865, lng: 174.30497826797387 },
            { lat: -35.19400594032571, lng: 174.3052357600393 },
            { lat: -35.19470735014542, lng: 174.30437745315453 },
            { lat: -35.195408753909206, lng: 174.30424870712181 },
            { lat: -35.19628550009768, lng: 174.30373372299096 },
            { lat: -35.19677647382998, lng: 174.30369080764672 },
            { lat: -35.197021959583324, lng: 174.30330456954857 },
            { lat: -35.19761813618139, lng: 174.30330456954857 },
            { lat: -35.19796882625395, lng: 174.30364789230248 },
            { lat: -35.19796882625395, lng: 174.304463283843 },
            { lat: -35.19817923957074, lng: 174.3048066065969 },
            { lat: -35.19863513322061, lng: 174.30484952194115 },
            { lat: -35.198915681887186, lng: 174.30459202987572 },
            { lat: -35.19933650307017, lng: 174.3048924372854 },
            { lat: -35.20007293489413, lng: 174.3048924372854 },
            { lat: -35.200353478594536, lng: 174.30442036849877 },
            { lat: -35.200353478594536, lng: 174.30381955367943 },
            { lat: -35.200213206865456, lng: 174.30339040023705 },
            { lat: -35.200213206865456, lng: 174.30270375472924 },
            { lat: -35.200353478594536, lng: 174.30227460128685 },
            { lat: -35.200143070910066, lng: 174.3015450404348 },
            { lat: -35.200563885733914, lng: 174.30137337905785 },
            { lat: -35.20098469837747, lng: 174.30193127853295 },
            { lat: -35.20123017141266, lng: 174.30145920974633 },
            { lat: -35.201370441385386, lng: 174.30103005630394 },
            { lat: -35.201580845890234, lng: 174.30068673355004 },
            { lat: -35.2019315188537, lng: 174.30055798751732 },
            { lat: -35.20189645162549, lng: 174.30004300338646 },
            { lat: -35.20172111525732, lng: 174.29969968063256 },
            { lat: -35.20172111525732, lng: 174.29914178115746 },
            { lat: -35.20161591325472, lng: 174.29866971237084 },
            { lat: -35.20165098060406, lng: 174.29824055892846 },
            { lat: -35.20140550884072, lng: 174.29789723617455 },
            { lat: -35.20105483360609, lng: 174.2975109980764 },
            { lat: -35.201265238928556, lng: 174.29686726791283 },
            { lat: -35.20161591325472, lng: 174.2968243525686 },
            { lat: -35.20217698902722, lng: 174.29673852188012 },
            { lat: -35.2027029940436, lng: 174.29673852188012 },
            { lat: -35.20308872889039, lng: 174.29686726791283 },
            { lat: -35.20308872889039, lng: 174.29630936843773 },
            { lat: -35.20336926217367, lng: 174.29579438430687 },
            { lat: -35.203509528451924, lng: 174.2953652308645 },
            { lat: -35.203509528451924, lng: 174.29454983932396 },
            { lat: -35.20301859541816, lng: 174.29416360122582 },
            { lat: -35.20259779331286, lng: 174.2929190562429 },
            { lat: -35.2019315188537, lng: 174.29240407211205 },
            { lat: -35.201580845890234, lng: 174.2920178340139 },
            { lat: -35.20161591325472, lng: 174.29167451126 },
            { lat: -35.202071787615125, lng: 174.29154576522728 },
            { lat: -35.20175618256124, lng: 174.29120244247338 },
            { lat: -35.202387391442585, lng: 174.29103078109642 },
            { lat: -35.202106854767635, lng: 174.29047288162133 },
            { lat: -35.201580845890234, lng: 174.2902153895559 },
            { lat: -35.20116003633546, lng: 174.28995789749047 },
            { lat: -35.20165098060406, lng: 174.28957165939232 },
            { lat: -35.20196658606677, lng: 174.28918542129418 },
            { lat: -35.20242245845882, lng: 174.28935708267113 },
            { lat: -35.20284326147259, lng: 174.28961457473656 },
            { lat: -35.203474461905074, lng: 174.2890995906057 },
            { lat: -35.204175789965184, lng: 174.2890995906057 },
            { lat: -35.20435112103386, lng: 174.28871335250756 },
            { lat: -35.20059895353749, lng: 174.2879837916555 },
            { lat: -35.189166047519365, lng: 174.29163159591576 },
          ]),
          date_placed: '01-12-2010',
          date_lifted: 'This Rāhui is still active',
          authoriser: 'Robert Willoughby',
          contact: '09 403 7012',
          region: JSON.stringify(["Te Tai Tokerau"])
        },
        // {
        //   id: 32,
        //   user_id: 12,
        //   iwi: JSON.stringify(["Ngāti Kahungunu ki Heretaunga Tamatea"]),
        //   hapu: JSON.stringify(["Ngati Kere"]),
        //   description:
        //     "Rahui placed in Central Hawke's Bay coast after man's death",
        //   korero:
        //     "A rahui on collecting seafood has been placed around the Porangahau coastline after the death of a 22-year-old in the water in the area. A police spokesperson said the man was found dead on Tuesday morning after a search for a missing person was started at 8.55pm on Monday evening. The death is being referred to the coroner. The rahui is being imposed by the Ngati Kere Rohe Trust and is from Te Pairahi to Pari o mahu . Seafood gathering is prohibited for three weeks. Source:  New Zealand Herald",
        //   geo_ref: JSON.stringify([{
        //     lat: -40.47671907977636, lng: 176.6390091227281
        //   }, { lat: -40.282138531455324, lng: 176.65274203288436 }, { lat: -40.194079300972945, lng: 176.83401644694686 }, { lat: -40.233929805292064, lng: 176.9685989664781 }, { lat: -40.551889657265036, lng: 176.77908480632186 }, { lat: -40.47671907977636, lng: 176.6390091227281 }
        //   ]),
        //   date_placed: '04-04-2019',
        //   date_lifted: '25-04-2019',
        //   authoriser: 'Rangi Leaf',
        //   contact: 'Not stated',
        //   region: JSON.stringify(["Tākitimu"])
        // },
        {
          id: 33,
          user_id: 13,
          iwi: JSON.stringify(["Ngātiwai"]),
          hapu: JSON.stringify(["Te Whānau a Rangiwhaakahu"]),
          description:
            "Rahūi at Te Wai O Taniwha was (also known as Mermaid Pools) designed to preserve the cultural, ecological and physical environment.",
          korero:
            "The Te Whanau ā Rangiwhakaahu hapū yesterday morning put a rāhui in place over the popular pools at the northern headland of Matapouri and the access route over the Rangitapu headland to restore their environment, cultural and spiritual wellbeing. A ceremony took place at Matapouri Beach at 5am yesterday to bless and dedicate a carved pou before those present went to the local marae to conclude the formalities. the picturesque, turquoise tidal rock pools are enormously popular and draw hundreds of people in a day during long weekends and holidays. Environmentalists, community groups, civic leaders and the local hapū have long been concerned about the degraded state of the pools and the condition of the track. Issues include no provision of basic infrastructure like a proper track, toilets or rubbish disposal facilities and all these will have to be addressed going forward, the hapu said. Hapū trust board chairman Aperahama Edwards said a rāhui should not discourage people from visiting Matapouri and surrounding areas.",
          geo_ref: JSON.stringify([
            // { lat: -35.55578112464781, lng: 174.5075801639855 }, { lat: -35.56157660076433, lng: 174.51556241801381 }, { lat: -35.55878365253887, lng: 174.5185664921105 }, { lat: -35.55396558810553, lng: 174.50989759257436 }, { lat: -35.55578112464781, lng: 174.5075801639855 }
            { lat: -35.55968964729236, lng: 174.51027001361035 },
            { lat: -35.56006495112825, lng: 174.51010908106946 },
            { lat: -35.56023078249592, lng: 174.5101519964137 },
            { lat: -35.560300606127036, lng: 174.5102592847743 },
            { lat: -35.560370429697294, lng: 174.51045240382336 },
            { lat: -35.56042279733509, lng: 174.5107098958888 },
            { lat: -35.56034424586558, lng: 174.5108386419215 },
            { lat: -35.56030933407664, lng: 174.51107467631482 },
            { lat: -35.56030933407664, lng: 174.5113214395442 },
            { lat: -35.5603180620253, lng: 174.51157893160962 },
            { lat: -35.56041406939783, lng: 174.51185788134717 },
            { lat: -35.56041406939783, lng: 174.51209391574048 },
            { lat: -35.560501348727605, lng: 174.51243723849439 },
            { lat: -35.56042279733509, lng: 174.51268400172376 },
            { lat: -35.5603180620253, lng: 174.51308096865796 },
            { lat: -35.5603180620253, lng: 174.51340283373975 },
            { lat: -35.56021332657864, lng: 174.51372469882153 },
            { lat: -35.560073679103525, lng: 174.51401437739514 },
            { lat: -35.560003855274736, lng: 174.51421822528027 },
            { lat: -35.55986420743464, lng: 174.5144220731654 },
            { lat: -35.55969837530849, lng: 174.51444353083753 },
            { lat: -35.55938416612855, lng: 174.51455081919812 },
            { lat: -35.5591572365103, lng: 174.51462592105054 },
            { lat: -35.55886048142467, lng: 174.5144757173457 },
            { lat: -35.55870337534628, lng: 174.51448644618176 },
            { lat: -35.55856372524031, lng: 174.5144757173457 },
            { lat: -35.55832806513475, lng: 174.5144220731654 },
            { lat: -35.55821459891089, lng: 174.51416458109998 },
            { lat: -35.5581622298303, lng: 174.51393927554273 },
            { lat: -35.55814477346251, lng: 174.51370324114941 },
            { lat: -35.558031306979174, lng: 174.51343502024793 },
            { lat: -35.558066219760384, lng: 174.5130702398219 },
            { lat: -35.5581622298303, lng: 174.51276983241223 },
            { lat: -35.558275696128305, lng: 174.51249088267468 },
            { lat: -35.55835424962513, lng: 174.51217974642896 },
            { lat: -35.558389162265684, lng: 174.5119544408717 },
            { lat: -35.558493900096074, lng: 174.51178277949475 },
            { lat: -35.558598637789615, lng: 174.51160038928174 },
            { lat: -35.558720831592424, lng: 174.51140727023267 },
            { lat: -35.55900885910482, lng: 174.5110532186427 },
            { lat: -35.559323069756076, lng: 174.51057042102002 },
          ]),
          date_placed: '19-04-2019',
          date_lifted: 'This Rāhui is still active',
          authoriser: 'Aperahama (Abe) Edwards',
          contact: 'Kensington blvd',
          region: JSON.stringify(["Te Tai Tokerau"])
        }
      ]);
    });
};
/*
    Here's some of the animals featured, in order. Dupes are indented.

    Myotis volans ("long-legged bat")
    Sebastes mystinus (Blue rockfish)
    Sciurus Griseus (gray squirrel, but shows up as a wtf)
    Ciona intestinalis (shows a moth-like creature, but is actually a ascidian (or 'sea squirt'))
        - Myotis Volans ("long-legged bat")
    Ovis dalli (a Dall sheep, but drawn as a steer)
    Cassia occidentalis -- a flower?! -- (on screen as "Crisia occidental", a beetle)
    Chama Arcana (shell)
    Dasypus novemcinctus ("Dasypus Novem", armadillo)
        - Sebastes Mustinus (fish1)
    Vulpes velox (a fox, but shows as a lion)
    Martes pennanti (roo)
    Plethodon dunni ('Dunn's salamander', shows as wtf)
        - Dasypus Novem (armadillo)
    Alopex lagopus (cheetah)
        - Vulpes Velox (lion)
        - Plethodon Dunni (wtf)
        - Sebastes Mustinus (fish1)
    Cancer productus (crab)
    Plethodon Dunni (DUPE, but shows iguana image)
    Plethodon Dunni (DUPE, but shows wtf)
        - Cancer Productus (crab)
        - Sciurus griseus (big sea dick)
        - Dasypus Novem (armadillo)
        - Crisia occidental (beetle?)
    Podiceps auritus (a waterbird, but on screen as a kind of whale)
        - Ciona intestinalis (shows a moth-like creature, but is actually a ascidian (or 'sea squirt'))
        - Plethodon Dunni (DUPE, but shows wtf)
        - Sebastes Mustinus (Redfish)
        - Cancer Productus (crab)
    Coleonyx brevis ("Texas banded gecko", shown on screen as... some kind of... thing)

        - Plethodon Dunni (DUPE, but shows iguana) -- RATE 2
        - Sebastes Mustinus (Redfish)   -- RATE 2
        - Podiceps Auritus (whale?) -- RATE 2
    Tursiops Truncatus (dolphin, written 'Tursiops trncts') -- RATE 2

    Orcinus orca (killer whale) -- RATE 3
    Beardius Bair (???) -- RATE 3
    Ziphius cavirostris -- (Cuvier's beaked whale, written "Ziphius Cavitro") (?) -- RATE 3
    Physeter Macro (sperm whale) -- RATE 3

    Megaptera novaeangliae -- FINAL

    ...it gets a bit messy per-framing it with my copy, so we'll just skip accuracy and improvise where necessary...
*/



// If there's no 'voice' field, the component will pick a random one from `voices.js`, otherwise
// it will use the one provided.

export default {
    'myotis volans': { // long-legged bat
        name: 'Myotis volans',
        image: "./assets/images/myotis-volans.png",
    },
    'sebastes mystinus': { // blue rockfish
        name: 'Sebastes mystinus',
        image: "./assets/images/sebastes-mystinus.png",
    },
    'ciona intestinalis': { // sea vase / ascidian (shown as moth-like creature)
        name: 'Ciona intestinalis',
        image: "./assets/images/ciona-intestinalis.png",
    },
    'ovis dalli': { // dall sheep (steer)
        name: 'Ovis dalli',
        image: "./assets/images/ovis-dalli.png",
    },
    'cassia occidentalis': { // flower?! (now it's a cappy!)
        name: 'Hydrochoerus hydro',
        image: "./assets/images/cassia-occidentalis.png",
    },
    'chama arcana': { // shell
        name: 'Chama Arcana',
        image: "./assets/images/chama-arcana.png",
    },
    'dasypus novemcinctus': { // armadillo
        name: 'Dasypus novemcinctus',
        image: "./assets/images/dasypus-novemcinctus.png",
    },
    'vulpes velox': { // fox (lion)
        name: 'Vulpes velox',
        image: "./assets/images/vulpes-velox.png",
    },
    'martes pennanti': { // fisher (kangaroo)
        name: 'Martes pennanti',
        image: "./assets/images/martes-pennanti.png",
    },
    'plethodon dunni': { // dunn's salamander
        name: 'Plethodon dunni',
        image: "./assets/images/plethodon-dunni.png",
    },
    'alopex lagopus': { // arctic fox (cheetah)
        name: 'Alopex lagopus',
        image: "./assets/images/alopex-lagopus.png",
    },
    'cancer productus': { // red rock crab
        name: 'Cancer productus',
        image: "./assets/images/cancer-productus.png",
    },
    'sciurus griseus': { // squirrel (big sea dick)
        name: 'Sciurus griseus',
        image: "./assets/images/sciurus-griseus.png",
    },
    'podiceps auritus': { // horned grebe (shown as a kind of whale)
        name: 'Podiceps auritus',
        image: "./assets/images/podiceps-auritus.png",
    },
    'coleonyx brevis': { // gecko (uknown creature on-screen)
        name: 'Coleonyx brevis',
        image: "./assets/images/coleonyx-brevis.png",
    },
    'tursiops truncatus': { // bottlenose dolphin (written as 'Tursiops Trncts' on screen)
        name: 'Tursiops Truncatus',
        image: "./assets/images/tursiops-truncatus.png",
        voice: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    'orcinus orca': { // killer whale
        name: 'Orcinus orca',
        image: "./assets/images/orcinus-orca.png",
        voice: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    'beardius bair': { // fixme -- totally not real, or a typo?
        name: 'Berardius bairdii',
        image: "./assets/images/berardius-bairdii.png",
        voice: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    'ziphius cavirostris': { // cuvier's beaked whale (written as 'ziphius cavitro')
        name: 'Ziphius cavirostris',
        image: "./assets/images/ziphius-cavirostris.png",
        voice: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    'physeter macrocephalus': { // sperm whale (written as 'Physeter Macro')
        name: 'Physeter macrocephalus',
        image: "./assets/images/physeter-macrocephalus.png",
        voice: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    'megaptera novaeangliae': { // humpbacked... people?
        name: 'Megaptera novaeangliae',
        image: "./assets/images/megaptera-novaeangliae.png",
        isFinal: true,
        voice: [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
    }
}
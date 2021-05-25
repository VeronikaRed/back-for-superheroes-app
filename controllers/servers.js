let HEROES = [
    {
        id: '1',
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
    {
        id: '2',
        nickname: 'Hulk',
        real_name: 'Robert Bruce Banner',
        origin_description: `In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist.`,
        superpowers:
            'unlimited Strength, superhuman Speed, he Can Leap Across Continents, he Can Breath Underwater, he Can See Ghosts',
        catch_phrase: `'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae odit quam, optio ad vero'`,
        images: []
    },
    {
        id: '3',
        nickname: 'The Winter Soldier',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
    {
        id: '4',
        nickname: 'Aquaman',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
    {
        id: '5',
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
    {
        id: '6',
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
    {
        id: '7',
        nickname: 'Loki',
        real_name: 'Clark Kent',
        origin_description: 'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Kryptons destruction…',
        superpowers:
            'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
        catch_phrase: 'Look, up in the sky, its a bird, its a plane, its Superman!',
        images: []
    },
];

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const preventCORS = (res) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
}

export const getAll = (req, res) => {
    preventCORS(res)
    res.status(200).json(HEROES)
}

export const createHero = (req, res) => {
    const newHero = {
        id: generateId(),
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        origin_description: req.body.origin_description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
        images: req.body.images,
    }
    preventCORS(res)
    HEROES.push(newHero) 
    res.status(200).send(newHero)
}

export const editHero = (req, res) => {
    const hero = HEROES.find(i=>i.id === req.body.id) 
    hero.nickname = req.body.nickname
    hero.real_name = req.body.real_name
    hero.origin_description = req.body.origin_description
    hero.superpowers = req.body.superpowers
    hero.catch_phrase = req.body.catch_phrase
    hero.images = req.body.images
    preventCORS(res)
    res.status(200).send(hero)
}

export const deleteHero = async (req, res) => {
    const heroId = HEROES.findIndex(i=>i.id === req.body.id)
    HEROES.splice(heroId, 1)
    preventCORS(res)
    res.status(200).send('hero')
}

export const getCharacterById = async (req, res) => {
    preventCORS(res)
    res.status(200).json(HEROES.find(i=>i.id === req.body.id))

}
const Hero = require('../Hero')

let hero
let body

describe('Class Hero', () => {
  beforeEach(() => {
    hero = new Hero()
  })

  it('A hero registers', () => {
    body = { name: 'Cornfed', key: '07fc91d5-8d83-4ff4-8ad0-f5c1f81e421e' }

    hero.registerHero(body)

    expect(hero.heroes[0]).toEqual({ key: '07fc91d5-8d83-4ff4-8ad0-f5c1f81e421e', name: 'Cornfed' })
  })
})

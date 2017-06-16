import GenericGame from '../../index'

const gg = new GenericGame()
const error = (err) => console.error(err)
const factory = {
  hero () {
    return new gg.class.Character({
      name: 'Generic hero'
    })
  },
  villian () {
    return new gg.class.Character({
      name: 'Generic villain'
    })
  },
  sword () {
    return new gg.class.Weapon({
      name: 'Great sword',
      type: gg.const.item.EQUIPABLE,
      slotType: {name: 'handheld'},
      attacks: [
        new gg.class.Attack({damage: 10, delay: 100})
      ]
    })
  },
  dagger () {
    return new gg.class.Weapon({
      name: 'Dagger',
      type: gg.const.item.EQUIPABLE,
      slotType: {name: 'handheld'},
      attacks: [
        new gg.class.Attack({damage: 1, delay: 1})
      ]
    })
  },
  helmet () {
    return new gg.class.Vest({
      name: 'Armet',
      slotType: {name: 'helmet'},
      type: gg.const.item.EQUIPABLE,
      effects: [
        new gg.class.Characteristic({name: gg.const.characteristic.DEFENSE, value: 1})
      ]
    })
  }
}

export {
  gg,
  factory,
  error
}

exports.seed = (knex) =>
  knex('things')
    .del()
    .then(() =>
      knex('things').insert([
        {
          name: 'eggshell',
          alt_name: 'egg shell',
          compostable: true,
          foodsafe: false,
          flammable: false,
          notes: 'Crush and spread around seedlings to deter gastropods',
        },
        {
          name: 'egg cartons',
          alt_name: 'egg tray',
          compostable: true,
          foodsafe: true,
          flammable: true,
          notes:
            'Can be used as sound barrier, shredded to add carbon into compost, tinder for a fire, or collected by people who keep their own chickens and like to give eggs away',
        },
        {
          name: 'cardboard',
          alt_name: 'pasteboard',
          compostable: true,
          foodsafe: true,
          flammable: true,
          notes:
            'Sheet mulch in the garden to deter weeds; recycled in many places; remove any cellotape',
        },
        {
          name: 'Tetra pak',
          alt_name: 'tetrapak',
          compostable: false,
          foodsafe: true,
          flammable: false,
          notes: 'Good insulation quality. Rinse well before storing',
        },
        {
          name: 'Paper bags',
          alt_name: 'paper bag',
          compostable: true,
          foodsafe: true,
          flammable: true,
          notes: 'Second hand stores are often happy to collect untorn bags',
        },
        {
          name: 'Soft plastic',
          alt_name: 'packaging',
          compostable: false,
          foodsafe: true,
          flammable: false,
          notes:
            "Check back of package for information or certification to recycle as soft plastic. Local supermarkets may take them if the recycling center doesn't. Best to rinse and dry before disposing",
        },
      ])
    )

/*Copy the empty object with keys below, to manually enter seed data

{ id: uuid(),
  name: '',
  alt_name: '',
  compostable: ,
  foodsafe: ,
  flammable: ,
  notes: '',},

  */

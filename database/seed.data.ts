interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'pending asdasdasdasd adadasdas dasdasdasd asdasdasda dasdwqewqdas',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'in-progress asdasdas 123123 qweqweasd askdqpow kqwekpo12op',
      status: 'in-progress',
      createdAt: Date.now() - 50010,
    },

    {
      description: 'finished a adadasdas d a qw',
      status: 'finished',
      createdAt: Date.now() - 10000000,
    },
  ],
}

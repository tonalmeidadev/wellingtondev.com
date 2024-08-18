export const ptBR = {
  layout: {
    language: '',
    go_back: 'Página anterior',
    go_home: 'Ir para a página inicial',
    available: {
      status: {
        on: 'Aberto para trabalho, entre em contato',
        off: 'Not available for work',
      },
    },
  },

  pages: {
    home: {
      answers: {
        a: `Quero ver o que você está construindo agora`,
        b: `Quero ver seu portfólio`,
        c: `Quero saber mais sobre sua carreira`,
      },
      linkedin: 'Visitar perfil no LinkedIn',
      github: 'Veja mais no meu GitHub',
      schedule: 'Agendar uma reunião no Cal.com',
      skip: 'Pular',
    },

    resume: {
      titles: {
        about: 'Sobre',
      },
      image: {
        alt: 'Foto de Welington tocando piano',
      },
      description:
        'Desenvolvimento de interfaces para web, aplicativos móveis, pwa (progressive web app), apoio em criações de UI/UX.',
      biography: [
        'Olá, sou Wellington, um desenvolvedor Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e que vive em São Paulo.',
        'Sou especializado em criar websites do zero e posso contribuir com projetos desde o design até o código.',
        `Minha meta é sempre estar focado desde os mínimos detalhes e criar soluções funcionais e responsivas onde design, movimento, interação e acessibilidade se integram perfeitamente.`,
      ],
      biography_backup: [
        `Um desenvolvedor um Front-end que aprecia UX e sites acessíveis, constrói produtos digitais e vive em São Paulo, Brasil. Minha primeira conexão com código foi na minha adolescência, me divertia editando templates de Tumblr usando HTML e CSS.`,
        `Ao longo da minha jornada em tecnologia, explorei outras áreas que me permitiram ter mais ampla visão sobre arquitetura e processos de desenvolvimento. Além da codificação, atuei na prototipação e re-design de interfaces, implementei estratégias de SEO, lidei com social media e cooperei em processos de gerenciamento com framework Scrum.`,
        `Minha meta é sempre estar focado desde os mínimos detalhes e criar soluções funcionais e responsivas onde design, movimento, interação e acessibilidade se integram perfeitamente.`,
      ],
    },

    experiences: {
      titles: {
        experiences: 'Experiências',
        volunteering: 'Voluntariado',
        works: 'Trabalhos',
      },

      items: {
        defaults: [
          {
            startDate: `Out'2021`,
            endDate: `O momento`,
            company: 'Freelance',
            occupation: 'Front-end Developer',
          },
          {
            startDate: `Set'2023`,
            endDate: `Abr'2024`,
            company: 'Smartbrain Financial Systems',
            occupation: 'Front-end Developer',
          },
          {
            startDate: `Out'2021`,
            endDate: `Set'2023`,
            company: 'Parxtech Informática',
            occupation: 'Support Analyst',
          },
          {
            startDate: `Nov'2020`,
            endDate: `Set'2021`,
            company: 'Parxtech Informática',
            occupation: 'Front-end Developer',
          },
        ],

        volunteering: [
          {
            startDate: `Jan'2023`,
            endDate: `O momento`,
            company: 'Igreja ADAI',
            occupation: 'Front-end Developer',
          },
        ],
      },
    },

    works: {
      titles: {
        featured: 'Trabalho em destaque',
        featured_error: 'Trabalho em destaque não encontrado ou definido.',
        experiences: 'Experiências',
        works: 'Trabalhos',
        volunteering: 'Voluntariado',
      },

      items: {
        defaults: [
          {
            path: 'https://eba.adai.com.br/',
            startDate: `Mai'2024`,
            endDate: `O momento`,
            company: 'EBA — Escola Bíblica ADAI',
            occupation: 'Front-end Developer',
            featured: {
              cta: 'Visitar',
              description_title: 'Descrição',
              description: `<p>A Escola Bíblica ADAI (EBA) é uma iniciativa dedicada a apoiar e enriquecer a trajetória cristã de cada indivíduo. O objetivo é proporcionar um aprendizado profundo e significativo da Bíblia, ajudando a fortalecer a fé e a caminhada espiritual dos alunos.</p><br /><p>Este projeto envolve a criação de um site institucional com 4 páginas e dois sistemas internos. O primeiro sistema inclui 5 testes de avaliação para os alunos, enquanto o segundo é um dashboard que oferece funcionalidades de pesquisa de turmas e alunos, além de um CRUD para gerenciá-los. Além disso, o dashboard possui uma sala de aula virtual com 2 cursos em vídeo.</p><br /><p>Nesse projeto, atuei principalmente como Front-end Developer, contribuindo também para o desenvolvimento da interface visual (UI) e experiência do usuário (UX).</p>`,
              media: {
                home_title: 'Página inicial',
                test_title: 'Teste de avaliação dos alunos',
                dashboard_title: 'Painel de Controle',
                classrom_title: 'Sala Virtual',
              },
            },
          },
          {
            path: 'https://banco.bradesco/html/classic/produtos-servicos/investimentos/investmais.shtm',
            startDate: `Set'2023`,
            endDate: `Abr'2024`,
            company: 'Invest+ Bradesco',
            occupation: 'Front-end Developer',
          },
          {
            path: 'https://cadastro.agorainvest.com.br/dados-acesso',
            startDate: `Set'2023`,
            endDate: `Abr'2024`,
            company: 'Ágora Investimentos',
            occupation: 'Front-end Developer',
          },
          {
            path: 'https://parxtech.com.br/',
            startDate: `Fev'2021`,
            endDate: `Mar'2021`,
            company: 'Parxtech Website',
            occupation: 'Front-end Developer',
          },
          {
            path: '/',
            startDate: `Jan'2021`,
            endDate: `Pausado`,
            company: 'Escola Pequeno Marujo',
            occupation: 'Front-end Developer',
          },
        ],

        volunteering: [
          {
            path: 'https://www.adai.com.br/',
            startDate: `Jan'2023`,
            endDate: `O momento`,
            company: 'Igreja ADAI',
            occupation: 'Front-end Developer',
          },
          {
            path: 'https://www.movimentoflores.com.br/',
            startDate: `Jan'2023`,
            endDate: `Current`,
            company: 'Movimento Flores',
            occupation: 'Front-end Developer',
          },
        ],
      },
    },
  },
}

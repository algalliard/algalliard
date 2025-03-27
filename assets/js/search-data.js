// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/algalliard/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/algalliard/blog/";
          },
        },{id: "nav-publicaciones",
          title: "publicaciones",
          description: "Publicaciones científicas por catogorías organizadas por fecha de publicación.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/algalliard/publications/";
          },
        },{id: "nav-proyectos",
          title: "proyectos",
          description: "Lista de proyectos científicos liderados y en los que he participado.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/algalliard/projects/";
          },
        },{id: "nav-docencia-y-divulgación",
          title: "docencia y divulgación",
          description: "Docencia y eventos de divulgación impartidos en universidades y organizaciones públicas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/algalliard/teaching/";
          },
        },{id: "post-a-simple-test-post",
        
          title: "A simple test post",
        
        description: "Post test",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/algalliard/blog/2025/formatting-and-links/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/algalliard/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/algalliard/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-programa-momentum-csic",
          title: 'Programa MOMENTUM - CSIC',
          description: "Proyecto Momentum - Identificación de determinantes genéticos y epigenéticos en la resistencia al estrés epigenético en cáncer.",
          section: "Projects",handler: () => {
              window.location.href = "/algalliard/projects/1_project/";
            },},{id: "projects-uniti-unification-of-treatments-and-interventions-for-tinnitus-patients",
          title: 'UNITI Unification of treatments and Interventions for Tinnitus patients',
          description: "Participación en el Proyecto Europeo UNITI.",
          section: "Projects",handler: () => {
              window.location.href = "/algalliard/projects/3_project/";
            },},{id: "projects-trasfondo-genético-de-la-enfermedad-de-ménière",
          title: 'Trasfondo genético de la enfermedad de Ménière',
          description: "Participación en proyectos de investigación para la búsqueda de marcadores genéticos relacionados con la aparición y evolución de la enfermedad de Ménière.",
          section: "Projects",handler: () => {
              window.location.href = "/algalliard/projects/4_project/";
            },},{id: "projects-estudio-permanente-de-funcionamiento-operativo-de-un-gato-en-particular",
          title: 'Estudio permanente de funcionamiento operativo de un gato en particular',
          description: "También conocido como Mochi",
          section: "Projects",handler: () => {
              window.location.href = "/algalliard/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%76%61%72%6F.%67%61%6C%6C%65%67%6F@%63%61%62%69%6D%65%72.%65%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/algalliard", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6068-8965", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/NnBP1C0AAAAJ/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile//", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/algalliard/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NnBP1C0AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=5719208312", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/gallegomics", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

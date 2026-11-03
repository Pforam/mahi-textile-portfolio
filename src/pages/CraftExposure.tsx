import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

type CraftBlog = {
  craft: string
  place: string
  title: string
  subtitle: string
  article: string[]
  closing: string
  galleryLabels: string[]
  images: string[]
}

const exposureData: Record<string, CraftBlog> = {
  'maheshwari-weaving': {
    craft: 'Maheshwari Weaving',
    place: 'Maheshwar, Madhya Pradesh',
    title: 'Beyond the Loom',
    subtitle: 'Understanding Maheshwari Weaving Through Craft, People and Practice',
    article: [
      'Some crafts are understood through books, some through observation, but some can only truly be understood when you spend time with the people who keep them alive.',
      'My journey with Maheshwari weaving began as part of my Craft Research and Documentation Project (CRD), under my academic courses, taking me to Maheshwar, Madhya Pradesh, for a 10-day field study. What initially started as an academic exploration gradually became a much more personal experience of understanding textiles, people, processes and the relationship between design and craftsmanship.',
      'Maheshwar introduced me to a world where every thread carries a history, every motif has a language, and every woven structure reflects generations of knowledge.',
      'During my field visit, I explored different parts of the Maheshwar handloom cluster, interacting with artisans and visiting organisations including Rehwa Society, Nisha Handloom, WomenWeave (Gudi Mudi), Kala Swaraj and Tana Bana Handloom.',
      'Each interaction offered a different perspective on the craft and its ecosystem. I observed the working environments, understood the organisation of production, studied the tools and materials, and documented the processes involved in transforming yarn into fabric.',
      'I was particularly interested in understanding the relationship between the weaver, the loom and the design. It was fascinating to see how a design idea gradually takes shape through technical knowledge, experience and the rhythm of weaving.',
      'One of the most interesting parts of my research was studying the visual and material vocabulary of Maheshwari textiles. I explored the use of silk-cotton blends, zari, traditional borders, butis and geometric compositions. Motifs such as Ankh, Muthda and Kangoora introduced me to a distinctive design language that has been carried forward through generations.',
      'I studied the construction of woven patterns, the placement of motifs, the use of extra-weft techniques and the relationship between colour, texture and structure.',
      'What interested me most was how traditional design elements could retain their identity while finding relevance in contemporary textile applications.',
      'The most significant shift in this project happened when my role moved beyond observation and documentation.',
      'As an on-field designer in our Craft based Design Project(CDP), I got an opportunity to engage more closely with the craft process and develop products through actual production.',
      'This experience changed the way I approached design. Instead of treating a design as a finished idea that simply needed to be translated onto fabric, I began looking at it as a process of negotiation between creativity, material, technique and production.',
      'Working in the craft environment made me more conscious of practical considerations. A design had to be understood in terms of its construction, weaving possibilities and compatibility with the existing production process. It taught me to think beyond the visual outcome and consider how a design would actually come alive on the loom.',
      'Perhaps the most valuable part of my experience was the opportunity to interact with the people behind the craft.',
      'Observing artisans at work gave me an appreciation for the amount of skill, patience and decision-making involved in weaving. Much of this knowledge is experiential, developed through years of practice and passed down through working relationships and everyday interactions.',
      'I realised that craft documentation is not just about recording techniques, tools and processes. It is equally about understanding the people, their knowledge systems, their working conditions and the circumstances in which a craft continues to exist.',
      'These interactions helped me look at traditional crafts from a more informed perspective, moving beyond their aesthetic appeal to understand their cultural and practical significance.',
      'Maheshwar taught me to slow down and observe before designing.',
      'It made me realise that creativity in craft-based design is not always about introducing something entirely new. Sometimes, it lies in recognising the potential of an existing technique, understanding its limitations and exploring possibilities within it.',
      'I learned the importance of material sensitivity, process-led thinking, artisan collaboration and designing with production in mind.',
      'Most importantly, I understood that preserving a craft does not necessarily mean keeping it unchanged. It also means creating opportunities for traditional knowledge to evolve, adapt and find relevance in contemporary contexts without losing its identity.',
      'Looking back, Maheshwari weaving was much more than an academic documentation exercise for me. It was an opportunity to experience the craft from multiple perspectives; as a researcher, an observer and an on-field designer.',
      'It strengthened my interest in traditional Indian crafts and reinforced my belief in the possibilities of bringing craft knowledge into contemporary design practice.',
      'I continue to carry this experience into the way I approach textiles: with curiosity towards materials, respect for processes and a constant interest in the stories that surfaces can tell.',
    ],
    closing:
      'Because for me, designing textiles is not just about creating patterns or products. It is about understanding what goes into making them, the hands that create them and the stories that continue to be woven into every thread.',
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'The making process',
      'Details and textures',
      'People and practice',
      'Field observations',
    ],
    images: [
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/.trashed-1754283303-IMG_20250704_151414.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/20260923_152647.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/20260923_180945.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/20260924_110736.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/IMG_8463.JPG',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/IMG_8748.JPG',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/IMG_9418.JPG',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/maheshwar/IMG_20250705_163145.jpg',
    ],
  },

  batik: {
    craft: 'Batik',
    place: 'Ujjain, Madhya Pradesh',
    title: 'Beyond the Wax',
    subtitle: 'Exploring Batik Through Design & Making',
    article: [
      'Some design processes begin with an idea, while others begin with an experiment. My experience with Batik was a combination of both.',
      'As part of a classroom project (collections: Veil of the wild and Parijat), I had the opportunity to explore Batik, a traditional wax-resist dyeing technique, through hands-on experimentation. The project allowed me to engage with the craft beyond theoretical understanding, taking me through the entire journey of developing a collection, from initial concepts and design exploration to on-site production.',
      'My exploration began with understanding the fundamentals of Batik, its resist technique, materials and the possibilities of creating patterns through wax application and dyeing.',
      'I experimented with motifs, compositions, colour combinations and wax application to develop a visual language for my collection. Working directly with the materials helped me understand how the unpredictability of wax, dye penetration and fabric behaviour influence the final outcome.',
      'One of the most rewarding aspects was taking my designs to the production floor. Being involved throughout the process gave me first-hand experience of translating design concepts into actual textile surfaces.',
      'I worked through the stages of wax application, dyeing, layering and finishing, understanding the technical considerations and challenges at each step. It taught me the importance of precision, patience and adaptability while working with a craft-based process.',
      'This project helped me understand that working with a craft is as much about experimentation as it is about respecting the technique.',
      'I learned to embrace unexpected outcomes, work with material limitations and make informed design decisions throughout production.',
      'More than just developing a collection, this experience strengthened my appreciation for process-led design and the possibilities of bringing traditional surface techniques into contemporary textile expressions.',
    ],
    closing:
      'For me, Batik became an exploration of contrasts - wax and dye, control and unpredictability, intention and discovery.',
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'Wax application',
      'Dyeing process',
      'Surface details',
      'Field observations',
    ],
    images: [
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/IMG_20240920_125804.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/IMG_20240920_130243.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/IMG_20240920_141204.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/WhatsApp%20Image%202025-12-17%20at%2003.23.04%20(1).jpeg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/WhatsApp%20Image%202025-12-17%20at%2003.23.04.jpeg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/WhatsApp%20Image%202025-12-17%20at%2003.23.05%20(1).jpeg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/WhatsApp%20Image%202025-12-17%20at%2003.24.01.jpeg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/batik/WhatsApp%20Image%202025-12-17%20at%2003.24.33.jpeg',
    ],
  },

  'zari-zardozi': {
    craft: 'Zari Zardozi',
    place: 'Bhopal, Madhya Pradesh',
    title: 'Threads of Gold',
    subtitle: 'Exploring the Art of Zari & Zardozi',
    article: [
      'Some surfaces catch your attention through colour, while others captivate you through their details. My exploration of Zari and Zardozi began as a classroom project(collection: Vansutra), introducing me to the richness of traditional Indian embroidery and the intricate craftsmanship behind every embellished surface.',
      'The project gave me an opportunity to move beyond visual research and experience the craft through material exploration, hands-on experimentation and design development.',
      'My exploration began with understanding the history, techniques and visual language of Zari and Zardozi. I studied the different materials, tools and embroidery methods used to create intricate surfaces, exploring the relationship between metallic threads, wires, fabric and embellishments.',
      'I became particularly interested in how different materials create variations in texture, dimension, light and reflectivity. Understanding the use of elements such as Dabka, Kasab, Sitara and metallic threads helped me appreciate the technical diversity within traditional Indian embroidery.',
      'Moving from research to practice, I explored different embroidery techniques, motifs, compositions and material combinations. I experimented with the placement of metallic elements, layering of embellishments and variations in stitch techniques to create different surface effects.',
      'Working closely with the materials helped me understand the precision and patience required in hand embroidery. Each experiment brought new possibilities, while also teaching me to work with the limitations of the materials and techniques.',
      'I explored how traditional motifs and embellishment techniques could be interpreted through a contemporary design perspective without losing their original character.',
      'This project taught me to look at embroidery beyond its decorative value. I began appreciating the time, skill and craftsmanship embedded in every detail.',
      'It strengthened my understanding of material selection, surface composition, texture development and the importance of precision in hand processes. Most importantly, it made me realise how traditional embroidery techniques can continue to inspire new design possibilities when approached with curiosity and respect.',
    ],
    closing:
      'For me, Zari and Zardozi are not just about embellishment; they are about the beauty of intricate details, the patience of making and the stories carried through generations of craftsmanship.',
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'Embroidery in progress',
      'Stitches and details',
      'Materials and embellishments',
      'Field observations',
    ],
    images: [
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20231206-WA0032.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20231206-WA0044.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20231206-WA0045%20-%20Copy.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20231206-WA0046.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20260506-WA0004.jpg',
      '/images/skills%20and%20craft/blog%20carousel/blog%20carousal%20move/zardozi/IMG-20231206-WA0024%20-%20Copy.jpg',
    ],
  },
}

export default function CraftExposure() {
  const { slug } = useParams()
  const blog = slug ? exposureData[slug] : undefined

  if (!blog) {
    return (
      <main className="page-main section-wrap">
        <h1>Craft exposure not found.</h1>
        <Link className="text-link" to="/skills">
          Back to Skills & Craft <ArrowUpRight size={14} />
        </Link>
      </main>
    )
  }

  const titleWords = blog.title.split(' ')

  // Duplicate the items to create a seamless continuous carousel.
  const carouselItems = [...blog.images, ...blog.images]

  return (
    <main className="craft-exposure-page">
      <div className="section-wrap">
        {/* 1. Blog title and subtitle */}
        <header className="craft-exposure-header">
          <h1>
            {titleWords.map((word, index) => (
              <span key={`${word}-${index}`}>
                {index === titleWords.length - 1 ? <em>{word}</em> : `${word} `}
              </span>
            ))}
          </h1>
          <p className="craft-exposure-subtitle">{blog.subtitle}</p>

          {/* 2. Craft name and location */}
          <p className="craft-exposure-meta">
            <span className="craft-exposure-meta-name">{blog.craft}</span>
            <span className="craft-exposure-meta-dot" aria-hidden="true">·</span>
            <span>{blog.place}</span>
          </p>
        </header>

        {/* 3. Full article, original paragraph breaks kept */}
        <article className="craft-article">
          {blog.article.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="craft-article-closing">{blog.closing}</p>
        </article>

        {/* 4. Through the lens */}
        <section className="craft-exposure-gallery">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A VISUAL DOCUMENTATION</span>
              <h2>
                Through the <em>lens.</em>
              </h2>
            </div>
          </div>

          {/* 5. Continuously moving image carousel */}
          <div className="craft-marquee">
            <div className="craft-marquee-track">
              {carouselItems.map((image, index) => (
                <div className="craft-marquee-item" key={`${image}-${index}`}>
                  <img
                    src={image}
                    alt={`${blog.craft} documentation ${index + 1}`}
                    className="craft-marquee-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Back to Skills & Craft */}
        <div className="craft-exposure-bottom">
          <Link to="/skills" className="text-link">
            <ArrowLeft size={14} /> Back to Skills & Craft
          </Link>
        </div>
      </div>
    </main>
  )
}

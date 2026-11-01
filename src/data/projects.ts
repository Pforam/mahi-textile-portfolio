export type Project = {
  slug: string
  title: string
  category: string
  eyebrow: string
  summary: string
  description: string
  year?: string
  group?: boolean
  palette: string[]
  sections: { heading: string; body: string; imageLabel: string }[]
}

export const projects: Project[] = [
  {
    slug: 'vansutra', title: 'Vansutra — The Baiga Way', category: 'Surface Design', eyebrow: 'Culture · Nature · Narrative',
    summary: 'A textile exploration inspired by the Baiga community, forest knowledge and the living landscape of Madhya Pradesh.',
    description: 'Vansutra draws from the relationship between the Baiga community and the forests of central India. The project explores forest life, agricultural practices and visual references from Baiga tattoo traditions through motifs, fabric manipulation and textile applications.',
    palette: ['#9b482d', '#d29a57', '#68704c', '#e6d8b9'],
    sections: [
      { heading: 'The starting point', body: 'Research into forest life, agricultural practices and the cultural relationship between people and land informed the visual direction.', imageLabel: 'Research and inspiration imagery' },
      { heading: 'Motif language', body: 'Forest-inspired forms, agricultural references and tattoo-style visual cues were explored through sketches and motif development.', imageLabel: 'Sketches and motif development' },
      { heading: 'Material exploration', body: 'Fabric manipulation and textile applications translate the concept into tactile outcomes, including interior accents such as cushions.', imageLabel: 'Fabric manipulation and final applications' },
    ],
  },
  {
    slug: 'parijat', title: 'Parijat', category: 'Print Design', eyebrow: 'Botanical · Print · Storytelling',
    summary: 'A print collection following the night-flowering jasmine through defiance, surrender and harmony.',
    description: 'Inspired by the night-flowering jasmine, Parijat explores the flower’s journey through three moods: defiance, surrender and harmony. Branching stems, star-like blossoms and foliage become the foundation for a developing print language.',
    group: true, palette: ['#eee4d2', '#d58b8c', '#68745b', '#323b32'],
    sections: [
      { heading: 'Botanical inspiration', body: 'The flower, its branching stems, star-like blossoms and foliage provide the visual vocabulary for the collection.', imageLabel: 'Botanical references and studies' },
      { heading: 'Print development', body: 'Motifs and digital compositions explore the three moods of the flower: defiance, surrender and harmony.', imageLabel: 'Motif development and digital prints' },
      { heading: 'On the body', body: 'The collection explores garment outcomes including shirts, sarees or dresses, and coordinated sets. This was a group assignment.', imageLabel: 'Garment outcomes and colourways' },
    ],
  },
  {
    slug: 'veil-of-the-wild', title: 'Veil of the Wild', category: 'Print Design', eyebrow: 'Fables · Nature · Home textiles',
    summary: 'A fable-inspired textile project exploring courage, compassion, resilience and balance.',
    description: 'Inspired by fables and animals, this project explores ideas of courage, compassion, resilience and balance. The process moves from initial drawings and motif development to digital renderings and a home-textile collection.',
    group: true, palette: ['#b65e3e', '#d7ad70', '#52624d', '#e8dfca'],
    sections: [
      { heading: 'Drawing the story', body: 'Initial drawings and motif development establish the visual world of the project.', imageLabel: 'Initial drawings and motifs' },
      { heading: 'Digital exploration', body: 'Motifs are developed into digital compositions and considered as a coordinated textile direction.', imageLabel: 'Digital renderings and print layouts' },
      { heading: 'Collection outcomes', body: 'The group project includes euro shams, body pillows and a curtain collection.', imageLabel: 'Home textile collection' },
    ],
  },
  {
    slug: 'bhoomiyo', title: 'Bhoomiyo', category: 'Print Design', eyebrow: 'Rural life · Agriculture · Print',
    summary: 'A print project rooted in the soil of India and inspired by farmers and dairymen.',
    description: 'Bhoomiyo pays tribute to often-unseen rural labour and agricultural life. Its visual research draws on agricultural and rural imagery, including Khetdhani and Matodu, and develops these references into main prints, coordinate prints and colourways.',
    palette: ['#a34e32', '#d2a05d', '#6d7250', '#eee1c8'],
    sections: [
      { heading: 'Grounded in everyday life', body: 'Agricultural imagery and the lives of farmers and dairymen form the conceptual foundation.', imageLabel: 'Rural and agricultural research' },
      { heading: 'Motif development', body: 'References such as Khetdhani and Matodu are explored through drawing and print development.', imageLabel: 'Sketches and motif development' },
      { heading: 'Print collection', body: 'Main prints, coordinate prints and colourways bring the project together.', imageLabel: 'Main prints, coordinates and colourways' },
    ],
  },
  {
    slug: 'weave-design', title: 'Weave Design', category: 'Weave Design', eyebrow: 'Structure · Experiment · Material',
    summary: 'An experimental academic weave project that breaks down a burger into visual and structural elements.',
    description: 'Using a burger as an unexpected creative starting point, this academic project breaks the subject into layers: the full burger, vegetables, condiments and bread. These elements become prompts for exploring weave structures.',
    palette: ['#b56a37', '#d9b45f', '#76805a', '#e8d8b7'],
    sections: [
      { heading: 'Deconstructing the subject', body: 'The burger is separated into visual components to explore differences in shape, layering and texture.', imageLabel: 'Concept breakdown and visual references' },
      { heading: 'Structure studies', body: 'Explorations include plain weave, twill, satin, matt or basket, warp rib, weft rib, zig-zag twill, diamond twill and herringbone.', imageLabel: 'Weave structure samples and diagrams' },
      { heading: 'An experimental outcome', body: 'The project presents weave as a way to translate an everyday reference into material structure.', imageLabel: 'Final weave experiments' },
    ],
  },
  {
    slug: 'surface-experiments', title: 'Surface Experiments', category: 'Textile Craft', eyebrow: 'Batik · Tie-dye · Embroidery',
    summary: 'A collection of hands-on explorations in resist, dye, folding, binding and stitch.',
    description: 'A process-led collection of surface design experiments, including batik, tie-dye, embroidery, wax application with brush and tjanting, dye layering, and a range of folding, binding and twisting techniques.',
    palette: ['#a84f34', '#e0b66e', '#596a52', '#e8ddc8'],
    sections: [
      { heading: 'Resist and dye', body: 'Wax application, dye concentration and layering are explored through batik and tie-dye.', imageLabel: 'Batik and tie-dye experiments' },
      { heading: 'Folds and forms', body: 'Accordion folds, spiral patterns, circular patterns, folding, binding and twisting create varied surface effects.', imageLabel: 'Folding, binding and pattern samples' },
      { heading: 'Thread and stitch', body: 'Hand embroidery stitches and thread-on-fabric experiments add another tactile dimension.', imageLabel: 'Embroidery and stitch samples' },
    ],
  },
  {
    slug: 'a-fierce-stole', title: 'A Fierce Stole for Fearless Soul', category: 'Textile Craft', eyebrow: 'Embellishment · Craft · Accessory',
    summary: 'A textile product bringing together a range of surface and handcraft techniques.',
    description: 'This stole combines Chikankari, sequin work, tie-dye, hand batik, Kutchi embroidery, beadwork and crochet tassels in one textile outcome.',
    palette: ['#873e31', '#d2a16b', '#e6d7bd', '#4e5547'],
    sections: [
      { heading: 'A mix of techniques', body: 'The stole brings together embroidery, embellishment, resist dye and crochet details.', imageLabel: 'Technique and material details' },
      { heading: 'Finished textile', body: 'The finished stole is presented as a tactile accessory with layered craft details.', imageLabel: 'Finished stole and close-up details' },
    ],
  },
  {
    slug: 'photography', title: 'Photography', category: 'Photography', eyebrow: 'Product · Conceptual · Observation',
    summary: 'A selection of product and conceptual photography documenting objects, details and moments.',
    description: 'A curated selection of product photography and conceptual shoots, documenting moments and exploring the relationship between objects, composition and visual storytelling.',
    palette: ['#b36d4d', '#d8c6a8', '#72745d', '#3e4039'],
    sections: [
      { heading: 'Product studies', body: 'Product photography focuses on documenting objects and their details.', imageLabel: 'Product photography' },
      { heading: 'Conceptual frames', body: 'Conceptual shoots explore composition and visual storytelling.', imageLabel: 'Conceptual photography' },
    ],
  },
  {
    slug: 'creative-exploration', title: 'Creative Exploration', category: 'Graphic & Product', eyebrow: 'Ideation · Graphic · Visual culture',
    summary: 'A flexible collection of product ideation, packaging, editorial, branding and digital pattern explorations.',
    description: 'A selection of miscellaneous creative work, bringing together product ideation, fashion-related exploration, packaging, magazine and book covers, branding and digital patterns.',
    palette: ['#bd6849', '#d9b16f', '#6b7056', '#e8dfce'],
    sections: [
      { heading: 'Ideas and objects', body: 'Product ideation and fashion-related explorations capture experiments across form and function.', imageLabel: 'Product and fashion explorations' },
      { heading: 'Graphic worlds', body: 'Packaging, magazine and book covers, branding and digital patterns form a varied visual collection.', imageLabel: 'Graphic design and digital patterns' },
    ],
  },
]

export const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

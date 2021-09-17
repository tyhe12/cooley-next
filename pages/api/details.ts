// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import imagesrc from '../../public/testimage.jpg'

// detail: {
//   key: 'string',
//   img: 'string',
//   imgTitle: 'string',
//   title: 'string',
//   description: 'string',
// }

const contents = [
  {
    key: 'bedroom',
    img: imagesrc,
    imgTitle: 'Bedroom Image',
    title: 'Bedrooms & Living Room',
    description:
      'General tidying up, mirrors cleaned, make bed (change linen by request). Dust all accessible surfaces also wipe and clean window sills.',
  },
  {
    key: 'bathroom',
    img: imagesrc,
    imgTitle: 'Bathroom Image',
    title: 'Bathrooms',
    description:
      'Shower/bathtub and tile wall scrubbed clean and disinfected. Toilet scrubbed clean and disinfected including base and behind toilet. Vanity and sink scrubbed clean and disinfected, mirrors cleaned, fixtures cleaned and shined.',
  },
  {
    key: 'kitchen',
    img: imagesrc,
    imgTitle: 'Kitchen Image',
    title: 'Kitchens',
    description:
      'Clean the stovetop and backsplash. Clean and sanitize interior and exterior of microwave. Clean the exterior of appliances, clean and disinfect the sink. Hand-wash and disinfect counters, wipe down table and chairs. Cabinets wiped down. Hand-wipe outside of the trash can.',
  },
  {
    key: 'room',
    img: imagesrc,
    imgTitle: 'Room Image',
    title: 'Every Room',
    description:
      'General tidying up, clean all floor surfaces (vacuum & mop). Dust exposed baseboards and remove smudges from light switch plates. Clean window sills and remove trash and recycling.',
  },
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(contents)
}

export default handler

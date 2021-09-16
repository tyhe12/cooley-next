// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

// service: {
//   key: 'string',
//   title: 'string',
//   subtitle: 'string',
// }

const contents = {
  services: [
    {
      key: 'one-bed',
      title: 'Studio/One Bedroom',
      subtitle: '',
    },
    {
      key: 'two-bed',
      title: 'Two Bedroom',
      subtitle: '',
    },
    {
      key: 'three-bed',
      title: 'Three Bedroom',
      subtitle: '',
    },
    {
      key: 'mid-home',
      title: 'Homes 1000-3000 Sq. ft',
      subtitle: '',
    },
    {
      key: 'large-home',
      title: 'Homes over 3000 Sq. ft',
      subtitle: '',
    },
    {
      key: 'office',
      title: 'Offices',
      subtitle: '',
    },
    {
      key: 'event',
      title: 'Special Event Clean',
      subtitle: '',
    },
    {
      key: 'airbnb',
      title: 'Airbnb Turnover Clean',
      subtitle: '',
    },
    {
      key: 'condo',
      title: 'Condo Association Clean',
      subtitle: '',
    },
    {
      key: 'move',
      title: 'Move In/Out Clean',
      subtitle: 'Prices vary with sizes',
    },
    {
      key: 'room',
      title: 'Individual Room Clean',
      subtitle: 'Prices vary with sizes',
    },
    {
      key: 'salon',
      title: 'Beauty/Barber Shops',
      subtitle: 'Prices vary with sizes',
    },
  ],
  addons: [
    {
      key: 'window',
      title: 'Interior Window Clean',
      subtitle: '',
    },
    {
      key: 'fridge',
      title: 'Interior Refrigerator Clean',
      subtitle: '',
    },
    {
      key: 'oven',
      title: 'Interior Oven Clean',
      subtitle: '',
    },
    {
      key: 'laundry',
      title: 'Laundry - Wash, Dry & Fold',
      subtitle: 'Prices vary with loads',
    },
    {
      key: 'closet',
      title: 'General Closet Organization',
      subtitle: 'Prices vary with sizes',
    },
    {
      key: 'cabinet',
      title: 'General Cabinet Organization',
      subtitle: '',
    },
  ],
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(contents)
}

export default handler

'use client'

import { motion } from 'motion/react'
import Link from 'next/link';
import DecryptedText from '@/components/DecryptedText'

const sampleNews = [
  {
    date: '2025.04.23',
    title: 'not a shirt Nakano オープンのお知らせ',
    link: '#',
  },
  {
    date: '2025.04.21',
    title: 'HAL東京ポップアップオープンのお知らせ',
    link: '#',
  },
  {
    date: '2025.04.10',
    title: '春のセール開催！',
    link: '#',
  }
]

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col md:flex-row justify-between w-full max-w-2xl mx-auto p-8 gap-16'
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 text-2xl md:text-3xl font-bold"
      >
        news
      </motion.h2>
      <ul className='w-full flex flex-col gap-5 md:gap-10 *:w-full *:flex *:flex-col md:*:flex-row *:items-center *:gap-2 md:*:gap-12 **:letter-spacing-wider **:font-sm **:data-date:font-normal **:data-date:w-24 **:data-title:font-bold **:data-title:w-full **:data-title:hover:text-background **:data-title:transition-all'>
        {sampleNews.map((news, index) => (
          <NewsItem key={index} news={news} index={index} />
        ))}
      </ul>
    </motion.div>
  )
}

const NewsItem = ({ news, index }: { news: typeof sampleNews[number], index: number }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
    >
      <h4 data-date>{news.date}</h4>
      <h3 data-title className='relative after:content-[""] after:bg-foreground after:absolute after:left-0 after:top-0 after:h-full after:right-full after:transition-all after:duration-400 hover:after:right-0 after:z-0'>
        <Link href={news.link} className='relative z-10'>
          <DecryptedText text={news.title} animateOn='hover' sequential={true} speed={30} parentClassName='w-full p-2' encryptedClassName='font-normal text-cyan-500'/>
        </Link>
      </h3>
    </motion.li>
  )
}



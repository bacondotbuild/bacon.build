import { type NextPage } from 'next'

import Main from '@/components/design/main'
import Title from '@/components/design/title'
import Page from '@/components/page'

const links = [
  'twitter',
  'github',
  'youtube',
  // 'discord',
  'twitch',
]

const Home: NextPage = () => {
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>bacon.build</Title>
          <p>hi my name is bacon</p>
          <p>and i build things.</p>
          <ul className='space-y-2'>
            {links
              .map(link => ({
                text: link,
                url: `https://${link}.com/${
                  link === 'youtube' ? '@' : ''
                }bacondotbuild`,
              }))
              .map(({ text, url }) => (
                <li key={url}>
                  <a
                    className='text-cb-pink'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Main>
    </Page>
  )
}

export default Home

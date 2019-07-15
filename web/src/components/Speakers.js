import React from 'react'
import styled from 'styled-components'
import Figure from './Figure'
import RainbowWithClicker from './rainbow/RainbowWithClicker'

const InlineRainbow = styled(RainbowWithClicker)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.01;
  z-index: 999;
  transition: 0.2s;
  mix-blend-mode: multiply;
  will-change: transform;
`

const SpeakerPhoto = styled.div`
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1) rotate(-5deg);

    > ${InlineRainbow} {
      opacity: 1;
    }
    > :not(${InlineRainbow}) {
      filter: grayscale(80%);
    }
  }
`

const SpeakersGrid = styled.ul`
  display: grid;
  grid-gap: 40px;
  text-align: center;
  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Unstyled = styled.h3`
  font-size: 1em;
  font-weight: 600;
`

const UnstyledLink = styled.a`
  text-decoration: none;
`

const Speakers = ({ speakers }) => {
  return (
    <SpeakersGrid>
      {speakers.map(human => (
        <li key={human.id}>
          <UnstyledLink
            href={`https://twitter.com/${human.twitterLink}`}
            target="_blank"
            rel="noopener noreferrer"
            title={human.name}
          >
            <SpeakerPhoto>
              <InlineRainbow flag={human.colors} />
              {human.image ? (
                <img width="221" height="221" src={human.image} />
              ) : (
                <Figure node={human.photo} />
              )}
            </SpeakerPhoto>
            <Unstyled>{human.name}</Unstyled>
            {human.location && <Unstyled>{human.location}</Unstyled>}
          </UnstyledLink>
        </li>
      ))}
    </SpeakersGrid>
  )
}

export default Speakers
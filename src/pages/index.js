import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import styled from 'styled-components'
import theme from '../theme'

const ContainerHolder = styled.div`
  background-color: ${theme.colors.background};
  color: ${theme.colors.textYellow};
  width: 100%;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
`

const Section = styled.div`
  background-color: ${theme.colors.background};
  flex: 1;
  margin: ${theme.spaces.large} ${theme.spaces.medium};
  & + & {
    border-left: 1px dashed ${theme.colors.textYellow};
    padding-left: ${theme.spaces.large};
  }
`

const H2 = styled.h2`
  color: ${theme.colors.textWhite};
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${theme.spaces.small} 0;
  text-transform: uppercase;
`

const ButtonLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin-top: 18px;
  padding: 18px 24px;
  color: white;
  background-color: #ff3c3c;
  text-transform: uppercase;
`

const HeroContent = styled.div`
  align-self: center;
  background-color: ${theme.colors.background90};
  color: ${theme.colors.textYellow};
  max-width: 800px;
  margin: ${theme.spaces.large} ${theme.spaces.jumbo};
  padding: ${theme.spaces.large} 6rem;
}
`

// Sized to exactly fit
const DatesAndSocials = styled.div`
  margin: ${theme.spaces.medium} 0;
  padding: ${theme.spaces.medium} 0;
  border-top: 1px dashed ${theme.colors.textYellow};
  border-bottom: 1px dashed ${theme.colors.textYellow};
  text-transform: uppercase;
`

const SocialLink = styled.a`
  color: ${theme.colors.textYellow};
  margin: 0 ${theme.spaces.micro};
`

const EmailSignupForm = styled.div`
  align-item: center;
  display: flex;
  margin-top: ${theme.spaces.small};
`

const EmailFormInput = styled.input`
  flex-grow: 1;
  font-size: ${theme.fontSizes.small};
  padding: ${theme.spaces.small};
`

const EmailFormButton = styled.input`
  background-color: ${theme.colors.textYellow};
  color: ${theme.colors.background};
  font-weight: bold;
  padding: ${theme.spaces.small};
`

const IndexPage = () => (
  <div>
    <Hero>
      <HeroContent>
        <div
          style={{
            fontSize: theme.fontSizes.large,
            marginBottom: theme.spaces.xSmall,
            textTransform: 'uppercase',
          }}
        >
          Announcing
        </div>
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          JSConf: Hawaiʻi
        </h3>
        <DatesAndSocials>
          <span>Feb 7th + 8th 2019</span>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>Honolulu, HI</span>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>
            <SocialLink
              aria-label="Instagram"
              href="https://www.instagram.com/jsconfhi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
            <SocialLink
              aria-label="Twitter"
              href="https://www.twitter.com/jsconfhi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </SocialLink>
            <SocialLink
              aria-label="Facebook"
              href="https://www.facebook.com/JSConfHi"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </SocialLink>
          </span>
        </DatesAndSocials>
        {
          // TODO: Fix this newsletter signup again and deal with styling
        }
        <div class="Hero-newsletter">
          <div id="mc_embed_signup">
            <form
              action="https://twitter.us18.list-manage.com/subscribe/post?u=c9c542019e2372811b2b8cd10&amp;id=affde4125d"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">Sign up for updates</label>
                <EmailSignupForm class="signup-form">
                  <EmailFormInput
                    type="email"
                    placeholder="Email Address"
                    value=""
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                  />
                  <EmailFormButton
                    type="submit"
                    value="Sign up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </EmailSignupForm>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    class="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_c9c542019e2372811b2b8cd10_affde4125d"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          />
        </div>
      </HeroContent>
    </Hero>
    <ContainerHolder>
      <Container>
        <Section>
          <H2>Call for Speakers</H2>
          <p>We will be opening our Call for Speakers in June, 2018!</p>
          <p>
            Read more about our CFP process that is designed to shine the
            spotlight on the latest ideas and future leaders of the JavaScript
            world.
          </p>
          <Button to="/call-for-speakers">Learn More</Button>
        </Section>
        <Section>
          <H2>Sponsorships</H2>
          <p>
            We are currently offering <a href="/sponsors">sponsorship</a>{' '}
            packages for the inauguaral JSConf Hawaii coming February 2019.
            We’re looking forward to working with all of our great sponsors to
            find the best way to connect each of you with our attendees in
            unique and meaningful ways.
          </p>
          <p>
            <a href="mailto:sponsor@jsconfhi.com">Contact us</a> to learn more
            about our available packages!
          </p>
        </Section>
      </Container>
    </ContainerHolder>
  </div>
)

export default IndexPage

import styled from 'styled-components';
import Link from 'next/link';
import LavaLampHeader from './LavaLampHeader';
import Logo from '~/components/layout/Logo';
import { fontSize } from '~/styles/fonts';
import { WHITE, cols, media } from '~/styles/vars';
import { GetStartedLink } from './primatives';

const HomepageLogo = styled(Logo)`
  margin: 0 auto;
  width: 212px;
  height: 48px;
  margin-bottom: 40px;

  ${media.medium`
    width: 120px;
    height: 30px;
    margin-bottom: ${cols(1)};
  `}
`;

const MainLine = styled.h1`
  ${fontSize(28)}
  color: ${WHITE};
  margin-bottom: 12px;

  ${media.medium`
    ${fontSize(24)}
  `}
`;

const SecondaryLine = styled.p`
  ${fontSize(18)}
  color: ${WHITE};
  margin-bottom: 40px;
  line-height: 1.4;

  ${media.medium`
    ${fontSize(14)}
    margin-bottom: ${cols(1)};
  `}
`;

export default () => (
  <LavaLampHeader>
    <HomepageLogo from={WHITE} to={WHITE} />
    <MainLine>The JavaScript motion engine</MainLine>
    <SecondaryLine>Create delightful interactions with input<br />tracking, animations and physics</SecondaryLine>
    <GetStartedLink>
      <Link href="/guides/get-started">
        <a>Get started</a>
      </Link>
    </GetStartedLink>
  </LavaLampHeader>
);

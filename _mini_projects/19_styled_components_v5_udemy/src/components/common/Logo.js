import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.span`
  margin-right: 0.8rem;
  font-size: 2rem;
`;

const LogoContent = styled.span`
  color: ${(p) => p.theme.primaryColor};
  font-weight: 800;
  font-size: 1.85rem;
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon>🐽</LogoIcon>
      <LogoContent>Bacon-ed.</LogoContent>
    </LogoWrapper>
  );
};

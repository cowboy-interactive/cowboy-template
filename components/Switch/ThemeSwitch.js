import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { handleTheme } from "../../utils/functions/handleTheme";
import { sizes, themes } from "../../utils/variables";
import { Sun, Moon } from "react-feather";

export default function ThemeSwitch({ xl, lg, md, sm, xs }) {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      theme={theme}
      themes={themes}
      onClick={() => handleTheme(theme, setTheme)}
    >
      <Toggle theme={theme} themes={themes}>
        {theme == "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Toggle>
    </Switch>
  );
}

const Switch = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.themes[props.theme].secondary};

  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({sm}) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;

const Toggle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.theme == "default" ? "translate(-5px)" : "translate(25px)"};
  background: ${(props) => props.themes[props.theme].secondary};
  color: ${(props) => props.themes[props.theme].primary};
`;

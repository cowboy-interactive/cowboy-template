import Head from "next/head";
import { Button } from "../components/Button/Button";
import { Column } from "../components/Container/Column";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Container/Section";
import { Img } from "../components/Img/Img";
import { Navbar } from "../components/Navbar/Navbar";
import { H1 } from "../components/Text/H1";
import { H2 } from "../components/Text/H2";
import { H3 } from "../components/Text/H3";
import { H4 } from "../components/Text/H4";
import { Text } from "../components/Text/Text";

export default function Home() {
  return (
    <Container xl={"flex-direction: column; overflow: hidden;"}>
      <Section
        xl={"margin: 100px 0 0px 0; padding: 0 10%; align-items: center;"}
        md={"padding: 0 5%;"}
        sm={"flex-direction: column;"}
      >
        <Column>
          <H1
            xl={"max-width: 800px;"}
            lg={"max-width: 600px;"}
            sm={"max-width: 450px;"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            A Fully Customizable Next JS Template
          </H1>
          <Text xl={"max-width: 400px;"}>
            The only template you need. Featuring Next{"\u00A0"}JS, Styled
            {"\u00A0"}Components and Framer{"\u00A0"}Motion.
          </Text>
          <Button
            href="https://github.com/cowboy-interactive/cowboy-template/blob/main/README.md"
            target="_blank"
          >
            Get the Template
          </Button>
        </Column>
        <Img src="/images/render-2.png" xl="width: 650px; height: 650px;"  sm="width: 100%;"/>
      </Section>
    </Container>
  );
}

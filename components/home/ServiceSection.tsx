import { Globe, Cpu, MessageSquare } from "lucide-react";
import { ContentWrapper, Container, Header, GridWrapper } from "../shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "../shared/Text.styled";
import { SmartCard } from "../shared/Cards";

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, performant web applications built with cutting-edge frameworks and best practices." },
  { icon: Cpu, title: "Embedded Systems", desc: "Firmware and hardware integration for IoT devices, microcontrollers, and real-time systems." },
  { icon: MessageSquare, title: "Technical Consulting", desc: "Architecture reviews, tech stack selection, and strategic guidance for engineering teams." },
];

const ServicesSection = () => {
  return (
    <Container 
      id="services" 
      $backgroundColor="linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
    >
      <ContentWrapper>
        <Header>
          <TitleText>
            What I <GradientText>Offer</GradientText>
          </TitleText>
          <NormalText>
            Bridging the gap between software and hardware with end-to-end engineering expertise.
          </NormalText>
        </Header>

        <GridWrapper>
          {services.map((service) => (
            <SmartCard key={service.title} item={service} type="service" />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ServicesSection;

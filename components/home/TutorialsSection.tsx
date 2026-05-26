import { ContentWrapper, Container, Header } from "../shared/Wrappers.styled";
import { TitleText, GradientText, NormalText } from "../shared/Text.styled";
import { GridWrapper } from "../shared/Wrappers.styled";
import { SmartCard } from "../shared/Cards";

const tutorials = [
  { title: "Building a REST API with Node.js & Express", category: "Backend", duration: "12 min read" },
  { title: "Getting Started with STM32 Microcontrollers", category: "Embedded", duration: "18 min read" },
  { title: "React State Management Patterns in 2025", category: "Frontend", duration: "10 min read" },
];

const TutorialsSection = () => {
  return (
    <Container id="tutorials">
      <ContentWrapper>
        <Header>
          <TitleText>
            Tutorials & <GradientText>Courses</GradientText>
          </TitleText>
          <NormalText>
            Sharing knowledge through in-depth guides and practical tutorials.
          </NormalText>
        </Header>

        <GridWrapper>
          {tutorials.map((tutorial) => (
            <SmartCard key={tutorial.title} item={tutorial} type="tutorial" />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default TutorialsSection;

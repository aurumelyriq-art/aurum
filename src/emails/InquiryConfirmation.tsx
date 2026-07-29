import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

export default function InquiryConfirmation({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Preview>We&apos;ve received your message — AURUM ELYRIQ</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={brand}>AURUM&nbsp;ELYRIQ</Text>
          <Hr style={hr} />
          <Heading style={heading}>Thank you, {name}.</Heading>
          <Text style={text}>
            We&apos;ve received your message and a member of our team will be in touch shortly.
            AURUM ELYRIQ conceives, finances, and operates destinations for entertainment,
            leisure, and relaxation — we&apos;d rather have a direct conversation than send a
            deck, and that starts now.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>© AURUM ELYRIQ. Destinations for entertainment, leisure, and relaxation.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#080706",
  fontFamily: "Georgia, 'Times New Roman', serif",
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "0 24px",
};

const brand: React.CSSProperties = {
  color: "#d9b45c",
  letterSpacing: "0.3em",
  fontSize: "13px",
  textTransform: "uppercase",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(244,237,224,0.12)",
  margin: "24px 0",
};

const heading: React.CSSProperties = {
  color: "#f4ede0",
  fontWeight: 400,
  fontSize: "26px",
};

const text: React.CSSProperties = {
  color: "#cbc0a9",
  fontSize: "15px",
  lineHeight: "1.7",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const footer: React.CSSProperties = {
  color: "#867c68",
  fontSize: "11px",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

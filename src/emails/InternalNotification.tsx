import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

type InquiryType = "general" | "investor" | "partnership";

export default function InternalNotification({
  name,
  email,
  phone,
  message,
  type,
}: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  type: InquiryType;
}) {
  const isFlagged = type === "investor" || type === "partnership";
  return (
    <Html>
      <Head />
      <Preview>
        {isFlagged ? `[${type.toUpperCase()}] ` : ""}New inquiry from {name}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={brand}>AURUM&nbsp;ELYRIQ — New Inquiry</Text>
          {isFlagged && <Text style={flag}>{type.toUpperCase()} INQUIRY</Text>}
          <Hr style={hr} />
          <Heading style={heading}>{name}</Heading>
          <Text style={text}>
            <strong>Email:</strong> {email}
            <br />
            {phone && (
              <>
                <strong>Phone:</strong> {phone}
                <br />
              </>
            )}
            <strong>Type:</strong> {type}
          </Text>
          <Hr style={hr} />
          <Text style={text}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#080706",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "0 24px",
};

const brand: React.CSSProperties = {
  color: "#d9b45c",
  letterSpacing: "0.2em",
  fontSize: "12px",
  textTransform: "uppercase",
};

const flag: React.CSSProperties = {
  display: "inline-block",
  color: "#080706",
  backgroundColor: "#d9b45c",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  padding: "4px 10px",
  borderRadius: "2px",
  marginTop: "8px",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(244,237,224,0.12)",
  margin: "20px 0",
};

const heading: React.CSSProperties = {
  color: "#f4ede0",
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontWeight: 400,
  fontSize: "24px",
};

const text: React.CSSProperties = {
  color: "#cbc0a9",
  fontSize: "14px",
  lineHeight: "1.7",
};

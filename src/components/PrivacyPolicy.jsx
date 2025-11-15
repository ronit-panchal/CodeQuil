import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "80px auto 50px",
        padding: "0 20px",
        lineHeight: "1.7",
        fontFamily: "'Orbitron', monospace",
        color: "#fff",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#FFD700", // Yellow highlight for main heading
        }}
      >
        Privacy Policy – CodeQuil
      </h1>

      <Section title="1. Information We Collect">
        <SubSection title="1.1 Personal Information">
          We may collect personal details such as your name, email address, phone
          number, business name, and project details when you contact us or submit
          a form.
        </SubSection>
        <SubSection title="1.2 Business Information">
          Information related to your company, development requirements, design
          needs, or marketing goals.
        </SubSection>
        <SubSection title="1.3 Usage Data">
          Technical information such as IP address, browser type, device
          information, pages visited, and time spent on the site.
        </SubSection>
        <SubSection title="1.4 Cookies & Tracking">
          Cookies help improve user experience, optimize performance, and analyze
          traffic. You may disable cookies anytime via browser settings.
        </SubSection>
      </Section>

      <Section title="2. How We Use Your Information">
        We use your information to deliver our services, communicate about
        projects, enhance user experience, analyze behavior, and meet legal
        obligations.
      </Section>

      <Section title="3. How We Protect Your Information">
        We implement industry-standard security measures to protect your data
        from unauthorized access, alteration, disclosure, or destruction.
      </Section>

      <Section title="4. Sharing of Information">
        We never sell your personal information. We may share it with trusted
        service providers or legal authorities when required.
      </Section>

      <Section title="5. Your Rights & Choices">
        <ul style={{ paddingLeft: "20px", marginTop: 10 }}>
          <li>Request access to your personal data</li>
          <li>Request corrections or deletion</li>
          <li>Opt out of marketing emails</li>
          <li>Disable cookies</li>
        </ul>
      </Section>

      <Section title="6. Third-Party Links">
        Our website may contain external links. We are not responsible for the
        privacy practices or content of third-party sites.
      </Section>

      <Section title="7. Updates to This Policy">
        We may update this policy periodically. All changes will be posted on
        this page with a revised date.
      </Section>


      <hr style={{ margin: "40px 0", borderColor: "#FFD700" }} />

      <h1
        style={{
          fontSize: "28px",
          marginBottom: "10px",
          fontWeight: "700",
          color: "#FFD700",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        Payment, Refund & Project Delivery Policy – CodeQuil
      </h1>

      <Section>
        This policy outlines how payments, project previews, revisions, and refunds are handled at CodeQuil.
      </Section>

      <Section title="1. Project Preview & Initial Approval">
        Before development begins, CodeQuil provides a temporary or preview version of the project. This helps the client understand the structure, layout, and direction of the project. Approval of the preview confirms the project scope and foundational design.
      </Section>

      <Section title="2. Payment Structure">
        <SubSection title="2.1 Advance Payment (50%)">
          A 50% upfront payment is required after the client approves the temporary project. Development work begins only after this advance is received.
        </SubSection>
        <SubSection title="2.2 Final Payment (50%)">
          The remaining 50% is payable upon completion of the project, before final delivery, deployment, or handover of files.
        </SubSection>
      </Section>

      <Section title="3. No-Refund Policy">
        <p>All payments made to CodeQuil are non-refundable. This is because:</p>
        <ul style={{ paddingLeft: "20px", marginTop: 10 }}>
          <li>A preview/temporary project is already shown before payment.</li>
          <li>Significant time and resources are invested from the beginning.</li>
          <li>Revisions are allowed during development.</li>
          <li>Project progress cannot be reversed once started.</li>
        </ul>
        <p>
          Therefore, both advance and final payments are strictly <strong style={{ color: "#FFD700" }}>non-refundable</strong>.
        </p>
      </Section>

      <Section title="4. Revisions & Updates">
        Clients may request reasonable revisions during the development phase. Changes must stay within the agreed project scope. Major modifications, new features, or redesigns may incur additional charges.
      </Section>

      <Section title="5. Final Delivery & Handover">
        Final delivery (deployment, source files, admin access) is provided only after full payment is completed. Delays caused by the client—such as late content, missing information, or approval delays—are not the responsibility of CodeQuil.
      </Section>

      <Section title="6. Ownership Rights">
        Full ownership of the project transfers to the client only after full payment. Until then, all work remains the intellectual property of CodeQuil.
      </Section>

      <Section title="7. Service Limitations">
        CodeQuil is not responsible for issues arising from external factors such as third-party hosting, plugins, APIs, or external service providers. Post-delivery support depends on the client's chosen maintenance plan.
      </Section>
    </div>
  );
}

const Section = ({ children, title }) => (
  <section style={{ marginBottom: "30px" }}>
    {title && (
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#FFD700",
          marginBottom: "10px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
    )}
    <div style={{ fontSize: "16px", fontWeight: "400", color: "#fff" }}>{children}</div>
  </section>
);

const SubSection = ({ children, title }) => (
  <div
    style={{
      marginBottom: "15px",
      paddingLeft: "15px",
      borderLeft: "3px solid #FFD700",
    }}
  >
    {title && (
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#FFD700",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </h3>
    )}
    <div style={{ fontSize: "15px", color: "#fff" }}>{children}</div>
  </div>
);

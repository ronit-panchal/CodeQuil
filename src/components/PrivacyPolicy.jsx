import React from "react";
import "./PolicyBackground.css"; // make sure path is correct

export default function PrivacyPolicy() {
  return (
    <div className="policy-bg">
      {/* Inner container on top of animated background */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "80px auto 60px",
          padding: "0 20px",
          fontFamily:
            "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#E5E7EB",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at top left, #0f172a 0%, #020617 45%, #020617 100%)",
            borderRadius: "24px",
            padding: "40px 30px 45px",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(148, 163, 184, 0.35)",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid rgba(250, 204, 21, 0.35)",
              color: "#FACC15",
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                backgroundColor: "#FACC15",
              }}
            />
            Policy Center
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: "30px",
              marginBottom: "8px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#FDE68A",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#9CA3AF",
              marginBottom: "28px",
            }}
          >
            CodeQuil – Privacy, Payment, Refund & Project Delivery Terms
          </p>

          {/* ---------- PRIVACY POLICY ---------- */}
          <Section title="1. Information We Collect">
            <SubSection title="1.1 Personal Information">
              We may collect personal details such as your name, email address,
              phone number, business name, and project details when you contact
              us or submit a form.
            </SubSection>
            <SubSection title="1.2 Business Information">
              Information related to your company, development requirements,
              design needs, or marketing goals.
            </SubSection>
            <SubSection title="1.3 Usage Data">
              Technical information such as IP address, browser type, device
              information, pages visited, and time spent on the site.
            </SubSection>
            <SubSection title="1.4 Cookies & Tracking">
              Cookies help improve user experience, optimize performance, and
              analyze traffic. You may disable cookies anytime via browser
              settings.
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            We use your information to deliver our services, communicate about
            projects, enhance user experience, analyze behavior, and meet legal
            obligations.
          </Section>

          <Section title="3. How We Protect Your Information">
            We implement industry-standard security measures to protect your
            data from unauthorized access, alteration, disclosure, or
            destruction.
          </Section>

          <Section title="4. Sharing of Information">
            We never sell your personal information. We may share it with
            trusted service providers or legal authorities when required.
          </Section>

          <Section title="5. Your Rights & Choices">
            <ul
              style={{
                paddingLeft: "20px",
                marginTop: 10,
                listStyle: "disc",
                color: "#D1D5DB",
                fontSize: "15px",
              }}
            >
              <li>Request access to your personal data</li>
              <li>Request corrections or deletion</li>
              <li>Opt out of marketing emails</li>
              <li>Disable cookies</li>
            </ul>
          </Section>

          <Section title="6. Third-Party Links">
            Our website may contain external links. We are not responsible for
            the privacy practices or content of third-party sites.
          </Section>

          <Section title="7. Updates to This Policy">
            We may update this policy periodically. All changes will be posted
            on this page with a revised date.
          </Section>

          <hr
            style={{
              margin: "34px 0 28px",
              borderColor: "rgba(55, 65, 81, 0.9)",
              borderTopWidth: "1px",
            }}
          />

          {/* ---------- PAYMENT / REFUND POLICY ---------- */}
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "10px",
              fontWeight: 700,
              color: "#FDE68A",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            Payment, Refund & Project Delivery Policy
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              marginBottom: "24px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            CodeQuil
          </p>

          <Section>
            This policy outlines how payments, project previews, revisions, and
            refunds are handled at CodeQuil.
          </Section>

          <Section title="1. Project Preview & Initial Approval">
            Before development begins, CodeQuil provides a temporary or preview
            version of the project. This helps the client understand the
            structure, layout, and direction of the project. Approval of the
            preview confirms the project scope and foundational design.
          </Section>

          <Section title="2. Payment Structure">
            <SubSection title="2.1 Advance Payment (50%)">
              A 50% upfront payment is required after the client approves the
              temporary project. Development work begins only after this advance
              is received.
            </SubSection>
            <SubSection title="2.2 Final Payment (50%)">
              The remaining 50% is payable upon completion of the project,
              before final delivery, deployment, or handover of files.
            </SubSection>
          </Section>

          <Section title="3. No-Refund Policy">
            <p style={{ marginBottom: 10 }}>
              All payments made to CodeQuil are non-refundable. This is because:
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                marginTop: 0,
                marginBottom: 10,
                listStyle: "disc",
                color: "#D1D5DB",
                fontSize: "15px",
              }}
            >
              <li>A preview/temporary project is already shown before payment.</li>
              <li>Significant time and resources are invested from the beginning.</li>
              <li>Revisions are allowed during development.</li>
              <li>Project progress cannot be reversed once started.</li>
            </ul>
            <p>
              Therefore, both advance and final payments are{" "}
              <strong style={{ color: "#FACC15", fontWeight: 600 }}>
                strictly non-refundable
              </strong>
              .
            </p>
          </Section>

          <Section title="4. Revisions & Updates">
            Clients may request reasonable revisions during the development
            phase. Changes must stay within the agreed project scope. Major
            modifications, new features, or redesigns may incur additional
            charges.
          </Section>

          <Section title="5. Final Delivery & Handover">
            Final delivery (deployment, source files, admin access) is provided
            only after full payment is completed. Delays caused by the client—
            such as late content, missing information, or approval delays—are
            not the responsibility of CodeQuil.
          </Section>

          <Section title="6. Ownership Rights">
            Full ownership of the project transfers to the client only after
            full payment. Until then, all work remains the intellectual property
            of CodeQuil.
          </Section>

          <Section title="7. Service Limitations">
            CodeQuil is not responsible for issues arising from external
            factors such as third-party hosting, plugins, APIs, or external
            service providers. Post-delivery support depends on the client's
            chosen maintenance plan.
          </Section>
        </div>
      </div>
    </div>
  );
}

const Section = ({ children, title }) => (
  <section
    style={{
      marginBottom: "22px",
      padding: "18px 18px 16px",
      borderRadius: "16px",
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      border: "1px solid rgba(55, 65, 81, 0.8)",
    }}
  >
    {title && (
      <h2
        style={{
          fontSize: "17px",
          fontWeight: 600,
          color: "#FCD34D",
          marginBottom: "10px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
    )}
    <div
      style={{
        fontSize: "15px",
        fontWeight: 400,
        color: "#E5E7EB",
        lineHeight: 1.8,
      }}
    >
      {children}
    </div>
  </section>
);

const SubSection = ({ children, title }) => (
  <div
    style={{
      marginBottom: "14px",
      padding: "10px 12px 10px 14px",
      borderRadius: "12px",
      borderLeft: "3px solid #FACC15",
      backgroundColor: "rgba(15, 23, 42, 0.85)",
    }}
  >
    {title && (
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#FDE68A",
          marginBottom: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </h3>
    )}
    <div style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.7 }}>
      {children}
    </div>
  </div>
);

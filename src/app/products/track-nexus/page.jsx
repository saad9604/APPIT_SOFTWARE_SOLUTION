import {
  BenefitTrackNexusData,
  KeyfeaturesHelixAiPharma,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import DailyReportTable from "../../../components/layout/daily-report-table";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import WorldwideTrusted from "../../../components/pages/benefit-grid/worldwide-text";
import CTA from "../../../components/pages/cta";
import TrackNexusFAQ from "../../../components/products/track-nexus/TrackNexusFAQ";
import TrackNexusHero from "../../../components/pages/products/track-nexus/track-nexus-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: 'Stay On Top With The #1 Productivity Tracking Software | TrackNexus',
  description: 'Boost efficiency and accountability with TrackNexus—the leading productivity tracking software for teams. Track time, monitor activity, and optimize performance in real time.',
  keywords: [
    'Time tracking software pricing',
    'Employee time tracking cost',
    'Productivity software pricing',
    'Time tracking tool pricing comparison',
    'Time tracking pricing plans',
    'Cost of the time tracking app'
  ]
};

const sectionsData = [
  {
    title: "Seamless Hybrid & Remote Work Solutions",
    para: `Enhance your desktop monitoring application with AI-powered analytics and security features to optimize productivity and ensure data protection. The system evaluates employee performance through continuous screenshots, activity logs, and app usage, while automatically identifying leave days from login patterns. It generates daily AI-based productivity scores with detailed insights, flags non-work activities, and detects potential data risks such as unauthorized file transfers or emails to personal addresses. Before logging off, users review and submit their daily analytics for managerial approval, promoting transparency and accountability.`,
    image: "/images/work-solution.png",
  },
];
const sectionsData2 = [
  {
    title: "Employee Session Tracking & Leave Detection",
    para: `Track Nexus offers intelligent Login/Logout Detection by logging employee session times to accurately monitor work hours. Any workday without login activity is automatically marked as “Leave,” excluding weekends and recognized company holidays, reducing the need for manual attendance tracking. The system also segments each workday into active, idle, and break periods by analyzing patterns of activity and inactivity. This detailed session segmentation provides valuable insights into work habits, helping managers identify productivity trends, ensure time is spent efficiently, and support employee well-being through balanced work schedules.`,
    image: "/images/nex1.png",
    reverse: true,
  },
  {
    title: "Continuous Screenshot & Activity Analysis",
    para: `Track Nexus features Automated Capture, enabling desktop screenshots to be taken at customizable intervals—typically every 1 to 5 minutes—during active user sessions. These screenshots are processed using advanced AI, including OCR (Optical Character Recognition) and image recognition, to accurately identify open applications, websites, and document types in real time. This allows for deeper insight into how work hours are utilized. The system also performs Timestamp Correlation, aligning each screenshot with activity logs to provide a precise timeline and contextual  understanding of user behavior.This layered approach not only enhances productivity tracking but also strengthens compliance monitoring, offering managers a clear and accountable view of daily work patterns without being overly intrusive.`,
    image: "/images/nex2.png",
  },
  {
    title: "AI-Driven Productivity Scoring",
    para: `Track Nexus uses AI-based classification to categorize activities as productive, unproductive, or neutral, tailored to each employee’s role. Productivity weights are assigned based on task relevance, and an AI Score is calculated using: (∑ “Weighted Productive Activity Time”) ÷ “Total Logged-in Time” × 100. Daily reports include the AI Score, login/logout times, and a breakdown of productive, unproductive, and idle time. Brief AI-generated observations also highlight work patterns or any unusual activity, providing managers with actionable insights.`,
    image: "/images/nex3.png",
    reverse: true,
  },
  {
    title: "Detection of Non-Work Activities",
    para: `Track Nexus employs AI-powered flagging to detect and highlight activities or screenshots that fall outside an employee’s assigned responsibilities—such as accessing social media, streaming sites, or engaging in personal browsing during work hours. When non-work-related activity exceeds a predefined, configurable threshold, the system automatically generates alerts for managers, enabling timely intervention. Authorized users can then review these flagged instances through a centralized dashboard, with tools to annotate and comment for documentation or follow-up action. This process not only reinforces accountability but also supports compliance and performance management by identifying recurring patterns and allowing for corrective measures when needed.`,
    image: "/images/nex4.png",
  },
  {
    title: "Data Privacy, Confidentiality, and Data Leakage Prevention",
    para: `Track Nexus enhances data security by monitoring outgoing emails and file transfers for potential confidentiality risks. It flags and reports when official emails are sent to personal addresses (e.g., Gmail, Yahoo), or when sensitive files are transferred to USB drives, external storage, or attached to emails sent outside the organization. All incidents are logged with details such as user, device, timestamp, and file information. Real-time alerts notify designated managers or security teams, while flagged events are included in daily or weekly reports with export options. Authorized personnel can review, annotate, and take corrective action, and policy enforcement options allow for blocking or quarantining files or emails that breach data transfer rules.`,
    image: "/images/nex5.png",
    reverse: true,
  },
  {
    title: "User Analytics Review and Submission",
    para: `Track Nexus includes a mandatory end-of-day review, requiring users to go through a summary of their daily activity before logging off. This summary includes login/logout times, AI productivity scores, key applications and websites used, flagged non-work activities, and any data privacy incidents. Users must submit the reviewed report for managerial approval. Managers then verify the report for accuracy and compliance, with options to approve or request clarifications. All submissions and approvals are logged to maintain a clear audit trail, ensuring transparency and accountability. This process encourages self-awareness among employees and promotes consistent alignment with organizational policies. It also helps managers identify patterns early and provide timely support or intervention when needed.`,
    image: "/images/nex6.png",
  },
  {
    title: "Reporting and Data Export",
    para: `Track Nexus offers automated day-wise and summary productivity reports that include key metrics such as leave status, AI Score, flagged non-work activities, and any data privacy or confidentiality incidents. These reports provide a comprehensive view of employee performance and compliance. For easy review and documentation, the system supports data export in PDF and CSV formats, enabling seamless integration with internal reporting and audit processes.`,
    image: "/images/nex7.png",
    reverse: true,
  },
  {
    title: "Privacy and Access Controls",
    para: `Track Nexus implements robust role-based access controls to protect sensitive information and maintain organizational security. Access to critical data such as screenshots, flagged activities, email alerts, data transfer logs, and analytics submissions is strictly limited to authorized personnel, such as managers and system administrators. This ensures that only relevant roles can view or act on sensitive insights, reducing the risk of misuse or unauthorized exposure. In addition, all monitoring activities and data handling processes are designed to comply with company privacy policies and adhere to relevant data protection regulations, such as GDPR or HIPAA. This approach not only safeguards employee privacy but also helps organizations maintain compliance, build trust, and uphold ethical monitoring standards.`,
    image: "/images/nex8.png",
  },
];
const sectionsData3 = [
  {
    title: "Implementation Notes",
    para: `• The AI configuration should be modular and adaptable to evolving business rules, departmental needs, and data security policies.
• Collaboration with HR, IT security, and management may be required to refine productivity definitions, leave policies, and data privacy rules.
• Maintain high system performance and data security at all times.`,
    image: "/images/nex9.png",
    reverse: true,
  },
];
const page = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/products/track-nexus/",
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the main objective of this system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The main objective is to use AI-powered analytics and security features to monitor employee productivity, detect non-work activities, ensure data security, and provide transparency through detailed reporting and mandatory review processes.",
                },
              },
              {
                "@type": "Question",
                name: "How does the system track employee productivity?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The system continuously captures screenshots, logs user activities, and records application usage. AI analyzes these inputs to classify activities as productive, unproductive, or neutral, calculates a productivity (AI) score, and provides breakdowns in daily reports.",
                },
              },
              {
                "@type": "Question",
                name: "How does the system identify leave days?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: 'If an employee does not log in at all during a workday (excluding weekends and company holidays), the system automatically marks that day as a "Leave" day in the reports.',
                },
              },
              {
                "@type": "Question",
                name: "How are screenshots and activities used for monitoring?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Screenshots are captured at configurable intervals during active sessions. AI uses OCR and image recognition to analyze screenshots, identifying open applications, websites, and document types. This data is correlated with activity logs for precise time mapping.",
                },
              },
              {
                "@type": "Question",
                name: "What measures are in place to protect data privacy and confidentiality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Track Nexus enhances data security by monitoring outgoing emails and file transfers for potential risks, flagging when official emails are sent to personal addresses or sensitive files are transferred externally. All incidents are logged with comprehensive details and real-time alerts notify designated personnel. The system implements robust role-based access controls to ensure only authorized personnel can view sensitive information.",
                },
              },
              {
                "@type": "Question",
                name: "What kind of reports does Track Nexus generate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Track Nexus offers automated day-wise and summary productivity reports that include key metrics such as leave status, AI Score, flagged non-work activities, and any data privacy incidents. The system supports data export in PDF and CSV formats for seamless integration with internal reporting processes.",
                },
              },
            ],
          }),
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <TrackNexusHero />
      <WorldwideTrusted
        heading={{
          title: "Trusted by over 1,000+ Companies Worldwide",
          highlightText: "1,000+",
        }}
      />
      <Benefits
        data={BenefitTrackNexusData}
        heading={{
          title: "Driving Long-Term Productivity with Sustainable Solutions",
          para: "Reimagine teamwork with Track Nexus – boost productivity, streamline workflows, and ensure accountability anywhere",
          highlightText: "Sustainable Solutions",
        }}
      />
      <ImageWithTextSection sectionsData={sectionsData} />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <DailyReportTable />
      <ImageWithTextSection sectionsData={sectionsData3} />
      <TrackNexusFAQ />
      <CTA />
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default page;

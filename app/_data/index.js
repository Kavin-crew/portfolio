import Link from "next/link";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import { ThreeDMarquee } from "@/app/_components/ui//3d-marquee";
import { workScreenshot, workScreenshotWeaver } from "@/app/_data/contents";

export const timelineData = [
  {
    title: "Mar 2024 - Present",
    content: (
      <div key="2024">
        <HeadingSecondary>
          Web Customization Developer
          <Link href="https://www.yotpo.com/" target="_blank">
            <span className="text-cyan-500"> @ Yotpo</span>
          </Link>
        </HeadingSecondary>
        <Paragraph>
          In my role as a Customizations UGC Developer, I design, develop, and
          implement customized web components that enhance client websites and
          user-generated content experiences. My work involves creating and
          optimizing responsive on-site widgets, email review requests, and
          visual galleries using HTML, CSS, and modern front-end development
          practices. I ensure all deliverables meet high standards of
          performance, accessibility, and cross-browser compatibility.
        </Paragraph>
        <Paragraph>
          Collaborating closely with designers, developers, and clients, I
          translate design specifications into functional, visually consistent
          solutions that align with brand and technical requirements. I manage
          multiple customization requests, maintaining clear communication and
          timely delivery while conducting quality and security assessments to
          ensure code reliability.
        </Paragraph>
        <Paragraph>
          Additionally, I contribute to ongoing improvements in scalability,
          maintainability, and workflow efficiency by researching emerging
          technologies and implementing best practices across projects.
        </Paragraph>

        <ThreeDMarquee items={workScreenshot} />
      </div>
    ),
  },
  {
    title: "Feb 2022 - Jan 2024",
    content: (
      <div key="2022">
        <HeadingSecondary>
          Web Developer ll
          <Link href="https://www.proweaver.com/" target="_blank">
            <span className="text-cyan-500"> @ Proweaver</span>
          </Link>
        </HeadingSecondary>
        <Paragraph>
          I create website pages based on provided design layouts while ensuring
          the continuous upkeep and improvement of existing sites. I accurately
          interpret and implement client instructions, collaborate effectively
          with team members and stakeholders, and resolve any bugs or technical
          issues that arise. Throughout my work, I consistently adhere to
          company standards and guidelines.
        </Paragraph>
        <ThreeDMarquee items={workScreenshotWeaver} />
      </div>
    ),
  },
  {
    title: "Nov 2017 - Mar 2022",
    content: (
      <div key="2017">
        <HeadingSecondary>
          Informatics Analyst l
          <Link
            href="https://www.linkedin.com/company/pmaxglobal"
            target="_blank"
          >
            <span className="text-cyan-500"> @ PMAXGlobal Philippines</span>
          </Link>
        </HeadingSecondary>
        <Paragraph>
          Collected medical documents from various EHR systems and managed
          insurance-related requests while ensuring accuracy through data review
          and supporting internal projects.
        </Paragraph>
      </div>
    ),
  },
];

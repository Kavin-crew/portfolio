import Link from "next/link";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import { ThreeDMarquee } from "@/app/_components/ui//3d-marquee";

// Timeline images
export const workScreenshot = [
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/The-ESAB-Group-Inc-v3-12-15-2025_12_29_AM_e3qmb3_eii8fr.png",
    url: "https://the-esab-group-inc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416326/portfolio-images/Barbara-Sturm-Molecular-Cosmetics-GmbH-DE-v3-12-15-2025_12_41_AM_erutey_rupjce.png",
    url: "https://barbara-sturm-molecular-cosmetics-g-ivory.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416355/portfolio-images/Levlup-v3-12-15-2025_12_42_AM_jpzzcd_bcedh0.png",
    url: "https://levlup-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/Soeju-v3-12-15-2025_12_28_AM_ub927l_gkpxv3.png",
    url: "https://soeju-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Revlon-Consumer-Products-LLC-v3-12-15-2025_12_26_AM_fhvgia_kyv2da.png",
    url: "https://revlon-consumer-products-llc-cremeo.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416353/portfolio-images/GMES-LLC-v3-12-15-2025_12_26_AM_b6fkna_cfl5ue.png",
    url: "https://gmes-llc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416355/portfolio-images/Most-Wanted-B-V-v3-12-15-2025_12_27_AM_xkx9xa_ie0ivc.png",
    url: "https://most-wanted-b-v-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416327/portfolio-images/brainmd-com-v3-12-15-2025_12_31_AM_t0lmop_ljbhoo.png",
    url: "https://brainmd-com-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/SWISS-FOOTCARE-LABORATORIES-v3-12-15-2025_12_32_AM_oxz7ra_ycvq2w.png",
    url: "https://swiss-footcare-laboratories-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416326/portfolio-images/Advanced-Communication-Solutions-Limited-v3-12-21-2025_12_23_AM_mvjvfv_gqipj4.png",
    url: "https://advanced-communication-solutions-li.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Oner-Active-UK-LTD-v3-12-15-2025_12_34_AM_lm0pgz_ccsmkm.png",
    url: "https://oner-active-uk-ltd-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416359/portfolio-images/Patagonia-Chile-v3-12-15-2025_12_34_AM_hp3bvm_hwdbs0.png",
    url: "https://patagonia-chile-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Nectar-Sleep-DreamCloudSleep-CA-v3-12-15-2025_12_23_AM_wzfs9e_hgmunz.png",
    url: "https://nectar-sleep-dream-cloud-sleep-ca-v.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416339/portfolio-images/Courey-Vision-Widget-V3-12-15-2025_12_24_AM_b0khqq_u0gsfx.png",
    url: "https://courey-vision-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Native-Shoes-v3-12-21-2025_12_42_AM_ouhfw6_qnigqv.png",
    url: "https://native-shoes-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Sea-Bags-v3-12-21-2025_12_45_AM_edsh8e_tqr7be.png",
    url: "https://sea-bags-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416362/portfolio-images/Sienasleep-v3-12-21-2025_12_51_AM_yezkqf_jblwkg.png",
    url: "https://nectar-sleep-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Nectar-Sleep-awarasleep-v3-12-15-2025_12_01_AM_tj34i9_zlyfwr.png",
    url: "https://nectar-sleep-awarasleep-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416354/portfolio-images/Helen-of-Troy-Drybar-v3-12-21-2025_01_12_AM_vi6b8p_xzzyq9.png",
    url: "https://helen-of-troy-drybar-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Nexus-Brands-Tatsoul-v3-12-21-2025_01_15_AM_w1h0ot_mgoain.png",
    url: "https://nexus-brands-tatsoul-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Nexus-Brands-Critical-Tattoo-v3-12-15-2025_12_02_AM_eufwkn_z4x1rh.png",
    url: "https://nexus-brands-critical-tattoo-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Revlon-Consumer-Products-LLC-v3-12-15-2025_12_03_AM_ip4mbo_jjozp6.png",
    url: "https://revlon-consumer-products-llc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766417104/portfolio-images/GoPro-v3-11-27-2025_05_44_PM_qlzcuj_qlmelf.png",
    url: "https://go-pro-v3.vercel.app/",
  },
  ////////////////////////////
  // duplicate to fill grid
  ////////////////////////////
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/The-ESAB-Group-Inc-v3-12-15-2025_12_29_AM_e3qmb3_eii8fr.png",
    url: "https://the-esab-group-inc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416326/portfolio-images/Barbara-Sturm-Molecular-Cosmetics-GmbH-DE-v3-12-15-2025_12_41_AM_erutey_rupjce.png",
    url: "https://barbara-sturm-molecular-cosmetics-g-ivory.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/Soeju-v3-12-15-2025_12_28_AM_ub927l_gkpxv3.png",
    url: "https://soeju-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Revlon-Consumer-Products-LLC-v3-12-15-2025_12_26_AM_fhvgia_kyv2da.png",
    url: "https://revlon-consumer-products-llc-cremeo.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416353/portfolio-images/GMES-LLC-v3-12-15-2025_12_26_AM_b6fkna_cfl5ue.png",
    url: "https://gmes-llc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416355/portfolio-images/Most-Wanted-B-V-v3-12-15-2025_12_27_AM_xkx9xa_ie0ivc.png",
    url: "https://most-wanted-b-v-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416327/portfolio-images/brainmd-com-v3-12-15-2025_12_31_AM_t0lmop_ljbhoo.png",
    url: "https://brainmd-com-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416363/portfolio-images/SWISS-FOOTCARE-LABORATORIES-v3-12-15-2025_12_32_AM_oxz7ra_ycvq2w.png",
    url: "https://swiss-footcare-laboratories-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416326/portfolio-images/Advanced-Communication-Solutions-Limited-v3-12-21-2025_12_23_AM_mvjvfv_gqipj4.png",
    url: "https://advanced-communication-solutions-li.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Oner-Active-UK-LTD-v3-12-15-2025_12_34_AM_lm0pgz_ccsmkm.png",
    url: "https://oner-active-uk-ltd-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416359/portfolio-images/Patagonia-Chile-v3-12-15-2025_12_34_AM_hp3bvm_hwdbs0.png",
    url: "https://patagonia-chile-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Nectar-Sleep-DreamCloudSleep-CA-v3-12-15-2025_12_23_AM_wzfs9e_hgmunz.png",
    url: "https://nectar-sleep-dream-cloud-sleep-ca-v.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416339/portfolio-images/Courey-Vision-Widget-V3-12-15-2025_12_24_AM_b0khqq_u0gsfx.png",
    url: "https://courey-vision-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Native-Shoes-v3-12-21-2025_12_42_AM_ouhfw6_qnigqv.png",
    url: "https://native-shoes-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Sea-Bags-v3-12-21-2025_12_45_AM_edsh8e_tqr7be.png",
    url: "https://sea-bags-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416362/portfolio-images/Sienasleep-v3-12-21-2025_12_51_AM_yezkqf_jblwkg.png",
    url: "https://nectar-sleep-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416356/portfolio-images/Nectar-Sleep-awarasleep-v3-12-15-2025_12_01_AM_tj34i9_zlyfwr.png",
    url: "https://nectar-sleep-awarasleep-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416354/portfolio-images/Helen-of-Troy-Drybar-v3-12-21-2025_01_12_AM_vi6b8p_xzzyq9.png",
    url: "https://helen-of-troy-drybar-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Nexus-Brands-Tatsoul-v3-12-21-2025_01_15_AM_w1h0ot_mgoain.png",
    url: "https://nexus-brands-tatsoul-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416358/portfolio-images/Nexus-Brands-Critical-Tattoo-v3-12-15-2025_12_02_AM_eufwkn_z4x1rh.png",
    url: "https://nexus-brands-critical-tattoo-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766416360/portfolio-images/Revlon-Consumer-Products-LLC-v3-12-15-2025_12_03_AM_ip4mbo_jjozp6.png",
    url: "https://revlon-consumer-products-llc-v3.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766417104/portfolio-images/GoPro-v3-11-27-2025_05_44_PM_qlzcuj_qlmelf.png",
    url: "https://go-pro-v3.vercel.app/",
  },
];

export const workScreenshotWeaver = [
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512238/portfolio-images/Designer-Cake-Company-in-FL-ShaCondra-s-Kakes-12-24-2025_01_42_AM_nyjc3j.png",
    url: "https://www.shacondraskakes.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512267/portfolio-images/Home-Health-Care-in-Derry-New-Hampshire-12-24-2025_01_49_AM_aaskqy.png",
    url: "https://www.qualityhhservices.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512467/portfolio-images/Home-Health-Care-Healthcare-Services-12-24-2025_01_53_AM_nxftsb.png",
    url: "https://www.alwcentralcoast.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512523/portfolio-images/Home-Health-Care-in-Ohio-Primary-Home-Care-12-24-2025_01_54_AM_wug734.png",
    url: "https://www.primaryhc.net/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512573/portfolio-images/Adult-Residential-Facility-in-Hemet-California-12-24-2025_01_55_AM_pbhmhf.png",
    url: "https://www.covenantlovingcare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512627/portfolio-images/Intro-Developmental-Disability-Care-in-Ruskin-Florida-12-24-2025_01_56_AM_bcxlba.png",
    url: "https://www.bayareadirectclientcare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512716/portfolio-images/Nonprofit-Organization-in-Brandon-Florida-12-24-2025_01_57_AM_vhl5ai.png",
    url: "https://www.choiceyouthcareservices.org/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512784/portfolio-images/Childcare-in-FL-Kids-R-Kreative-Learning-Center-Inc--12-24-2025_01_59_AM_f4gphz.png",
    url: "https://www.kidsrkreative.org/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512834/portfolio-images/Retail-Pharmacy-in-CT-Professional-Center-Pharmacy-12-24-2025_02_00_AM_jepmfu.png",
    url: "https://www.professionalrxpharmacy.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512888/portfolio-images/Healthcare-Staffing-All-Pro-Healthcare-Staffing-Inc--12-24-2025_02_01_AM_alxhvd.png",
    url: "https://www.allprohealthcarestaffing.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512939/portfolio-images/Columbia-Heights-Minnesota-Legacy-Community-Care-12-24-2025_02_02_AM_fi1eem.png",
    url: "http://www.legacycommunitycare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513007/portfolio-images/Intro-Page-Adult-Family-Home-in-WA-LAVIE-Adult-Family-Home-LLC-12-24-2025_02_03_AM_fdieca.png",
    url: "https://www.lavieafh.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513062/portfolio-images/Home-Health-Care-in-Beachwood-Ohio-12-24-2025_02_04_AM_tnit5b.png",
    url: "https://www.greaterclevelandhhc.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513105/portfolio-images/Integrated-Community-Support-ICS-Services-in-MN-12-24-2025_02_04_AM_mkpgsw.png",
    url: "https://www.humantohumancare.com/",
  },
  ////////////////////////////
  // duplicate to fill grid
  ////////////////////////////
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512238/portfolio-images/Designer-Cake-Company-in-FL-ShaCondra-s-Kakes-12-24-2025_01_42_AM_nyjc3j.png",
    url: "https://www.shacondraskakes.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512267/portfolio-images/Home-Health-Care-in-Derry-New-Hampshire-12-24-2025_01_49_AM_aaskqy.png",
    url: "https://www.qualityhhservices.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512467/portfolio-images/Home-Health-Care-Healthcare-Services-12-24-2025_01_53_AM_nxftsb.png",
    url: "https://www.alwcentralcoast.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512523/portfolio-images/Home-Health-Care-in-Ohio-Primary-Home-Care-12-24-2025_01_54_AM_wug734.png",
    url: "https://www.primaryhc.net/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512573/portfolio-images/Adult-Residential-Facility-in-Hemet-California-12-24-2025_01_55_AM_pbhmhf.png",
    url: "https://www.covenantlovingcare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512627/portfolio-images/Intro-Developmental-Disability-Care-in-Ruskin-Florida-12-24-2025_01_56_AM_bcxlba.png",
    url: "https://www.bayareadirectclientcare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512716/portfolio-images/Nonprofit-Organization-in-Brandon-Florida-12-24-2025_01_57_AM_vhl5ai.png",
    url: "https://www.choiceyouthcareservices.org/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512784/portfolio-images/Childcare-in-FL-Kids-R-Kreative-Learning-Center-Inc--12-24-2025_01_59_AM_f4gphz.png",
    url: "https://www.kidsrkreative.org/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512834/portfolio-images/Retail-Pharmacy-in-CT-Professional-Center-Pharmacy-12-24-2025_02_00_AM_jepmfu.png",
    url: "https://www.professionalrxpharmacy.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512888/portfolio-images/Healthcare-Staffing-All-Pro-Healthcare-Staffing-Inc--12-24-2025_02_01_AM_alxhvd.png",
    url: "https://www.allprohealthcarestaffing.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766512939/portfolio-images/Columbia-Heights-Minnesota-Legacy-Community-Care-12-24-2025_02_02_AM_fi1eem.png",
    url: "http://www.legacycommunitycare.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513007/portfolio-images/Intro-Page-Adult-Family-Home-in-WA-LAVIE-Adult-Family-Home-LLC-12-24-2025_02_03_AM_fdieca.png",
    url: "https://www.lavieafh.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513062/portfolio-images/Home-Health-Care-in-Beachwood-Ohio-12-24-2025_02_04_AM_tnit5b.png",
    url: "https://www.greaterclevelandhhc.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/v1766513105/portfolio-images/Integrated-Community-Support-ICS-Services-in-MN-12-24-2025_02_04_AM_mkpgsw.png",
    url: "https://www.humantohumancare.com/",
  },
];

// Timeline Data
export const timelineData = [
  {
    title: "Dec 2025 - Present",
    content: (
      <div key="2026">
        <HeadingSecondary>Freelance Web Developer</HeadingSecondary>
        <Paragraph>
          I build and maintain WordPress websites using Elementor, supported by
          hands-on coding experience in HTML, CSS, and JavaScript. My recent
          projects include replicating reference websites, managing content
          updates, configuring redirects and hosting settings on Hostinger,
          implementing SEO meta titles and descriptions, and adding custom
          schema tags to improve search visibility. I prioritize responsive
          design, clean structure, and reliable performance for every project.
        </Paragraph>
      </div>
    ),
  },
  {
    title: "Mar 2024 - Jan 2026",
    content: (
      <div key="2024">
        <HeadingSecondary>
          Web Customization Developer
          <Link href="https://www.yotpo.com/" target="_blank">
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ Yotpo
            </span>
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

        <h3 className="text-lg font-semibold mb-5 text-zinc-800 dark:text-zinc-100">
          Career Highlights
        </h3>
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
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ Proweaver
            </span>
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
        <h3 className="text-lg font-semibold mb-5 text-zinc-800 dark:text-zinc-100">
          Career Highlights
        </h3>
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
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ PMAXGlobal Philippines
            </span>
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

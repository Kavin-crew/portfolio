import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import {
  FaAward, // Classic award/badge icon
  FaTrophy, // Trophy symbol
  FaMedal, // Medal icon
  FaCertificate, // Certificate / accomplishment document
  FaStar, // Star (generic recognition)
  FaStarHalfAlt, // Half star (optional rating)
  FaStarOfLife, // Special star/importance
} from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
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

// Navigation Items
export const navItems = [
  {
    name: "About",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <UserIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Milestone",
    link: "#milestone",
    icon: <TrophyIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <PhoneIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
];

// Hero Social Links
export const heroContent = [
  {
    socialLinks: "facebook",
    link: "https://www.facebook.com/kavin.abregana.31",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-violet-500 transition group-hover:fill-violet-400 dark:fill-violet-300 dark:group-hover:fill-violet-200"
      >
        <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
      </svg>
    ),
  },
  {
    socialLinks: "github",
    link: "https://github.com/Kavin-crew/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-violet-500 transition group-hover:fill-violet-400 dark:fill-violet-300 dark:group-hover:fill-violet-200"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
        ></path>
      </svg>
    ),
  },
  {
    socialLinks: "linkedin",
    link: "https://www.linkedin.com/in/kavin-abregana/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-violet-500 transition group-hover:fill-violet-400 dark:fill-violet-300 dark:group-hover:fill-violet-200"
      >
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
      </svg>
    ),
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

export const cardsAwards = [
  {
    title: "Top Performer",
    description: "2024 - 2025",
    icon: <FaAward className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/achievements-yotpo_y23f20.jpg",
    content:
      "As I wrap up my time at Yotpo, I wanted to take a moment to reflect on a chapter that truly shaped me—not just as a developer, but as a professional. I recently received a formal certification summarizing my performance rankings throughout my entire tenure, and I’m incredibly proud and humbled to share these results",
  },
  {
    title: "Top Performer",
    description: "November 2022",
    icon: <FaTrophy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Nov_-_2022_bllx54.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate in alignment with KPI requirements.",
  },
  {
    title: "Top Performer",
    description: "October 2022",
    icon: <FaTrophy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Oct_-_2022_cert_hxkx1b.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate in alignment with KPI requirements.",
  },
  {
    title: "WordPress Ace Developer",
    description: "February 2023",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/Feb_2023_acpv33.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },

  {
    title: "WordPress Ace Developer",
    description: "October 2022",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Oct_2022_mxtur9.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },
  {
    title: "WordPress Ace Developer",
    description: "September 2022",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/Sept_2022_cd7uq8.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },
];

export const trainingCertifications = [
  {
    title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    description: "February 2024",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/React-2024_eiquva.jpg",
    content:
      "A complete, project-driven React development course that took me from beginner to advanced proficiency. I mastered modern React workflows, Next.js (App Router & Server Components), Redux state management, performance patterns, and practical app features — all through building multiple real-world applications.",
  },
  {
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    description: "September 2023",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/JS-2023_ai0mih.jpg",
    content:
      "A complete, project-based JavaScript course that built my skills from beginner to expert level — covering modern syntax, advanced patterns, asynchronous programming, debugging, and real-world application development. This foundation equips me to build dynamic user interfaces and progress into advanced front-end technologies with confidence.",
  },
  {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    description: "September 2023",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/SCSS-2023_kcevdp.jpg",
    content:
      "An advanced CSS certification focused on modern styling techniques — Flexbox, CSS Grid, animations, and SCSS — with real-world project applications. This course deepened my understanding of responsive layout systems and scalable CSS architecture, empowering me to build polished, production-ready user interfaces.",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    description: "November 2021",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/HTML_CSS_-_2021_u6buhq.jpg",
    content:
      "A project-based course that taught me how to build responsive, real-world websites using semantic HTML and modern CSS layout techniques like Flexbox and Grid. This strengthened my ability to create accessible, adaptive user interfaces and solidified core front-end fundamentals.",
  },
  {
    title: "2-Day Web Development Training",
    description: "November 2021",
    icon: <FaStarOfLife className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/Nov-2021_cert_cstyh4.jpg",
    content:
      "Completed a 2-day intensive training focused on converting website designs into fully responsive, industry-standard websites using WordPress Divi. Gained hands-on experience translating UI layouts into optimized, mobile-friendly pages with real-world build practices.",
  },
];

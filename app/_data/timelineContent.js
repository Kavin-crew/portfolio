import Link from "next/link";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import HeadingTertiary from "@/app/_components/HeadingTertiary";
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

export const workScreenshotFreelance = [
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578128/portfolio-images/VMG_cqiiou.webp",
    url: "https://vintagemarinegraphics.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578166/portfolio-images/Triple_J_xjzdib.webp",
    url: "https://triplejconstructionservices.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578140/portfolio-images/Vintagesigns_pn1tel.webp",
    url: "https://vintagesignandlight.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578155/portfolio-images/Vintagewraps_tmrl58.webp",
    url: "https://vintagewraps.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578188/portfolio-images/Shymsaunas_sfmhwf.webp",
    url: "https://shymsaunas.com.au/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578279/portfolio-images/FAC_mqtny8.webp",
    url: "https://flawlessaesthetics.com.au/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578264/portfolio-images/Dixon_motors_i15upl.webp",
    url: "https://dixonmotorsports.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578208/portfolio-images/TJY_law_ziml3f.webp",
    url: "https://tjylaw.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578303/portfolio-images/Flexstaff_ifua9t.webp",
    url: "https://flexstaffapp.wpenginepowered.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776579643/portfolio-images/Fence_Fenders_f43drl.webp",
    url: "https://powderblue-emu-898991.hostingersite.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578179/portfolio-images/USsweeteners_nfexsg.webp",
    url: "https://www.ussweeteners.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578247/portfolio-images/Integral_product_services_etrppw.webp",
    url: "https://integralproductservices.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578198/portfolio-images/Steps2life_ixme66.webp",
    url: "https://staging.steps2life.com.au/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578236/portfolio-images/lighterUSA_xs7yws.webp",
    url: "https://lighterusa.net/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776576255/portfolio-images/ctrlshiftapp_g0cn9v.webp",
    url: "https://ctrlshiftapp.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776578225/portfolio-images/Jump_spike_trainer_j57rkb.webp",
    url: "https://jumpspiketrainer.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776575973/portfolio-images/Chitchat_rl7lyn.webp",
    url: "https://chitchatmarketingllc.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776579642/portfolio-images/American_home_buid0o.webp",
    url: "https://njahc.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776579643/portfolio-images/Fridayapp_ay4bco.webp",
    url: "https://fridayapp.com/",
  },
  {
    image:
      "https://res.cloudinary.com/kavin-crew/image/upload/q_auto/f_auto/v1776579765/portfolio-images/Rydronix_imn7hk.webp",
    url: "https://palevioletred-kudu-462286.hostingersite.com/",
  },
];

// Timeline Data
export const timelineData = [
  {
    title: "May 2026 - Present",
    content: (
      <div key="present">
        <h2 className="mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ">
          Part-time Web Customization
          <Link href="https://monx.team/" target="_blank">
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ CyberMonx
            </span>
          </Link>
        </h2>
        <Paragraph>
          Focusing on building, optimizing, and maintaining WordPress websites
          using Elementor. Managed hosting environments across platforms like
          Hostinger and Cloudways, ensuring reliable performance and smooth
          deployments. Handled ongoing site improvements, documentation, and
          troubleshooting to deliver fast, secure, and user-friendly web
          experiences.
        </Paragraph>
      </div>
    ),
  },
  {
    title: "Dec 2025 - April 2026",
    content: (
      <div key="2026">
        <h2 className="mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ">
          Web Developer (Freelance Team Collaboration)
        </h2>
        <Paragraph>
          Build and maintain responsive WordPress websites using Elementor,
          focusing on SEO, performance, and user experience. Work alongside a
          freelance team to deliver customized solutions, optimize site
          structure, and ensure long-term scalability and reliability.
        </Paragraph>

        <h3 className="text-lg font-semibold mb-5 text-zinc-800 dark:text-zinc-100">
          Career Highlights
        </h3>
        <Paragraph>
          A curated selection of impactful projects I’ve contributed to,
          showcasing my ability to translate client requirements into refined,
          user-centric web experiences that drive engagement and results.
        </Paragraph>
        <ThreeDMarquee items={workScreenshotFreelance} />
      </div>
    ),
  },
  {
    title: "Mar 2024 - Jan 2026",
    content: (
      <div key="2024">
        <h2 className="mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ">
          Web Customization Developer
          <Link href="https://www.yotpo.com/" target="_blank">
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ Yotpo
            </span>
          </Link>
        </h2>
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
        <Paragraph>
          A selection of impactful projects I contributed to during my tenure,
          demonstrating my ability to turn requirements into polished,
          user-focused web experiences.
        </Paragraph>
        <ThreeDMarquee items={workScreenshot} />
      </div>
    ),
  },
  {
    title: "Feb 2022 - Jan 2024",
    content: (
      <div key="2022">
        <h2 className="mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ">
          Web Developer ll
          <Link href="https://www.proweaver.com/" target="_blank">
            <span className="text-violet-400 dark:text-via-violet-300">
              {" "}
              @ Proweaver
            </span>
          </Link>
        </h2>
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
        <Paragraph>
          This section features the projects that defined my journey within the
          company—highlighting challenges solved, skills refined, and
          contributions to products used by real users.
        </Paragraph>
        <ThreeDMarquee items={workScreenshotWeaver} />
      </div>
    ),
  },
  {
    title: "Nov 2017 - Mar 2022",
    content: (
      <div key="2017">
        <h2 className="mb-8 text-xl md:text-1xl font-bold text-zinc-800 dark:text-zinc-100 ">
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
        </h2>
        <Paragraph>
          Collected medical documents from various EHR systems and managed
          insurance-related requests while ensuring accuracy through data review
          and supporting internal projects.
        </Paragraph>
      </div>
    ),
  },
];

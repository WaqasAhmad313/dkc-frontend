"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  TrendingUp,
  Package,
  Target,
  Zap,
} from "lucide-react";
import Cookies from "js-cookie";
import { useGlobalContext } from "@/context/ScreenProvider";
// Types for Quiz Questions and Results
interface QuizQuestion {
  id: string;
  question: string;
  type: "single" | "multiple" | "yesno";
  options?: string[];
  category: "general" | "vendor" | "buyer" | "validation";
  weight: number;
}

interface QuizResult {
  score: number;
  eligibility: string;
  recommendedTrack: string;
  fastTrackEligible: boolean;
  personalizedMessage: string;
  nextSteps: string[];
  strengths: string[];
  improvements: string[];
}

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export interface DropshippingEligibilityQuizProps {
  partnershipName:
    | "dropshipping"
    | "consignment"
    | "wholesale"
    | "importexport"
    | "exhibition"
    | "auction"
    | "white-label"
    | "brick-mortar"
    | "packaging"
    | "design-collaboration"
    | "storytelling_media"
    | "warehouse"
    | "logistics"
    | "museum_collaboration"
    | "ngo_government"
    | "technology_partnership";
}

export function EligibilityQuiz({
  partnershipName,
}: DropshippingEligibilityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [role, setRole] = useState("vendor");
  const { is4K } = useGlobalContext();

  const containerClass = is4K
    ? "max-w-[1000px] text-xl"
    : "max-w-[800px] text-base";
  const data = quizData[partnershipName];
  const name = data.name

  useEffect(() => {
    const roleFromStorage = Cookies.get("user_role");
    setRole(roleFromStorage || "vendor");
  }, []);
  // Filter questions based on role
  const filteredQuestions = data.questions.filter(
    (q) =>
      q.category === "general" ||
      q.category === role ||
      q.category === "validation"
  );

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const strengths: string[] = [];
    const improvements: string[] = [];
    let eligibility = "";
    let recommendedTrack = "";
    let fastTrackEligible = false;
    let personalizedMessage = "";
    let nextSteps: string[] = [];

    // Calculate score (only from general questions)
    data.questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer !== undefined && question.weight > 0) {
        let questionScore = 0;
        if (question.type === "single") {
          const index = question.options?.indexOf(answer) || 0;
          questionScore = index + 1; // Options are ordered from 1 to 5
        }
        totalScore += questionScore * question.weight;
      }
    });

    const thresholds = Object.keys(data.thresholds)
      .map(Number)
      .sort((a, b) => a - b); // sort ascending: lowest first

    if (totalScore < 10) {
      const lowestThreshold = thresholds[0]; // lowest threshold is now first
      eligibility = data.thresholds[lowestThreshold].eligibility;
      fastTrackEligible = data.thresholds[lowestThreshold].fastTrackEligible;
      recommendedTrack = data.thresholds[lowestThreshold].eligibility;
    } else {
      for (const threshold of thresholds.slice().reverse()) {
        // iterate high to low for normal logic
        if (totalScore >= threshold) {
          eligibility = data.thresholds[threshold].eligibility;
          fastTrackEligible = data.thresholds[threshold].fastTrackEligible;
          recommendedTrack = data.thresholds[threshold].eligibility;
          break;
        }
      }
    }

    // Set personalized message and next steps
    if (partnershipName === "dropshipping") {
      if (totalScore >= 16) {
        personalizedMessage =
          "Outstanding! Your strong fundamentals make you eligible for Consignment via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Connect with premium partners",
          "Access advanced onboarding resources",
          "Schedule consultation with specialists",
        ];
        strengths.push(
          "High-quality standards",
          "Strong authenticity",
          "Excellent customer focus"
        );
      } else if (totalScore >= 11) {
        personalizedMessage =
          "Great potential! You're eligible for Dropshipping with a fast track to Consignment.";
        nextSteps = [
          "Start with Dropshipping Program",
          "Enroll in Readiness Program (RP)",
          "Access training resources",
          "Build initial partner connections",
        ];
        strengths.push("Solid fundamentals", "Growth potential");
        improvements.push("Enhance quality and sustainability");
      } else {
        personalizedMessage =
          "You're ready to start with Dropshipping! Build your foundation for future growth.";
        nextSteps = [
          "Join Dropshipping Program",
          "Access free educational resources",
          "Connect with community support",
          "Build operational capabilities",
        ];
        strengths.push("Entrepreneurial spirit", "Commitment to growth");
        improvements.push(
          "Improve authenticity and quality",
          "Develop fair trade practices"
        );
      }
    } else if (partnershipName === "consignment") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Wholesale via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload consignment compliance documents",
          "Complete KHCRF review",
          "Connect with wholesale partners",
        ];
        strengths.push("Export-ready operations", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Consignment with a fast track to Wholesale.";
        nextSteps = [
          "Join Consignment Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen API/ERP integration",
          "Prepare for wholesale transition",
        ];
        strengths.push("Solid consignment readiness", "Growth potential");
        improvements.push("Enhance operational scale");
      } else {
        personalizedMessage =
          "You're eligible for Consignment! Build your capabilities for higher tiers.";
        nextSteps = [
          "Join Consignment Program",
          "Complete KHCRF orientation",
          "Improve digital integration",
          "Ensure packaging compliance",
        ];
        strengths.push("Commitment to consignment", "Operational foundation");
        improvements.push(
          "Strengthen certifications",
          "Improve inventory systems"
        );
      }
    } else if (partnershipName === "wholesale") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Outstanding! You're eligible for Import & Export via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit bulk order compliance documents",
          "Complete KHCRF packaging audit",
          "Prepare for international markets",
        ];
        strengths.push("Bulk order readiness", "Export compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Wholesale with a fast track to Import & Export.";
        nextSteps = [
          "Join Wholesale Program",
          "Enroll in Readiness Program (RP)",
          "Upgrade ERP/API systems",
          "Build export invoicing capability",
        ];
        strengths.push("Strong wholesale foundation", "Operational scale");
        improvements.push("Enhance export readiness");
      } else {
        personalizedMessage =
          "You're eligible for Wholesale! Strengthen your systems for higher tiers.";
        nextSteps = [
          "Join Wholesale Program",
          "Ensure KHCRF compliance",
          "Automate inventory management",
          "Build bulk packaging capabilities",
        ];
        strengths.push("Wholesale commitment", "Operational capacity");
        improvements.push(
          "Pursue GI/KHCRF certifications",
          "Improve invoicing systems"
        );
      }
    } else if (partnershipName === "importexport") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Exhibition via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit export licenses and GI certification",
          "Complete KHCRF customs review",
          "Prepare for international exhibitions",
        ];
        strengths.push("Global market readiness", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Import & Export with a fast track to Exhibition.";
        nextSteps = [
          "Join Import & Export Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen international logistics",
          "Ensure customs compliance",
        ];
        strengths.push("Export capabilities", "Global potential");
        improvements.push("Enhance logistics partnerships");
      } else {
        personalizedMessage =
          "You're eligible for Import & Export! Build your global capabilities.";
        nextSteps = [
          "Join Import & Export Program",
          "Submit export documentation",
          "Complete KHCRF customs review",
          "Build international warehousing",
        ];
        strengths.push("Commitment to global trade", "Operational foundation");
        improvements.push(
          "Strengthen export licenses",
          "Improve customs compliance"
        );
      }
    } else if (partnershipName === "exhibition") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Auction via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit exhibition participation records",
          "Complete KHCRF product verification",
          "Prepare for live auction events",
        ];
        strengths.push("Global exhibition experience", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Exhibition with a fast track to Auction.";
        nextSteps = [
          "Join Exhibition Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen branding and storytelling",
          "Prepare for auction transition",
        ];
        strengths.push("Solid exhibition foundation", "Global potential");
        improvements.push("Enhance auction readiness");
      } else {
        personalizedMessage =
          "You're eligible for Exhibition! Build your global presence.";
        nextSteps = [
          "Join Exhibition Program",
          "Submit export documentation",
          "Complete KHCRF customs review",
          "Build international warehousing",
        ];
        strengths.push("Commitment to global trade", "Operational foundation");
        improvements.push(
          "Strengthen export licenses",
          "Improve customs compliance"
        );
      }
    } else if (partnershipName === "auction") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for White Label via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit auction sales records",
          "Complete KHCRF white label onboarding",
          "Prepare for private label partnerships",
        ];
        strengths.push("Successful auction sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Auction with a fast track to White Label.";
        nextSteps = [
          "Join Auction Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen branding and packaging",
          "Prepare for white label transition",
        ];
        strengths.push("Solid auction foundation", "Global potential");
        improvements.push("Enhance white label readiness");
      } else {
        personalizedMessage =
          "You're eligible for Auction! Build your premium product listings.";
        nextSteps = [
          "Join Auction Program",
          "Submit auction documentation",
          "Complete KHCRF product verification",
          "Build premium product listings",
        ];
        strengths.push(
          "Commitment to premium products",
          "Operational foundation"
        );
        improvements.push(
          "Strengthen product verification",
          "Improve auction logistics"
        );
      }
    } else if (partnershipName === "white-label") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Brick & Mortar via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit white label sales records",
          "Complete KHCRF retail readiness review",
          "Prepare for US retail placement",
        ];
        strengths.push("Successful white label sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for White Label with a fast track to Brick & Mortar.";
        nextSteps = [
          "Join White Label Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen US retail compliance",
          "Prepare for retail transition",
        ];
        strengths.push("Solid white label foundation", "Global potential");
        improvements.push("Enhance retail readiness");
      } else {
        personalizedMessage =
          "You're eligible for White Label! Build your private label partnerships.";
        nextSteps = [
          "Join White Label Program",
          "Submit white label documentation",
          "Complete KHCRF onboarding review",
          "Build private label partnerships",
        ];
        strengths.push("Commitment to private label", "Operational foundation");
        improvements.push(
          "Strengthen US retail compliance",
          "Improve retail logistics"
        );
      }
    } else if (partnershipName === "brick-mortar") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Packaging via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit retail sales records",
          "Complete KHCRF packaging review",
          "Prepare for packaging partnerships",
        ];
        strengths.push("Successful retail sales", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Brick & Mortar with a fast track to Packaging.";
        nextSteps = [
          "Join Brick & Mortar Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen packaging compliance",
          "Prepare for packaging transition",
        ];
        strengths.push("Solid retail foundation", "Global potential");
        improvements.push("Enhance packaging readiness");
      } else {
        personalizedMessage =
          "You're eligible for Brick & Mortar! Build your US retail presence.";
        nextSteps = [
          "Join Brick & Mortar Program",
          "Submit retail documentation",
          "Complete KHCRF retail readiness review",
          "Build US retail presence",
        ];
        strengths.push("Commitment to US retail", "Operational foundation");
        improvements.push(
          "Strengthen packaging compliance",
          "Improve retail logistics"
        );
      }
    } else if (partnershipName === "packaging") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Design Collaboration via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload packaging design & certification documents",
          "Complete KHCRF eco-packaging review",
          "Prepare for design collaboration partnerships",
        ];
        strengths.push("Export-ready packaging", "Strong eco-compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Packaging with a fast track to Design Collaboration.";
        nextSteps = [
          "Join Packaging Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen digital packaging design workflow",
          "Align packaging with retail storytelling needs",
        ];
        strengths.push("Solid packaging foundation", "Eco-friendly potential");
        improvements.push("Enhance digital design integration");
      } else {
        personalizedMessage =
          "You're eligible for Packaging! Build your eco-friendly and compliant packaging capabilities.";
        nextSteps = [
          "Join Packaging Program",
          "Upload packaging design & certification documents",
          "Complete KHCRF eco-packaging review",
          "Upgrade to eco-friendly & compliant packaging",
        ];
        strengths.push("Commitment to packaging", "Operational foundation");
        improvements.push(
          "Strengthen eco-certifications",
          "Improve branding consistency"
        );
      }
    } else if (partnershipName === "design-collaboration") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Storytelling & Media via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload co-creation proposals with buyers/designers",
          "Complete KHCRF IP + design integration review",
          "Prepare for storytelling and media partnerships",
        ];
        strengths.push(
          "Strong design collaboration",
          "IP protection readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Design Collaboration with a fast track to Storytelling & Media.";
        nextSteps = [
          "Join Design Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Build prototype labs for artisan–buyer co-creation",
          "Strengthen digital design collaboration capacity",
        ];
        strengths.push("Solid design foundation", "Co-creation potential");
        improvements.push("Enhance IP safeguards");
      } else {
        personalizedMessage =
          "You're eligible for Design Collaboration! Build your design and co-creation capabilities.";
        nextSteps = [
          "Join Design Collaboration Program",
          "Upload co-creation proposals with buyers/designers",
          "Complete KHCRF IP + design integration review",
          "Improve IP & copyright safeguards",
        ];
        strengths.push(
          "Commitment to design collaboration",
          "Creative foundation"
        );
        improvements.push(
          "Build prototype development capacity",
          "Integrate with buyer design systems"
        );
      }
    } else if (partnershipName === "storytelling_media") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Warehouse via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Upload artisan stories + product media assets",
          "Complete KHCRF storytelling compliance review",
          "Prepare for warehouse partnerships",
        ];
        strengths.push(
          "Strong storytelling assets",
          "Cultural branding readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Storytelling & Media with a fast track to Warehouse.";
        nextSteps = [
          "Join Storytelling & Media Program",
          "Enroll in Readiness Program (RP)",
          "Improve visual media quality",
          "Strengthen cultural storytelling capabilities",
        ];
        strengths.push("Solid storytelling foundation", "Media potential");
        improvements.push("Enhance digital storytelling tools");
      } else {
        personalizedMessage =
          "You're eligible for Storytelling & Media! Build your narrative and media capabilities.";
        nextSteps = [
          "Join Storytelling & Media Program",
          "Upload artisan stories + product media assets",
          "Complete KHCRF storytelling compliance review",
          "Improve visual media quality",
        ];
        strengths.push("Commitment to storytelling", "Creative foundation");
        improvements.push(
          "Develop craft origin documentation",
          "Adopt cultural storytelling guidelines"
        );
      }
    } else if (partnershipName === "warehouse") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Logistics via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Secure shared storage allocation in US hubs",
          "Complete KHCRF warehouse compliance review",
          "Prepare for logistics partnerships",
        ];
        strengths.push(
          "Strong warehouse operations",
          "Digital traceability readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Warehouse with a fast track to Logistics.";
        nextSteps = [
          "Join Warehouse Program",
          "Enroll in Readiness Program (RP)",
          "Improve digital traceability (ERP/API)",
          "Build SKU-level warehouse management",
        ];
        strengths.push("Solid warehouse foundation", "Logistics potential");
        improvements.push("Enhance seasonal storage readiness");
      } else {
        personalizedMessage =
          "You're eligible for Warehouse! Build your inventory and logistics capabilities.";
        nextSteps = [
          "Join Warehouse Program",
          "Secure shared storage allocation in US hubs",
          "Complete KHCRF warehouse compliance review",
          "Improve digital traceability (ERP/API)",
        ];
        strengths.push("Commitment to warehousing", "Operational foundation");
        improvements.push(
          "Strengthen SKU-level traceability",
          "Build seasonal inventory capacity"
        );
      }
    } else if (partnershipName === "logistics") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Museum/NGO/Government/Technology via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Secure freight forwarder contracts (air/ocean)",
          "Complete KHCRF compliance review",
          "Prepare for global collaborations",
        ];
        strengths.push("Global logistics readiness", "Strong compliance");
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Logistics with a fast track to Museum/NGO/Government/Technology.";
        nextSteps = [
          "Join Logistics Program",
          "Enroll in Readiness Program (RP)",
          "Strengthen customs documentation & trade finance",
          "Improve real-time shipment tracking systems",
        ];
        strengths.push("Solid logistics foundation", "Global potential");
        improvements.push("Develop reverse logistics capacity");
      } else {
        personalizedMessage =
          "You're eligible for Logistics! Build your global freight capabilities.";
        nextSteps = [
          "Join Logistics Program",
          "Secure freight forwarder contracts (air/ocean)",
          "Complete KHCRF compliance review",
          "Improve digital freight tracking",
        ];
        strengths.push("Commitment to logistics", "Operational foundation");
        improvements.push(
          "Strengthen customs compliance",
          "Enhance freight cost optimization"
        );
      }
    } else if (partnershipName === "museum_collaboration") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for NGO & Government/Technology via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit curation & heritage documentation",
          "Align with museum partnership agreements",
          "Prepare for NGO/government collaborations",
        ];
        strengths.push(
          "Strong heritage significance",
          "Cultural storytelling readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Museum Collaboration with a fast track to NGO & Government.";
        nextSteps = [
          "Join Museum Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Enhance cultural documentation & storytelling archives",
          "Secure international heritage approvals",
        ];
        strengths.push(
          "Solid heritage foundation",
          "Cultural preservation potential"
        );
        improvements.push("Build multimedia-ready exhibition content");
      } else {
        personalizedMessage =
          "You're eligible for Museum Collaboration! Build your heritage and exhibition capabilities.";
        nextSteps = [
          "Join Museum Collaboration Program",
          "Submit curation & heritage documentation",
          "Align with museum partnership agreements",
          "Enhance cultural documentation",
        ];
        strengths.push(
          "Commitment to cultural preservation",
          "Heritage foundation"
        );
        improvements.push(
          "Secure GI tag/KHCRF documentation",
          "Develop exhibition agreements"
        );
      }
    } else if (partnershipName === "ngo_government") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Technology Collaboration via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit fair trade & compliance documents",
          "Align with NGO/government procurement frameworks",
          "Prepare for technology partnerships",
        ];
        strengths.push(
          "Strong fair trade compliance",
          "Institutional readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for NGO & Government Collaboration with a fast track to Technology Collaboration.";
        nextSteps = [
          "Join NGO & Government Collaboration Program",
          "Enroll in Readiness Program (RP)",
          "Enhance fair trade & eco-certification coverage",
          "Expand community impact reporting",
        ];
        strengths.push(
          "Solid procurement foundation",
          "Policy alignment potential"
        );
        improvements.push("Build institutional supply-readiness");
      } else {
        personalizedMessage =
          "You're eligible for NGO & Government Collaboration! Build your institutional capabilities.";
        nextSteps = [
          "Join NGO & Government Collaboration Program",
          "Submit fair trade & compliance documents",
          "Align with NGO/government procurement frameworks",
          "Enhance fair trade certifications",
        ];
        strengths.push("Commitment to fair trade", "Institutional foundation");
        improvements.push(
          "Improve compliance with procurement rules",
          "Expand community impact reporting"
        );
      }
    } else if (partnershipName === "technology_partnership") {
      if (totalScore >= 21) {
        personalizedMessage =
          "Exceptional! You're eligible for Global Innovation Alliances via Lateral Entry.";
        nextSteps = [
          "Apply for Lateral Entry Program (LEP)",
          "Submit integration roadmap + tech alignment documents",
          "Complete KHCRF Tech Review",
          "Prepare for global innovation alliances",
        ];
        strengths.push(
          "Advanced tech integration",
          "Global innovation readiness"
        );
      } else if (totalScore >= 16) {
        personalizedMessage =
          "Great! You're eligible for Technology Partnership with a fast track to Global Innovation Alliances.";
        nextSteps = [
          "Join Technology Partnership Program",
          "Enroll in Readiness Program (RP)",
          "Expand API/ERP readiness",
          "Strengthen cybersecurity & data ethics compliance",
        ];
        strengths.push("Solid tech foundation", "Innovation potential");
        improvements.push("Improve digital literacy among artisans");
      } else {
        personalizedMessage =
          "You're eligible for Technology Partnership! Build your tech integration capabilities.";
        nextSteps = [
          "Join Technology Partnership Program",
          "Submit integration roadmap + tech alignment documents",
          "Complete KHCRF Tech Review",
          "Expand API/ERP readiness",
        ];
        strengths.push("Commitment to technology", "Digital foundation");
        improvements.push(
          "Adopt AI-driven forecasting",
          "Strengthen blockchain/AR-VR capabilities"
        );
      }
    }

    // Role-specific recommendations
    if (role === "vendor") {
      if (partnershipName === "dropshipping") {
        const years = answers.vendor_active_years;
        const scale = answers.vendor_production_scale;
        const certifications = answers.vendor_certifications;
        const readiness = answers.vendor_readiness || [];
        if (years === "5+ years" || scale === "Enterprise")
          strengths.push("Established vendor experience");
        else improvements.push("Gain more operational experience");
        if (certifications === "KHCRF approval" || certifications === "GI tag")
          strengths.push("Certified operations");
        else if (data.specialRules.vendor.certificationsRequired)
          improvements.push("Pursue GI/KHCRF certifications");
      } else if (partnershipName === "consignment") {
        const years = answers.vendor_handicrafts_years;
        const scale = answers.vendor_production_scale;
        const certifications = answers.vendor_certifications;
        const readiness = answers.vendor_readiness || [];
        if (years !== "Less than 1 year")
          strengths.push("Sufficient handicraft experience");
        else improvements.push("Gain at least 1 year of handicraft experience");
        if (scale === "Workshop" || scale === "Enterprise")
          strengths.push("Adequate production scale");
        else improvements.push("Scale up to workshop or enterprise level");
        if (readiness.length >= 2)
          strengths.push("Strong consignment readiness");
        else improvements.push("Improve packaging and inventory systems");
      } else if (partnershipName === "wholesale") {
        const scale = answers.vendor_production_scale;
        const bulk = answers.vendor_bulk_capacity;
        const readiness = answers.vendor_readiness || [];
        if (scale === "Enterprise") strengths.push("Large-scale production");
        else improvements.push("Expand to enterprise-level production");
        if (bulk === "Yes") strengths.push("Bulk order capacity");
        else improvements.push("Develop capacity for ≥100 pcs/SKU");
        if (readiness.length >= 2) strengths.push("Strong wholesale readiness");
        else improvements.push("Automate inventory and invoicing");
      } else if (partnershipName === "importexport") {
        const licenses = answers.vendor_export_licenses;
        const logistics = answers.vendor_logistics;
        const readiness = answers.vendor_readiness || [];
        if (licenses === "Yes") strengths.push("Export compliance");
        else improvements.push("Obtain export licenses");
        if (logistics === "Yes")
          strengths.push("International logistics capability");
        else
          improvements.push("Partner with international logistics providers");
        if (readiness.length >= 2) strengths.push("Global trade readiness");
        else improvements.push("Enhance customs and forex capabilities");
      } else if (partnershipName === "exhibition") {
        const catalogs = answers.vendor_catalogs;
        const inventory = answers.vendor_exhibition_inventory;
        const branding = answers.vendor_branding_materials;
        const readiness = answers.vendor_exhibition_readiness || [];
        if (catalogs === "Yes") strengths.push("Exhibition catalogs ready");
        else improvements.push("Prepare exhibition catalogs");
        if (inventory === "Yes")
          strengths.push("Exhibition inventory management");
        else improvements.push("Improve exhibition inventory management");
        if (branding === "Yes") strengths.push("Exhibition branding materials");
        else improvements.push("Prepare exhibition branding materials");
        if (readiness.length >= 2)
          strengths.push("Strong exhibition readiness");
        else improvements.push("Enhance exhibition readiness");
      } else if (partnershipName === "auction") {
        const premium = answers.vendor_premium_products;
        const logistics = answers.vendor_auction_logistics;
        const verification = answers.vendor_khcrf_verification;
        const readiness = answers.vendor_auction_readiness || [];
        if (premium === "Yes") strengths.push("Premium products ready");
        else improvements.push("Prepare premium products");
        if (logistics === "Yes") strengths.push("Auction logistics management");
        else improvements.push("Improve auction logistics management");
        if (verification === "Yes")
          strengths.push("KHCRF product verification");
        else improvements.push("Complete KHCRF product verification");
        if (readiness.length >= 2) strengths.push("Strong auction readiness");
        else improvements.push("Enhance auction readiness");
      } else if (partnershipName === "white-label") {
        const customization = answers.vendor_customization;
        const volume = answers.vendor_production_volume;
        const certifications = answers.vendor_certifications_white_label || [];
        const readiness = answers.vendor_white_label_readiness || [];
        if (customization === "Yes") strengths.push("Customization capacity");
        else improvements.push("Develop customization capacity");
        if (volume === "Yes") strengths.push("Meets production volumes");
        else improvements.push("Increase production volumes");
        if (certifications.length >= 2) strengths.push("Strong certifications");
        else improvements.push("Pursue certifications");
        if (readiness.length >= 2)
          strengths.push("Strong white label readiness");
        else improvements.push("Enhance white label readiness");
      } else if (partnershipName === "brick-mortar") {
        const inventory = answers.vendor_retail_inventory;
        const management = answers.vendor_store_management;
        const certifications = answers.vendor_certifications_retail || [];
        const readiness = answers.vendor_retail_readiness || [];
        if (inventory === "Yes") strengths.push("Retail inventory capacity");
        else improvements.push("Develop retail inventory capacity");
        if (management === "Yes") strengths.push("Store management capacity");
        else improvements.push("Improve store management capacity");
        if (certifications.length >= 2) strengths.push("Strong certifications");
        else improvements.push("Pursue certifications");
        if (readiness.length >= 2) strengths.push("Strong retail readiness");
        else improvements.push("Enhance retail readiness");
      }
    } else if (role === "buyer") {
      if (partnershipName === "dropshipping") {
        const capacity = answers.buyer_sourcing_capacity;
        const authenticity = answers.buyer_authenticity_importance;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (authenticity === "High") strengths.push("Focus on authenticity");
        else improvements.push("Prioritize product authenticity");
        if (readiness.length >= 3)
          strengths.push("Solid fulfillment and promotion capabilities");
        else improvements.push("Enhance fulfillment and marketing strategies");
      } else if (partnershipName === "consignment") {
        const capacity = answers.buyer_sourcing_capacity;
        const authenticity = answers.buyer_authenticity_importance;
        const readiness = answers.buyer_readiness || [];
        if (capacity !== "Less than $5K")
          strengths.push("Adequate sourcing capacity");
        else improvements.push("Increase sourcing to $5K+");
        if (authenticity !== "Low")
          strengths.push("Focus on cultural authenticity");
        else improvements.push("Prioritize cultural authenticity");
        if (readiness.length >= 2)
          strengths.push("Consignment-ready operations");
        else improvements.push("Improve cash flow and inventory handling");
      } else if (partnershipName === "wholesale") {
        const capacity = answers.buyer_sourcing_capacity;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$25K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Ensure sourcing capacity of $25K+");
        if (readiness.length >= 2) strengths.push("Wholesale-ready operations");
        else improvements.push("Enhance storage and digital integration");
      } else if (partnershipName === "importexport") {
        const capacity = answers.buyer_sourcing_capacity;
        const readiness = answers.buyer_readiness || [];
        if (capacity === "$250K+") strengths.push("High sourcing capacity");
        else improvements.push("Increase sourcing to $250K+");
        if (readiness.length >= 2) strengths.push("Global trade readiness");
        else improvements.push("Strengthen import licenses and warehousing");
      } else if (partnershipName === "exhibition") {
        const capacity = answers.buyer_sourcing_capacity_exhibition;
        const verification = answers.buyer_product_verification;
        const readiness = answers.buyer_exhibition_readiness || [];
        if (capacity === "$50K+") strengths.push("Strong sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (verification === "Yes")
          strengths.push("Requires on-site verification");
        else improvements.push("Consider on-site verification");
        if (readiness.length >= 2)
          strengths.push("Strong exhibition readiness");
        else improvements.push("Enhance exhibition readiness");
      } else if (partnershipName === "auction") {
        const budget = answers.buyer_auction_budget;
        const preference = answers.buyer_auction_preference;
        const readiness = answers.buyer_auction_readiness || [];
        if (budget === "$10K+") strengths.push("Adequate auction budget");
        else improvements.push("Increase auction budget");
        if (preference) strengths.push("Auction preference");
        else improvements.push("Consider auction preference");
        if (readiness.length >= 2) strengths.push("Strong auction readiness");
        else improvements.push("Enhance auction readiness");
      } else if (partnershipName === "white-label") {
        const capacity = answers.buyer_sourcing_capacity_white_label;
        const rights = answers.buyer_branding_rights;
        const readiness = answers.buyer_white_label_readiness || [];
        if (capacity === "$50K+") strengths.push("Adequate sourcing capacity");
        else improvements.push("Increase sourcing capacity");
        if (rights) strengths.push("Branding rights preference");
        else improvements.push("Consider branding rights");
        if (readiness.length >= 2)
          strengths.push("Strong white label readiness");
        else improvements.push("Enhance white label readiness");
      } else if (partnershipName === "brick-mortar") {
        const management = answers.buyer_shelf_management;
        const readiness = answers.buyer_retail_readiness || [];
        if (management === "Yes") strengths.push("Shelf management capacity");
        else improvements.push("Develop shelf management capacity");
        if (readiness.length >= 2) strengths.push("Strong retail readiness");
        else improvements.push("Enhance retail readiness");
      }
    }

    // Validation checks for higher tiers
    if (
      [
        "dropshipping",
        "consignment",
        "wholesale",
        "importexport",
        "exhibition",
        "auction",
        "white-label",
        "brick-mortar",
        "packaging",
        "design_collaboration",
        "storytelling_media",
        "warehouse",
        "museum_collaboration",
        "museum",
        "ngo_government",
        "technology_partnership",
      ].includes(partnershipName)
    ) {
      const validationAnswers = Object.keys(answers).filter(
        (key) =>
          data.questions.find((q) => q.id === key)?.category === "validation"
      );
      const failedValidations = validationAnswers.filter(
        (key) => answers[key] === "No" || answers[key] === "In Progress"
      );
      if (failedValidations.length > 0) {
        eligibility += " (Lateral Entry Required)";
        nextSteps.push("Complete KHCRF review for Lateral Entry");
        improvements.push(
          "Address previous partnership validation requirements"
        );
      }
    }

    setQuizResult({
      score: totalScore,
      eligibility,
      recommendedTrack,
      fastTrackEligible,
      personalizedMessage,
      nextSteps,
      strengths,
      improvements,
    });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizResult(null);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[var(--secondary-color)] rounded-2xl p-8 text-white text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Target
              className={`mx-auto mb-4 ${is4K ? "w-16 h-16" : "w-12 h-12"}`}
            />
            <h2
              className={`font-bold mb-4 ${
                is4K ? "text-4xl" : "text-2xl sm:text-3xl"
              }`}
            >
             
              Eligibility Assessment
            </h2>
            <p className={`opacity-90 mb-6 ${is4K ? "text-xl" : "text-lg"}`}>
              Discover your eligibility for our{" "}
              {name} program. Get personalized recommendations tailored to your role as
              a {role}.
            </p>
          </motion.div>

          <motion.button
            className={`bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 ${
              is4K ? "text-xl px-12 py-6" : "text-lg"
            }`}
            onClick={() => setIsStarted(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Start Assessment
          </motion.button>

          <p
            className={`mt-4 text-sm opacity-70 ${
              is4K ? "text-base" : "text-xs"
            }`}
          >
            {filteredQuestions.length} questions • Personalized results • No
            email required
          </p>
        </div>
      </motion.div>
    );
  }

  if (showResults && quizResult) {
    const getEligibilityColor = (eligibility: string) => {
      if (eligibility.includes("Consignment")) return "text-green-600";
      if (eligibility.includes("Wholesale")) return "text-blue-600";
      if (eligibility.includes("Import & Export")) return "text-purple-600";
      if (eligibility.includes("Dropshipping")) return "text-orange-600";
      return "text-gray-600";
    };

    const getEligibilityIcon = (eligibility: string) => {
      if (eligibility.includes("Consignment"))
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      if (eligibility.includes("Wholesale"))
        return <Package className="w-8 h-8 text-blue-500" />;
      if (eligibility.includes("Import & Export"))
        return <Star className="w-8 h-8 text-purple-500" />;
      if (eligibility.includes("Dropshipping"))
        return <TrendingUp className="w-8 h-8 text-orange-500" />;
      return <Target className="w-8 h-8 text-gray-500" />;
    };

    return (
      <motion.div
        className={`mx-auto px-6 py-12 ${containerClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-[var(--secondary-color)] p-8 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {getEligibilityIcon(quizResult.eligibility)}
            </motion.div>
            <h2
              className={`font-bold mt-4 mb-2 ${
                is4K ? "text-3xl" : "text-2xl"
              }`}
            >
              Your{" "}{name}{" "}Eligibility Results
            </h2>
            <div
              className={`text-6xl font-bold mb-2 ${
                is4K ? "text-7xl" : "text-5xl"
              }`}
            >
              {quizResult.score}
            </div>
            <p className={`opacity-90 ${is4K ? "text-xl" : "text-lg"}`}>
              {quizResult.personalizedMessage}
            </p>
          </div>

          <div className="p-8 space-y-8">
            <motion.div
              className="bg-gradient-to-r from-[var(--secondary-light-color)] to-white rounded-xl p-6 border border-[var(--secondary-color)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3
                className={`font-bold text-[var(--secondary-color)] mb-3 flex items-center gap-2 ${
                  is4K ? "text-2xl" : "text-xl"
                }`}
              >
                <Package className="w-6 h-6" />
                Recommended Track: {quizResult.recommendedTrack}
              </h3>
              {quizResult.fastTrackEligible && (
                <div className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">Fast-Track Eligible!</span>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3
                className={`font-bold text-green-600 mb-4 flex items-center gap-2 ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                <CheckCircle className="w-6 h-6" />
                Your Strengths
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {quizResult.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {quizResult.improvements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3
                  className={`font-bold text-orange-600 mb-4 flex items-center gap-2 ${
                    is4K ? "text-xl" : "text-lg"
                  }`}
                >
                  <TrendingUp className="w-6 h-6" />
                  Areas for Development
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {quizResult.improvements.map((improvement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg"
                    >
                      <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span
                        className={`text-gray-700 ${
                          is4K ? "text-lg" : "text-sm"
                        }`}
                      >
                        {improvement}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                <ArrowRight className="w-6 h-6" />
                Your Next Steps
              </h3>
              <div className="space-y-3">
                {quizResult.nextSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-base"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-bold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {quizResult.fastTrackEligible
                  ? `Apply for ${quizResult.recommendedTrack.split(" + ")[0]}`
                  : `Start Your ${
                      partnershipName.charAt(0).toUpperCase() +
                      partnershipName.slice(1)
                    } Journey`}
              </motion.button> */}
              <motion.button
                className={`flex-1 bg-[var(--primary-color)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${
                  is4K ? "text-lg" : "text-base"
                }`}
                onClick={resetQuiz}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Retake Assessment
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  const question = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  return (
    <motion.div
      className={`mx-auto px-6 py-12 ${containerClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-200 h-2">
          <motion.div
            className="bg-[var(--secondary-color)] h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <p className={`text-gray-500 mb-2 ${is4K ? "text-lg" : "text-sm"}`}>
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </p>
            <h2
              className={`font-bold text-[var(--primary-color)] ${
                is4K ? "text-2xl" : "text-xl"
              }`}
            >
              {question.question}
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-8"
            >
              {question.type === "single" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            answers[question.id] === option
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        />
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === "multiple" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id]?.includes(option)
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => {
                        const current = answers[question.id] || [];
                        const updated = current.includes(option)
                          ? current.filter((item: string) => item !== option)
                          : [...current, option];
                        handleAnswer(question.id, updated);
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border-2 ${
                            answers[question.id]?.includes(option)
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        >
                          {answers[question.id]?.includes(option) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === "yesno" && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        answers[question.id] === option
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                          : "border-gray-200 hover:border-[var(--primary-color)]/50"
                      } ${is4K ? "text-lg" : "text-base"}`}
                      onClick={() => handleAnswer(question.id, option)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            answers[question.id] === option
                              ? "border-[var(--primary-color)] bg-[var(--primary-color)]"
                              : "border-gray-300"
                          }`}
                        />
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentQuestion === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-100"
              } ${is4K ? "text-lg" : "text-base"}`}
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}}
              whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </motion.button>

            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                answers[question.id] === undefined ||
                (question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover-color)]"
              } ${is4K ? "text-lg" : "text-base"}`}
              onClick={nextQuestion}
              disabled={
                answers[question.id] === undefined ||
                (question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0))
              }
              whileHover={
                answers[question.id] !== undefined &&
                !(
                  question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0)
                )
                  ? { scale: 1.05 }
                  : {}
              }
              whileTap={
                answers[question.id] !== undefined &&
                !(
                  question.type === "multiple" &&
                  (!answers[question.id] || answers[question.id].length === 0)
                )
                  ? { scale: 0.95 }
                  : {}
              }
            >
              {currentQuestion === filteredQuestions.length - 1
                ? "Get Results"
                : "Next"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { Card, CardBody } from '@/components/shared/Card';
import { Chip } from '@/components/shared/Chip';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  Target, Clock, GitBranch, Lightning, Certificate, SealCheck, ShieldCheck,
  Truck, CurrencyDollar, Handshake, CheckCircle, ArrowRight, FlagCheckered,
  Info, ArrowLeft, Star, Lightbulb, WarningCircle,
} from '@/lib/icons';
import { PartnershipIcon } from './PartnershipIcon';
import { cn } from '@/lib/utils';
import type { ModelPageContent } from '@/data/partnership/models';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';
type Phase = 'intro' | 'quiz' | 'result';

export interface QualificationSectionProps {
  rulesData: ModelPageContent['eligibilityRulesSection'];
  assessmentData: ModelPageContent['eligibilityAssessmentSection'];
  role: Role;
  modelSystem: string;
}

interface Question {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'yesno';
  options: readonly string[];
  category: string;
  weight: 0 | 1;
}

interface ThresholdEntry {
  eligibility: string;
  fastTrackEligible: boolean;
  nextLevel: string | null;
}

/* ── Route helpers ──────────────────────────────────────────────── */

const SYSTEM_ROUTE: Record<string, string> = {
  'core-trade': 'core-trade',
  'brand-growth': 'brand-expansion',
  collaborative: 'collaborative',
  institutional: 'institutional',
};

/* ── Animation ──────────────────────────────────────────────────── */

const ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const Q_VARIANTS = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 24 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -24, transition: { duration: 0.2 } }),
};

/* ── Step header ────────────────────────────────────────────────── */

function StepHeader({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-[13px] font-bold tabular-nums border-(--primary) bg-(--primary)/10 text-(--primary) font-data"
      >
        {number}
      </div>
      <div className="flex flex-col gap-0.5 pt-1">
        <h3
          className="text-[15px] font-bold leading-snug text-(--foreground) font-heading"
        >
          {label}
        </h3>
        <p
          className="text-xs leading-relaxed text-(--muted-foreground) font-ui"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ── Requirement icon ────────────────────────────────────────────── */

function RequirementIcon({ label }: { label: string }) {
  const l = label.toLowerCase();
  const props = { size: 15, weight: 'fill' as const };
  if (l.includes('kpi') || l.includes('score')) return <Target {...props} className="text-(--secondary)" />;
  if (l.includes('fast')) return <Lightning {...props} className="text-(--warning)" />;
  if (l.includes('certif')) return <Certificate {...props} className="text-(--success)" />;
  if (l.includes('eligib') || l.includes('badge')) return <SealCheck {...props} className="text-(--success)" />;
  if (l.includes('compliance') || l.includes('shield')) return <ShieldCheck {...props} className="text-(--primary)" />;
  if (l.includes('logistic')) return <Truck {...props} className="text-(--primary)" />;
  if (l.includes('fee') || l.includes('payment')) return <CurrencyDollar {...props} className="text-(--primary)" />;
  if (l.includes('commit')) return <Handshake {...props} className="text-(--primary)" />;
  if (l.includes('retention') || l.includes('prior')) return <Clock {...props} className="text-(--secondary)" />;
  if (l.includes('previous') || l.includes('level')) return <GitBranch {...props} className="text-(--secondary)" />;
  return <CheckCircle {...props} className="text-(--primary)" />;
}

/* ── RequirementCard ─────────────────────────────────────────────── */

function RequirementCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <Card variant="elevated" padding="sm">
      <CardBody>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="shrink-0"><RequirementIcon label={label} /></span>
            <span
              className="text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground) font-label"
            >
              {label}
            </span>
          </div>
          <p
            className="text-base font-bold leading-snug text-(--foreground) font-heading"
          >
            {value}
          </p>
          <p className="text-xs leading-relaxed text-(--muted-foreground) font-ui">
            {note}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

/* ── Quiz sub-components ─────────────────────────────────────────── */

function OptionButton({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full px-4 py-3 text-left transition-all duration-200 focus:outline-none rounded-[var(--radius-card)] border',
        'focus-visible:ring-2 focus-visible:ring-(--primary)/30',
        selected ? 'border-(--primary) bg-(--primary)/10' : 'border-(--border) bg-(--card) hover:border-(--muted-foreground)',
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'flex size-4 shrink-0 items-center justify-center rounded-full border',
            selected ? 'border-(--primary) bg-(--primary)' : 'border-(--border) bg-transparent'
          )}
        >
          {selected && <span className="block size-1.5 rounded-full bg-(--card)" />}
        </span>
        <span className="text-sm text-(--foreground) font-ui">{label}</span>
      </div>
    </button>
  );
}

function CheckOption({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full px-4 py-3 text-left transition-all duration-200 focus:outline-none rounded-[var(--radius-card)] border',
        'focus-visible:ring-2 focus-visible:ring-(--primary)/30',
        selected ? 'border-(--primary) bg-(--primary)/10' : 'border-(--border) bg-(--card) hover:border-(--muted-foreground)',
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] border',
            selected ? 'border-(--primary) bg-(--primary)' : 'border-(--border) bg-transparent'
          )}
        >
          {selected && <CheckCircle size={10} weight="bold" className="text-(--card)" />}
        </span>
        <span className="text-sm text-(--foreground) font-ui">{label}</span>
      </div>
    </button>
  );
}

function YesNoButtons({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-3">
      {['Yes', 'No'].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            'flex-1 py-3.5 text-sm font-semibold transition-all duration-200 focus:outline-none rounded-[var(--radius-card)] border',
            value === opt
              ? opt === 'Yes' ? 'border-(--success) bg-(--success)/10 text-(--foreground)' : 'border-(--destructive) bg-(--destructive)/10 text-(--foreground)'
              : 'border-(--border) bg-(--card) text-(--muted-foreground)'
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-1.5 flex-1 overflow-hidden bg-(--border) rounded-full"
      >
        <motion.div
          className="h-full bg-(--primary) rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span
        className="text-[11px] font-semibold tabular-nums text-(--muted-foreground) font-label min-w-[3ch]"
      >
        {current}/{total}
      </span>
    </div>
  );
}

function ResultList({ items, icon, label, colorClass }: {
  items: readonly string[];
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <span className={colorClass}>{icon}</span>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-(--muted-foreground) font-label">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className={cn('mt-0.5 shrink-0', colorClass)}>{icon}</span>
            <p className="text-xs leading-relaxed text-(--muted-foreground) font-ui">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Scoring ─────────────────────────────────────────────────────── */

function scoreAnswer(q: Question, answer: string | string[]): number {
  if (q.weight === 0) return 0;
  if (q.type === 'yesno') return answer === 'Yes' ? 1 : 0;
  if (q.type === 'multiple') return Array.isArray(answer) ? answer.length : 0;
  const idx = q.options.indexOf(answer as string);
  return idx >= 0 ? idx + 1 : 0;
}

function findThreshold(score: number, thresholds: Record<string, ThresholdEntry>): ThresholdEntry {
  const entries = Object.entries(thresholds)
    .map(([k, v]) => ({ min: Number(k), ...v }))
    .sort((a, b) => b.min - a.min);
  return entries.find((e) => score >= e.min) ?? entries[entries.length - 1]!;
}

/* ── AssessmentWidget ────────────────────────────────────────────── */

function AssessmentWidget({
  data,
  role,
}: {
  data: ModelPageContent['eligibilityAssessmentSection'];
  role: Role;
}) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [outcome, setOutcome] = useState<ThresholdEntry | null>(null);

  const questions = useMemo<Question[]>(() => {
    return (data.assessment.questions as unknown as Question[]).filter(
      (q) => q.category === 'general' || q.category === 'validation' || q.category === role,
    );
  }, [data.assessment.questions, role]);

  const total = questions.length;
  const q = questions[currentQ];
  const answer = q ? answers[q.id] : undefined;

  const canAdvance = q
    ? q.weight === 0 ||
      (q.type === 'multiple'
        ? Array.isArray(answer) && answer.length > 0
        : typeof answer === 'string' && answer.length > 0)
    : false;

  function handleAnswer(id: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleToggleMultiple(id: string, option: string) {
    const current = (answers[id] as string[] | undefined) ?? [];
    const next = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];
    handleAnswer(id, next);
  }

  function handleNext() {
    if (currentQ < total - 1) {
      setDirection(1);
      setCurrentQ((i) => i + 1);
    } else {
      const score = questions.reduce((sum, question) => {
        const a = answers[question.id];
        return sum + (a !== undefined ? scoreAnswer(question, a) : 0);
      }, 0);
      const matched = findThreshold(score, data.assessment.thresholds as unknown as Record<string, ThresholdEntry>);
      setOutcome(matched);
      setPhase('result');
    }
  }

  function handleBack() {
    if (currentQ > 0) { setDirection(-1); setCurrentQ((i) => i - 1); }
  }

  function handleRetake() {
    setPhase('intro');
    setCurrentQ(0);
    setDirection(1);
    setAnswers({});
    setOutcome(null);
  }

  const resultContent = data.assessment.resultContent as unknown as {
    messagesByOutcome: Record<string, string>;
    nextStepsByOutcome: Record<string, readonly string[]>;
    strengthsByOutcome: Record<string, readonly string[]>;
    improvementsByOutcome: Record<string, readonly string[]>;
    defaultStrengths: readonly string[];
    defaultDevelopmentAreas: readonly string[];
  };

  const outcomeKey = outcome?.eligibility ?? '';
  const message = resultContent.messagesByOutcome[outcomeKey] ?? '';
  const nextSteps = resultContent.nextStepsByOutcome[outcomeKey] ?? [];
  const strengths = resultContent.strengthsByOutcome[outcomeKey]?.length
    ? resultContent.strengthsByOutcome[outcomeKey]!
    : resultContent.defaultStrengths;
  const improvements = resultContent.improvementsByOutcome[outcomeKey]?.length
    ? resultContent.improvementsByOutcome[outcomeKey]!
    : resultContent.defaultDevelopmentAreas;

  return (
    <div className="mx-auto w-full max-w-xl">
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div key="intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <Card variant="elevated" padding="lg">
              <CardBody>
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex size-12 items-center justify-center bg-(--primary)/10 rounded-[var(--radius-card-sm)]">
                    <PartnershipIcon name={data.introCard.icon} size={22} weight="duotone" className="text-(--primary)" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-(--foreground) font-heading">
                      {data.introCard.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-(--muted-foreground) font-ui">
                      {data.introCard.description}
                    </p>
                  </div>
                  <p className="text-[11px] font-medium text-(--muted-foreground) font-label">
                    {data.introCard.meta}
                  </p>
                  <Button variant="primary" size="md" iconRight={<ArrowRight weight="bold" size={14} />} onClick={() => setPhase('quiz')}>
                    {data.introCard.primaryCta.label}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}

        {phase === 'quiz' && q && (
          <motion.div key="quiz-shell" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <Card variant="elevated" padding="lg">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <ProgressBar current={currentQ + 1} total={total} />
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={q.id} custom={direction} variants={Q_VARIANTS} initial="enter" animate="center" exit="exit" className="flex flex-col gap-4">
                      <p className="text-sm font-semibold leading-relaxed text-(--foreground) font-ui">{q.question}</p>
                      {q.type === 'yesno' && <YesNoButtons value={(answer as string) ?? ''} onChange={(v) => handleAnswer(q.id, v)} />}
                      {q.type === 'single' && (
                        <div className="flex flex-col gap-2">
                          {q.options.map((opt) => (
                            <OptionButton key={opt} label={opt} selected={answer === opt} onClick={() => handleAnswer(q.id, opt)} />
                          ))}
                        </div>
                      )}
                      {q.type === 'multiple' && (
                        <div className="flex flex-col gap-2">
                          {q.options.map((opt) => (
                            <CheckOption key={opt} label={opt} selected={Array.isArray(answer) && answer.includes(opt)} onClick={() => handleToggleMultiple(q.id, opt)} />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  <div className="flex items-center justify-between pt-1">
                    <Button variant="ghost" size="sm" iconLeft={<ArrowLeft weight="bold" size={13} />} onClick={handleBack} disabled={currentQ === 0}>Back</Button>
                    <Button variant="primary" size="sm" iconRight={<ArrowRight weight="bold" size={13} />} onClick={handleNext} disabled={!canAdvance}>
                      {currentQ === total - 1 ? 'See Results' : 'Next'}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}

        {phase === 'result' && outcome && (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <Card variant="elevated" padding="lg">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-(--foreground) font-heading">{data.resultCard.heading}</h4>
                    <p className="text-sm leading-relaxed text-(--muted-foreground) font-ui">{message}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 bg-(--primary)/6 rounded-[var(--radius-card)] border border-(--primary)/15">
                    <Target size={13} weight="fill" className="text-(--primary) shrink-0" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-(--muted-foreground) font-label">{data.resultCard.recommendationLabel}</span>
                    <span className="text-xs font-semibold text-(--foreground) font-ui">{outcome.eligibility}</span>
                    {outcome.fastTrackEligible && <Chip variant="default" size="sm"><Lightning size={10} weight="fill" />{data.resultCard.fastTrackBadgeLabel}</Chip>}
                  </div>
                  <div className="h-px bg-(--border)" aria-hidden="true" />
                  <ResultList items={strengths} icon={<Star size={12} weight="fill" />} label={data.resultCard.strengthsLabel} colorClass="text-(--success)" />
                  {improvements.length > 0 && <ResultList items={improvements} icon={<Lightbulb size={12} weight="fill" />} label={data.resultCard.developmentLabel} colorClass="text-(--warning)" />}
                  {nextSteps.length > 0 && <ResultList items={nextSteps} icon={<CheckCircle size={12} weight="fill" />} label={data.resultCard.nextStepsLabel} colorClass="text-(--primary)" />}
                  <div className="h-px bg-(--border)" aria-hidden="true" />
                  <div className="flex justify-center">
                    <Button variant="ghost" size="sm" onClick={handleRetake}>{data.resultCard.retakeCtaLabel}</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}

        {phase === 'result' && !outcome && (
          <motion.div key="result-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 py-8">
            <WarningCircle size={24} className="text-(--muted-foreground)" />
            <p className="text-sm text-(--muted-foreground) font-ui">No result available. Please retake the assessment.</p>
            <Button variant="ghost" size="sm" onClick={handleRetake}>Retake</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── QualificationSection ───────────────────────────────────────── */

export default function QualificationSection({
  rulesData,
  assessmentData,
  role,
  modelSystem,
}: QualificationSectionProps) {
  const systemRoute = SYSTEM_ROUTE[modelSystem] ?? modelSystem;
  const isTerminal = 'isTerminal' in rulesData && rulesData.isTerminal;

  let nextHref: string | null = null;
  if (rulesData.nextSlug && !isTerminal) {
    const targetSystem =
      'nextSystem' in rulesData && rulesData.nextSystem
        ? SYSTEM_ROUTE[rulesData.nextSystem] ?? rulesData.nextSystem
        : systemRoute;
    nextHref = `/partnership-paths/${targetSystem}/${rulesData.nextSlug}`;
  }

  return (
    <section aria-label={rulesData.sectionLabel} className="section section-elevated w-full">
      <div className="container">
        <motion.div
          className="flex flex-col gap-10"
          variants={ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="centered"
            eyebrow={rulesData.sectionLabel}
            headline={rulesData.headline}
            description={rulesData.description}
          />

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[38%_1fr] lg:gap-16">
            {/* LEFT — sticky requirements */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-8">

              {/* ── Step 1 — Entry Requirements ──────────────────────── */}
              <StepHeader
                number="01"
                label="Check Your Requirements"
                description="Review the minimum entry conditions for this partnership model."
              />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {rulesData.requirements.map((req) => (
                  <RequirementCard key={req.label} label={req.label} value={req.value} note={req.note} />
                ))}
              </div>

              {/* Progression note + next-level CTA */}
              <div className="flex flex-col gap-4 sm:items-center">
                <div
                  className="flex items-start gap-3 px-4 py-3.5 sm:max-w-[62ch] bg-(--primary)/5 rounded-[var(--radius-card)] border border-(--primary)/15"
                >
                  <Info size={14} weight="fill" className="mt-0.5 shrink-0 text-(--primary)" />
                  <p className="text-xs leading-relaxed text-(--muted-foreground) font-ui">
                    {rulesData.progressionNote}
                  </p>
                </div>

                {isTerminal ? (
                  <div className="flex items-center gap-2.5">
                    <FlagCheckered size={16} weight="fill" className="text-(--secondary)" />
                    <span className="text-sm font-semibold text-(--muted-foreground) font-ui">
                      You have reached the top of the partnership ladder.
                    </span>
                  </div>
                ) : nextHref ? (
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-(--muted-foreground) font-label">Next level:</span>
                    <Link href={nextHref}>
                      <Button variant="primary" size="sm" iconRight={<ArrowRight weight="bold" size={13} />}>
                        {rulesData.nextLabel}
                      </Button>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>

            {/* RIGHT — assessment widget */}
            <div className="flex flex-col gap-6">
              {/* Connector */}
              <div className="flex flex-col items-center gap-2 lg:hidden">
                <div className="h-8 w-px bg-gradient-to-b from-(--border) to-(--primary)" aria-hidden="true" />
                <div
                  className="flex size-6 items-center justify-center rounded-full border-2 border-(--primary) bg-(--primary)/10"
                  aria-hidden="true"
                />
              </div>

              {/* ── Step 2 — Eligibility Assessment ──────────────────── */}
              <StepHeader
                number="02"
                label="Assess Your Readiness"
                description={assessmentData.description}
              />
              <AssessmentWidget data={assessmentData} role={role} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

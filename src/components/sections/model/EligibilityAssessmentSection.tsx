'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import {
  Target,
  ClipboardText,
  ListChecks,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lightning,
  Star,
  Lightbulb,
  WarningCircle,
  SealCheck,
  TrendUp,
} from '@/lib/icons';
import type { PlatformRole } from '@/store/role.store';

/* ── Types ─────────────────────────────────────────────────────── */

type Phase = 'intro' | 'quiz' | 'result';
type QuestionType = 'single' | 'multiple' | 'yesno';

type Question = {
  id: string;
  question: string;
  type: QuestionType;
  options: string[];
  category: 'general' | 'validation' | 'vendor' | 'buyer';
  weight: number;
};

type ThresholdEntry = {
  eligibility: string;
  fastTrackEligible: boolean;
  nextLevel: string | null;
};

type ResultContent = {
  messagesByOutcome: Record<string, string>;
  nextStepsByOutcome: Record<string, string[]>;
  strengthsByOutcome: Record<string, string[]>;
  improvementsByOutcome: Record<string, string[]>;
  defaultStrengths: string[];
  defaultDevelopmentAreas: string[];
};

type EligibilityAssessmentData = {
  sectionLabel: string;
  headline: string;
  description: string;
  introCard: {
    icon: string;
    title: string;
    description: string;
    primaryCta: { label: string; action: string };
    meta: string;
  };
  resultCard: {
    heading: string;
    scoreLabel: string;
    recommendationLabel: string;
    strengthsLabel: string;
    developmentLabel: string;
    nextStepsLabel: string;
    retakeCtaLabel: string;
    fastTrackBadgeLabel: string;
  };
  assessment: {
    name: string;
    maxScore: number;
    questions: Question[];
    thresholds: Record<string, ThresholdEntry>;
    resultContent: ResultContent;
  };
};

/* ── Constants ──────────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const INTRO_ICON_MAP: Record<string, React.ElementType> = {
  Target,
  ClipboardText,
  ListChecks,
};

const LEFT_BENEFITS = [
  {
    icon: Target,
    label: 'Know Your Track',
    text: 'Understand which private-label tier matches your readiness before you apply.',
  },
  {
    icon: Star,
    label: 'Personalised Results',
    text: 'Role-based questions give targeted recommendations, not generic advice.',
  },
  {
    icon: SealCheck,
    label: 'No Commitment',
    text: '13 questions, no email needed. Instant results with clear next steps.',
  },
] as const;

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

/* ── Animation ──────────────────────────────────────────────────── */

const Q_VARIANTS = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 18 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.25, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -18, transition: { duration: 0.16 } }),
};

/* ── ProgressBar ────────────────────────────────────────────────── */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-(--border)">
        <motion.div
          className="h-full rounded-full bg-(--primary)"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.35, ease: EASE }}
        />
      </div>
      <span className="min-w-[3ch] text-[11px] tabular-nums text-(--muted-foreground)">
        {current}/{total}
      </span>
    </div>
  );
}

/* ── OptionButton ───────────────────────────────────────────────── */

function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full rounded-xl border px-4 py-2.5 text-left text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/30',
        selected
          ? 'border-(--primary) bg-(--primary)/8 text-(--foreground)'
          : 'border-(--border) bg-(--background-elevated) text-(--muted-foreground) hover:border-(--muted-foreground) hover:text-(--foreground)',
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn('flex size-3.5 shrink-0 items-center justify-center rounded-full border', selected ? 'border-(--primary) bg-(--primary)' : 'border-(--border)')}>
          {selected && <span className="block size-1.5 rounded-full bg-white" />}
        </span>
        {label}
      </div>
    </button>
  );
}

/* ── CheckOption ────────────────────────────────────────────────── */

function CheckOption({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full rounded-xl border px-4 py-2.5 text-left text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/30',
        selected
          ? 'border-(--primary) bg-(--primary)/8 text-(--foreground)'
          : 'border-(--border) bg-(--background-elevated) text-(--muted-foreground) hover:border-(--muted-foreground) hover:text-(--foreground)',
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn('flex size-3.5 shrink-0 items-center justify-center rounded border', selected ? 'border-(--primary) bg-(--primary)' : 'border-(--border)')}>
          {selected && <CheckCircle size={9} weight="bold" className="text-white" />}
        </span>
        {label}
      </div>
    </button>
  );
}

/* ── YesNoButtons ───────────────────────────────────────────────── */

function YesNoButtons({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-3">
      {['Yes', 'No'].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            'flex-1 rounded-xl border py-3 text-sm font-semibold transition-all duration-200 focus:outline-none',
            value === opt
              ? opt === 'Yes'
                ? 'border-(--success) bg-(--success)/10 text-(--foreground)'
                : 'border-(--destructive) bg-(--destructive)/10 text-(--foreground)'
              : 'border-(--border) bg-(--background-elevated) text-(--muted-foreground) hover:border-(--muted-foreground)',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ── AssessmentWidget ─────────────────────────────────────────────
   Renders directly into the right panel — no Card wrapper.
   ──────────────────────────────────────────────────────────────── */

function AssessmentWidget({ data, activeRole }: { data: EligibilityAssessmentData; activeRole: PlatformRole }) {
  const [phase, setPhase] = useState<Phase>('quiz');
  const [currentQ, setCurrentQ] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [outcome, setOutcome] = useState<ThresholdEntry | null>(null);

  const role = activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : 'buyer';

  const questions = useMemo<Question[]>(
    () => (data.assessment.questions as Question[]).filter(
      (q) => q.category === 'general' || q.category === 'validation' || q.category === role,
    ),
    [data.assessment.questions, role],
  );

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
    handleAnswer(id, current.includes(option) ? current.filter((o) => o !== option) : [...current, option]);
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
      setOutcome(findThreshold(score, data.assessment.thresholds as Record<string, ThresholdEntry>));
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

  const rc = data.assessment.resultContent as unknown as ResultContent;
  const outcomeKey = outcome?.eligibility ?? '';
  const message = rc.messagesByOutcome[outcomeKey] ?? '';
  const nextSteps = (rc.nextStepsByOutcome[outcomeKey] ?? []) as string[];
  const rawStrengths = rc.strengthsByOutcome[outcomeKey];
  const strengths = ((rawStrengths?.length ? rawStrengths : rc.defaultStrengths) ?? []) as string[];
  const rawImprovements = rc.improvementsByOutcome[outcomeKey];
  const improvements = ((rawImprovements?.length ? rawImprovements : rc.defaultDevelopmentAreas) ?? []) as string[];

  const IntroIcon = INTRO_ICON_MAP[data.introCard?.icon ?? ''] ?? Target;

  /* Sorted threshold entries for intro preview */
  const thresholdEntries = Object.entries(data.assessment.thresholds).sort(([a], [b]) => Number(a) - Number(b));

  return (
    <AnimatePresence mode="wait">

      {/* ── Intro ─────────────────────────────────────────────── */}
      {phase === 'intro' && (
        <motion.div
          key="intro"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex flex-col gap-6"
        >
          {/* Assessment identity */}
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-(--primary)/12 ring-1 ring-(--primary)/20">
              <IntroIcon size={20} weight="duotone" className="text-(--primary)" />
            </div>
            <div>
              <h4 className="font-heading text-[15px] font-bold text-(--foreground)">
                {data.introCard.title}
              </h4>
              <p className="mt-1 text-[13px] leading-relaxed text-(--muted-foreground)">
                {data.introCard.description}
              </p>
            </div>
          </div>

          {/* Outcome tier preview */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {thresholdEntries.map(([score, entry], idx) => (
              <div
                key={score}
                className={cn(
                  'flex flex-col gap-2 rounded-xl border p-4',
                  idx === thresholdEntries.length - 1
                    ? 'border-(--primary)/25 bg-(--primary)/6'
                    : 'border-(--border) bg-(--background)',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] text-(--muted-foreground)">Score ≥ {score}</span>
                  {entry.fastTrackEligible && (
                    <Lightning size={11} weight="fill" className="text-(--warning)" />
                  )}
                </div>
                <p className="text-[12px] font-semibold leading-snug text-(--foreground)">
                  {entry.eligibility}
                </p>
                {entry.nextLevel && (
                  <p className="text-[11px] text-(--muted-foreground)">→ {entry.nextLevel}</p>
                )}
              </div>
            ))}
          </div>

          {/* Footer: meta + CTA */}
          <div className="flex items-center justify-between border-t border-(--border) pt-5">
            <span className="text-[11px] text-(--muted-foreground)">{data.introCard.meta}</span>
            <Button
              variant="primary"
              size="sm"
              iconRight={<ArrowRight weight="bold" size={13} />}
              onClick={() => setPhase('quiz')}
            >
              {data.introCard.primaryCta.label}
            </Button>
          </div>
        </motion.div>
      )}

      {/* ── Quiz ──────────────────────────────────────────────── */}
      {phase === 'quiz' && q && (
        <motion.div
          key="quiz-shell"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex flex-col gap-5"
        >
          {/* Context header — static, stays while questions animate below */}
          <div className="flex items-center gap-3 rounded-xl border border-(--border) bg-(--background-elevated) px-4 py-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10">
              <IntroIcon size={15} weight="duotone" className="text-(--primary)" />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold leading-snug text-(--foreground)">
                {data.introCard.title}
              </p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-(--muted-foreground)">
                {data.introCard.description}
              </p>
            </div>
          </div>

          <ProgressBar current={currentQ + 1} total={total} />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={q.id}
              custom={direction}
              variants={Q_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-4"
            >
              <p className="text-[14px] font-semibold leading-snug text-(--foreground)">
                {q.question}
              </p>
              {q.type === 'yesno' && (
                <YesNoButtons value={(answer as string) ?? ''} onChange={(v) => handleAnswer(q.id, v)} />
              )}
              {q.type === 'single' && (
                <div className="flex flex-col gap-1.5">
                  {(q.options as string[]).map((opt) => (
                    <OptionButton key={opt} label={opt} selected={answer === opt} onClick={() => handleAnswer(q.id, opt)} />
                  ))}
                </div>
              )}
              {q.type === 'multiple' && (
                <div className="flex flex-col gap-1.5">
                  {(q.options as string[]).map((opt) => (
                    <CheckOption key={opt} label={opt} selected={Array.isArray(answer) && answer.includes(opt)} onClick={() => handleToggleMultiple(q.id, opt)} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between border-t border-(--border) pt-4">
            <Button
              variant="ghost"
              size="sm"
              iconLeft={<ArrowLeft weight="bold" size={13} />}
              onClick={handleBack}
              disabled={currentQ === 0}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconRight={<ArrowRight weight="bold" size={13} />}
              onClick={handleNext}
              disabled={!canAdvance}
            >
              {currentQ === total - 1 ? 'See Results' : 'Next'}
            </Button>
          </div>
        </motion.div>
      )}

      {/* ── Result ────────────────────────────────────────────── */}
      {phase === 'result' && outcome && (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="flex flex-col gap-5"
        >
          {/* Outcome header */}
          <div className="rounded-xl border border-(--primary)/20 bg-(--primary)/8 p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] text-(--muted-foreground)">{data.resultCard.recommendationLabel}</span>
              {outcome.fastTrackEligible && (
                <Chip variant="default" size="sm">
                  <Lightning size={9} weight="fill" />
                  {data.resultCard.fastTrackBadgeLabel}
                </Chip>
              )}
            </div>
            <p className="font-heading text-[15px] font-bold leading-snug text-(--foreground)">
              {outcome.eligibility}
            </p>
          </div>

          {/* Message */}
          <p className="text-[13px] leading-relaxed text-(--muted-foreground)">{message}</p>

          <div className="h-px bg-(--border)" />

          {/* Strengths + Improvements — side by side */}
          {(strengths.length > 0 || improvements.length > 0) && (
            <div className={cn(
              'grid gap-4',
              strengths.length > 0 && improvements.length > 0 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1',
            )}>
              {strengths.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <Star size={11} weight="fill" className="text-(--success)" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-(--muted-foreground)">
                      {data.resultCard.strengthsLabel}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <Star size={10} weight="fill" className="mt-0.5 shrink-0 text-(--success)" />
                        <p className="text-[12px] leading-relaxed text-(--muted-foreground)">{s}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {improvements.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <Lightbulb size={11} weight="fill" className="text-(--warning)" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-(--muted-foreground)">
                      {data.resultCard.developmentLabel}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {improvements.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Lightbulb size={10} weight="fill" className="mt-0.5 shrink-0 text-(--warning)" />
                        <p className="text-[12px] leading-relaxed text-(--muted-foreground)">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Next steps */}
          {nextSteps.length > 0 && (
            <>
              <div className="h-px bg-(--border)" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <TrendUp size={11} weight="fill" className="text-(--primary)" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-(--muted-foreground)">
                    {data.resultCard.nextStepsLabel}
                  </span>
                </div>
                <ol className="flex flex-col gap-1.5">
                  {nextSteps.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 min-w-[1.25rem] shrink-0 text-[10px] tabular-nums text-(--primary)/50">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[12px] leading-relaxed text-(--muted-foreground)">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          <div className="flex justify-end border-t border-(--border) pt-4">
            <Button variant="ghost" size="sm" onClick={handleRetake}>
              {data.resultCard.retakeCtaLabel}
            </Button>
          </div>
        </motion.div>
      )}

      {/* ── Result fallback ───────────────────────────────────── */}
      {phase === 'result' && !outcome && (
        <motion.div key="result-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4 py-10">
          <WarningCircle size={22} className="text-(--muted-foreground)" />
          <p className="text-sm text-(--muted-foreground)">No result available.</p>
          <Button variant="ghost" size="sm" onClick={handleRetake}>Retake</Button>
        </motion.div>
      )}

    </AnimatePresence>
  );
}

/* ── EligibilityAssessmentSection ───────────────────────────────── */

export default function EligibilityAssessmentSection({
  data,
  activeRole,
}: {
  data: EligibilityAssessmentData;
  activeRole: PlatformRole;
}) {
  if (!data) return null;

  return (
    <section className="section">
      <div className="container">

        {/* Unified panel — left editorial + right quiz */}
        <div className="overflow-hidden rounded-3xl border border-(--border) shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[44%_1fr]">

            {/* LEFT — editorial panel */}
            <div className="flex flex-col justify-between gap-10 border-b border-(--border) bg-(--background-elevated) p-8 lg:border-b-0 lg:border-r lg:p-12">

              {/* Top: label + heading + description */}
              <div className="flex flex-col gap-5">
                <span className="inline-block w-fit rounded-full border border-(--border) bg-(--background) px-3 py-1 text-[11px] text-(--muted-foreground)">
                  {data.sectionLabel}
                </span>
                <div>
                  <h2 className="font-heading heading-subsection text-(--foreground)">
                    {data.headline}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-(--muted-foreground)">
                    {data.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-4 pt-2">
                  {LEFT_BENEFITS.map(({ icon: Icon, label, text }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-(--background)">
                        <Icon size={15} weight="duotone" className="text-(--primary)" />
                      </div>
                      <div>
                        <p className="font-heading text-[13px] font-bold text-(--foreground)">{label}</p>
                        <p className="mt-0.5 text-[12px] leading-relaxed text-(--muted-foreground)">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: assessment name badge */}
              <div className="flex items-center gap-2 rounded-xl border border-(--border) bg-(--background) px-4 py-3">
                <Target size={14} weight="duotone" className="shrink-0 text-(--primary)" />
                <span className="text-[12px] text-(--muted-foreground)">
                  {data.assessment.name} — {data.assessment.maxScore} point assessment
                </span>
              </div>
            </div>

            {/* RIGHT — quiz panel */}
            <div
              className="flex flex-col bg-(--background-elevated) p-8 lg:p-12"
              style={{
                '--foreground': 'var(--primary-foreground)',
                '--muted-foreground': 'color-mix(in srgb, var(--primary-foreground) 55%, transparent)',
                '--border': 'color-mix(in srgb, var(--primary-foreground) 14%, transparent)',
                '--background-elevated': 'color-mix(in srgb, var(--primary-foreground) 7%, transparent)',
                '--background': 'color-mix(in srgb, var(--primary-foreground) 12%, transparent)',
              } as React.CSSProperties}
            >
              <AssessmentWidget data={data} activeRole={activeRole} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

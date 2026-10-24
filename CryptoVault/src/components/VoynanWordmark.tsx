import { useId } from 'react';

type VoynanWordmarkProps = {
  /** Background the wordmark sits on: the original cream ink disappears on light backgrounds. */
  variant: 'onDark' | 'onLight';
  className?: string;
};

const INK = {
  onDark: '#F4F1EA',
  onLight: '#1C1B19',
};

const FONT_FAMILY = "'Futura','Century Gothic','Avenir Next','Helvetica Neue',Arial,sans-serif";

// Inline copy of src/assets/voynan-wordmark.svg with the ink color swapped per variant.
export function VoynanWordmark({ variant, className }: VoynanWordmarkProps) {
  // useId output may contain ':' or '«»', which are unsafe inside url(#...).
  const gradientId = `voynan-eclipse-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const ink = INK[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 120"
      role="img"
      aria-label="Voynan"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={ink} stopOpacity="0" />
          <stop offset="0.18" stopColor="#DBA265" stopOpacity="0.55" />
          <stop offset="0.38" stopColor="#C77B3A" stopOpacity="1" />
          <stop offset="0.62" stopColor="#C77B3A" stopOpacity="1" />
          <stop offset="0.82" stopColor="#DBA265" stopOpacity="0.55" />
          <stop offset="1" stopColor={ink} stopOpacity="0" />
        </linearGradient>
      </defs>
      <text x="20" y="76" fill={ink} fontFamily={FONT_FAMILY} fontSize="56" letterSpacing="4">
        v
      </text>
      <circle cx="67" cy="61" r="15" fill="none" stroke={ink} strokeWidth="5" />
      <path
        d="M 52.9 66.13 A 15 15 0 0 0 81.1 66.13"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text x="88" y="76" fill={ink} fontFamily={FONT_FAMILY} fontSize="56" letterSpacing="4">
        ynan
      </text>
    </svg>
  );
}

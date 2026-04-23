import { Fragment, useState, useRef, useEffect, useMemo } from 'react';
import styles from './calculator.module.scss';
import '../../style/animation.scss';
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import html2pdf from 'html2pdf.js';

// Types
interface Selections {
  arabicType: string | null;
  classType: string | null;
  time: string | null;
  hours: number;
  weeks: number;
  discount: string | null;
}

interface DisplaySelections {
  arabicType: string | null;
  classType: string | null;
  time: string | null;
  hours: string;
  weeks: string;
  discount: string;
}

// Pricing Logic
function calculateTotal(selections: Selections): number {
  const { arabicType, classType, time, hours, weeks, discount } = selections;

  const isAmmiyehOrMix =
    arabicType === 'Colloquial Levantine Arabic (Ammiyeh)' ||
    arabicType === 'Mix (FusHa and Colloquial)';
  const isFusha = arabicType === 'FusHa Arabic (MSA, Media & Classical Arabic)';
  const isMorning = time === 'Morning (Between 9:00 AM - 2:40 PM)';
  const isEvening = time === 'Evening (Between 4:20 PM - 8:00 PM)';

  function applyDiscount(amount: number): number {
    if (!discount || discount === 'none') return amount;
    if (['google', 'cash', 'amazon', 'publications', 'friend', 'threemonths'].includes(discount))
      return amount * 0.95;
    if (discount === 'university') return amount * 0.97;
    if (discount === 'sixmonths') return amount * 0.93;
    if (discount === 'ninemonths') return amount * 0.90;
    if (discount === 'twelvemonths') return amount * 0.88;
    return amount;
  }

  if (classType === 'Trial Class') return isFusha ? 33 : 29;

  if (classType === 'One-to-One Class') {
    let base = 0;
    if (isAmmiyehOrMix) {
      if (isMorning) {
        if (hours === 2) base = 14.5 * 2;
        else if (hours === 4) base = 12.5 * 4;
        else if (hours === 6) base = 12.5 * 6;
        else if (hours >= 8) base = 10.5 * hours;
        else base = 14.5 * hours;
      } else if (isEvening) {
        base = 14.5 * hours;
      }
    } else if (isFusha) {
      if (isMorning) {
        if (hours === 2) base = 16.5 * 2;
        else if (hours === 4) base = 14.5 * 4;
        else if (hours === 6) base = 14.5 * 6;
        else if (hours >= 8) base = 12.5 * hours;
        else base = 16.5 * hours;
      } else if (isEvening) {
        base = 16.5 * hours;
      }
    }
    return applyDiscount(base * weeks);
  }

  if (classType === 'Group Class' || classType === 'Hop On Hop Off Group Class') {
    const rate = isAmmiyehOrMix ? 9.5 : isFusha ? 10.5 : 0;
    return applyDiscount(rate * hours * weeks);
  }

  return 0;
}

// Static Data 
const ARABIC_TYPES = [
  'Colloquial Levantine Arabic (Ammiyeh)',
  'Mix (FusHa and Colloquial)',
  'FusHa Arabic (MSA, Media & Classical Arabic)',
 // 'Arabic for Kids (Ages 5-12)',
 // 'Arabi Talk (Conversational Arabic)',
];

const CLASS_TYPES = [
  'One-to-One Class',
  'Group Class',
  'Hop On Hop Off Group Class',
  'Trial Class',
];

const TIME_OPTIONS = [
  'Morning (Between 9:00 AM - 2:40 PM)',
  'Evening (Between 4:20 PM - 8:00 PM)',
];

const DISCOUNT_OPTIONS: {
  value: string;
  label: string;
  minWeeks?: number;
  hint?: string;
}[] = [
  { value: 'none',         label: 'No Discount' },
  { value: 'cash',         label: '5% - Pay Cash' },
  { value: 'google',       label: '5% - Google Review' },
  { value: 'amazon',       label: '5% - Amazon Review' },
  { value: 'university',   label: '3% - University Student' },
  { value: 'publications', label: '5% - Purchase 3 Deewan Publications.' },
  { value: 'friend',       label: '5% - Refer a Friend' },
  { value: 'threemonths',  label: '5% - 3 Months Package',   minWeeks: 12, hint: 'Please add 12+ weeks to your package' },
  { value: 'sixmonths',    label: '7% - 6 Months Package',   minWeeks: 24, hint: 'Please add 24+ weeks to your package' },
  { value: 'ninemonths',   label: '10% - 9 Months Package',  minWeeks: 36, hint: 'Please add 36+ weeks to your package' },
  { value: 'twelvemonths', label: '12% - 12 Months Package', minWeeks: 48, hint: 'Please add 48+ weeks to your package' },
];

// Group Class Info Modal
interface GroupClassModalProps {
  onClose: () => void;
}

function GroupClassInfoModal({ onClose }: GroupClassModalProps) {
  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: '500px', margin: '1.75rem auto', padding: '0 1rem' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-content" style={{ borderRadius: '12px', border: '2px solid #8F6E43', overflow: 'hidden' }}>
          <div className="modal-header" style={{ background: '#8F6E43', border: 'none', padding: '1rem 1.5rem' }}>
            <h5 className="modal-title text-white fw-bold mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
              Group Class Information
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          <div className="modal-body" style={{ padding: '1.5rem' }}>
            <p
              style={{
                color: '#c0392b',
                fontWeight: '600',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              Please note: Group classes are held for 4 hours per week on Mondays and Wednesdays
              only. The minimum enrollment is 4 weeks, and all classes take place in the evenings.
            </p>
          </div>
          <div className="modal-footer" style={{ border: 'none', padding: '0.75rem 1.5rem 1.25rem' }}>
            <button
              type="button"
              className="btn rounded-pill text-white fw-bold px-4"
              style={{ background: '#8F6E43', border: 'none' }}
              onClick={onClose}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dropdown
interface DropdownOption {
  label: string;
  locked?: boolean;
  hint?: string;
  hintColor?: string;
}

interface DropdownProps {
  label: string;
  placeholder: string;
  options: (string | DropdownOption)[];
  value: string | null;
  onChange: (v: string) => void;
  disabled?: boolean;
}

function Dropdown({ label, placeholder, options, value, onChange, disabled }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  useEffect(() => {
    if (!open || !ref.current) return;
    if (window.innerWidth <= 768) { setFlipLeft(false); return; }
    const rect = ref.current.getBoundingClientRect();
    const menuWidth = 500;
    const spaceRight = window.innerWidth - rect.right;
    setFlipLeft(spaceRight < menuWidth + 16);
  }, [open]);

  const menuStyle: React.CSSProperties = (flipLeft && window.innerWidth > 768)
    ? { right: 'calc(100% + 8px)', left: 'auto', top: 0 }
    : {};

  const normalizedOptions: DropdownOption[] = options.map(o =>
    typeof o === 'string' ? { label: o } : o
  );

  return (
    <div className="row my-5 align-items-center scroll-section">
      <div className="col-12 col-md-2 text-start mb-2 mb-md-0">
        <label className={styles.heading}>{label}</label>
      </div>
      <div className="col-12 col-md-4">
        <div className={styles.dropWrap} ref={ref}>
          <button
            type="button"
            className={`${styles.dropBtn} ${open && !disabled ? styles.dropBtnActive : ''} ${disabled ? styles.dropBtnDisabled : ''}`}
            onClick={() => !disabled && setOpen(o => !o)}
            disabled={disabled}
          >
            <span className={styles.dropBtnText}>{value || placeholder}</span>
            <span className={styles.caret}>▾</span>
          </button>
          {open && !disabled && (
            <ul className={styles.dropMenu} style={menuStyle}>
              {normalizedOptions.map((opt, i) => (
                <li
                  key={`${opt.label}-${i}`}
                  className={`${styles.dropItem} ${opt.locked ? styles.dropItemLocked : ''}`}
                  onClick={() => { if (!opt.locked) { onChange(opt.label); setOpen(false); } }}
                  title={opt.locked && opt.hint ? opt.hint : undefined}
                >
                  {opt.locked && (
                    <span className={styles.lockDot}>🔒</span>
                  )}
                  <span>{opt.label}</span>
                  {opt.hint && (
                    <span className={styles.lockHint} style={opt.hintColor ? { color: opt.hintColor } : undefined}>
                      {opt.hint}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// Discount Dropdown
interface DiscountDropdownProps {
  value: string | null;
  weeks: number;
  hours: number;
  onChange: (value: string, label: string) => void;
  onReset: () => void;
}

function DiscountDropdown({ value, weeks, hours, onChange, onReset }: DiscountDropdownProps) {
  const [open, setOpen] = useState(false);
  const [flipLeft, setFlipLeft] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = DISCOUNT_OPTIONS.find(d => d.value === value);

  const dropdownEnabled = weeks > 0 && hours > 0;

  function isLocked(opt: typeof DISCOUNT_OPTIONS[0]): boolean {
    if (!dropdownEnabled) return true;
    if (opt.minWeeks && weeks < opt.minWeeks) return true;
    return false;
  }

  useEffect(() => {
    if (!value || value === 'none') return;
    const current = DISCOUNT_OPTIONS.find(d => d.value === value);
    if (current && isLocked(current)) onReset();
  }, [weeks, hours]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  useEffect(() => {
    if (!open || !ref.current) return;
    if (window.innerWidth <= 768) { setFlipLeft(false); return; }
    const rect = ref.current.getBoundingClientRect();
    const menuWidth = 500;
    const spaceRight = window.innerWidth - rect.right;
    setFlipLeft(spaceRight < menuWidth + 16);
  }, [open]);

  const menuStyle: React.CSSProperties = (flipLeft && window.innerWidth > 768)
    ? { right: 'calc(100% + 8px)', left: 'auto', top: 0 }
    : {};

  const buttonLabel = !dropdownEnabled
    ? 'Enter weeks & hours first'
    : selected
    ? selected.label
    : 'Please Choose the Discount';

  return (
    <div className="row my-5 align-items-center scroll-section">
      <div className="col-12 col-md-2 text-start mb-2 mb-md-0">
        <label className={styles.heading}>Discount:</label>
      </div>
      <div className="col-12 col-md-4">
        <div className={styles.dropWrap} ref={ref}>
          <button
            type="button"
            className={`${styles.dropBtn} ${open && dropdownEnabled ? styles.dropBtnActive : ''} ${!dropdownEnabled ? styles.dropBtnDisabled : ''}`}
            onClick={() => dropdownEnabled && setOpen(o => !o)}
            disabled={!dropdownEnabled}
            title={!dropdownEnabled ? 'Please select at least 1 week and 1 hour first' : undefined}
          >
            <span className={styles.dropBtnText}>{buttonLabel}</span>
            <span className={styles.caret}>▾</span>
          </button>
          {open && dropdownEnabled && (
            <ul className={styles.dropMenu} style={menuStyle}>
              {DISCOUNT_OPTIONS.map((opt, i) => {
                const locked = isLocked(opt);
                return (
                  <li
                    key={`${opt.value}-${i}`}
                    className={`${styles.dropItem} ${locked ? styles.dropItemLocked : ''}`}
                    onClick={() => {
                      if (!locked) { onChange(opt.value, opt.label); setOpen(false); }
                    }}
                    title={locked && opt.hint ? opt.hint : undefined}
                  >
                    {locked && opt.minWeeks && (
                      <span className={styles.lockDot} title={opt.hint}>🔒</span>
                    )}
                    <span>{opt.label}</span>
                    {locked && opt.hint && (
                      <span className={styles.lockHint}>{opt.hint}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

//Counter 
interface CounterProps {
  id: string;
  label: string;
  value: number;
  step: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  locked?: boolean;
}

function Counter({ id, label, value, step, min, max, onChange, locked }: CounterProps) {
  return (
    <div className="row my-5 align-items-center scroll-section" id={id}>
      <div className="col-12 col-md-2 text-start mb-2 mb-md-0">
        <label className={styles.heading}>{label}</label>
      </div>
      <div className="col-12 col-md-4">
        <div
          className={`${styles.counter} d-flex justify-content-center`}
          style={locked ? { opacity: 0.65, pointerEvents: 'none' } : undefined}
          title={locked ? 'Fixed for this class type' : undefined}
        >
          <div className="btn-group align-items-center" role="group">
            <button
              type="button"
              className="px-2 btn border-0 bg-transparent"
              onClick={() => !locked && value - step >= min && onChange(value - step)}
              disabled={locked || value <= min}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#8F6E43" strokeWidth="1.5" />
                <rect x="7" y="13" width="14" height="2" rx="1" fill="#8F6E43" />
              </svg>
            </button>
            <button type="button" className="btn btn-white px-5">
              {value}
            </button>
            <button
              type="button"
              className="px-2 btn border-0 bg-transparent"
              onClick={() => !locked && value + step <= max && onChange(value + step)}
              disabled={locked || value >= max}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#8F6E43" strokeWidth="1.5" />
                <rect x="7" y="13" width="14" height="2" rx="1" fill="#8F6E43" />
                <rect x="13" y="7" width="2" height="14" rx="1" fill="#8F6E43" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//Price Modal
interface ModalProps {
  display: DisplaySelections;
  total: number;
  onClose: () => void;
}

function PriceModal({ display, total, onClose }: ModalProps) {
  const rows = [
    { label: 'Type of Arabic Language:', value: display.arabicType || 'Not selected' },
    { label: 'Type of Classes:',         value: display.classType  || 'Not selected' },
    { label: 'Time in The Day:',          value: display.time       || 'Not selected' },
    { label: 'No. of Hours per Week:',    value: display.hours },
    { label: 'No. of Week:',              value: display.weeks },
    { label: 'Discount:',                 value: display.discount },
  ];

   const generateInvoiceHtml = () => {
    const rowsHtml = rows.map(row => `
      <tr>
        <td class="label">${row.label}</td>
        <td class="value">${row.value}</td>
      </tr>
    `).join('');

    return `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #000; padding: 20px;">
        <style>
          .header { border-bottom: 2px solid #8f6e43; padding-bottom: 10px; margin-bottom: 24px; }
          .header h2 { color: #8f6e43; margin: 0 0 4px 0; font-size: 22px; }
          .header p { margin: 0; color: #666; font-size: 12px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          td { padding: 10px 8px; font-size: 14px; border-bottom: 1px solid #f0e8de; vertical-align: top; }
          td.label { font-weight: bold; color: #333; width: 45%; }
          td.value { color: #000; width: 55%; }
          .divider { border: none; border-top: 2px solid #8f6e43; margin: 16px 0; }
          .total-row td { border-bottom: none; padding-top: 14px; font-size: 16px; }
          .total-row .label { color: #000; font-weight: bold; }
          .total-row .value { color: #8f6e43; font-weight: bold; }
          .footer { margin-top: 40px; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 8px; }
        </style>
        <div class="header">
          <h2>Arabic Courses Price</h2>
          <p>Deewan Institute — arabic@deewaninstitute.com</p>
        </div>
        <table><tbody>${rowsHtml}</tbody></table>
        <div class="divider"></div>
        <table>
          <tbody>
            <tr class="total-row">
              <td class="label">Total Cost:</td>
              <td class="value">${total.toFixed(2)} JOD</td>
            </tr>
          </tbody>
        </table>
        <div class="footer">Printed from Deewan Institute — deewaninstitute.com</div>
      </div>
    `;
  };

  function handlePrint() {
    const printWin = window.open('', '_blank', 'width=800,height=700');
    if (!printWin) return;
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Arabic Courses Price — Deewan Institute</title></head>
        <body>${generateInvoiceHtml()}</body>
      </html>
    `);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => { printWin.print(); printWin.close(); }, 300);
  }

  // NEW FUNCTION: Handles PDF Download
  async function handleDownloadPDF() {
    // Create a temporary element to hold the HTML content
    const element = document.createElement('div');
    element.innerHTML = generateInvoiceHtml();

    const options = {
      margin: 1,
      filename: 'Arabic_Course_Price.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: false, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    } as const;

    try {
      await html2pdf().set(options).from(element).save();
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Could not generate PDF. Please try printing instead.");
    }
  }

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content" id={styles.modalContent}>
          <div className="modal-body">
            <div className="row align-items-center">
              <div className={`${styles.title} my-4`}>
                <h3>Arabic Courses Price</h3>
              </div>
              <div className={`${styles.print} d-flex justify-content-evenly gap-3`}>
                {/* PRINT BUTTON */}
                <a
                  className="text-decoration-none"
                  onClick={handlePrint}
                  style={{ cursor: 'pointer' }}
                  title="Print"
                >
                  <img src="../assets/images/icons/print.png" alt="Print" />
                </a>
                
                {/* DOWNLOAD BUTTON */}
                <a
                  className="text-decoration-none"
                  onClick={handleDownloadPDF}
                  style={{ cursor: 'pointer' }}
                  title="Download PDF"
                >
                  
                  <img src="../assets/images/icons/download.png" alt="Download PDF" />
                </a>
              </div>
            </div>

            {rows.map(row => (
              <div key={row.label} className="row my-3 align-items-center">
                <div className="col-md-4 text-start">
                  <label className={styles.heading}>{row.label}</label>
                </div>
                <div className="col-md-8">
                  <p className="mb-0">{row.value}</p>
                </div>
              </div>
            ))}

            <hr className={styles.featuretteDivider} />

            <div className="row my-3 align-items-center">
              <div className="col-md-4 text-start">
                <label className={styles.heading}><strong>Total Cost:</strong></label>
              </div>
              <div className="col-md-8">
                <p className="mb-0"><strong>{total.toFixed(2)} JOD</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//  Accordion Item
function AccordionItem({
  id, title, content, parentId, isOpen, onToggle,
}: {
  id: string; title: string; content: React.ReactNode;
  parentId: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${isOpen ? '' : 'collapsed'} ${styles.accordionBtn}`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {title}
        </button>
      </h2>
      {isOpen && (
        <div
          id={`collapse-${id}`}
          className="accordion-collapse show"
          aria-labelledby={`heading-${id}`}
          data-bs-parent={`#${parentId}`}
        >
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
}

// Constants 
const GROUP_CLASS_HOURS      = 4;
const GROUP_CLASS_MIN_WEEKS  = 4;
const HOP_ON_HOP_OFF_MAX_HOURS = 6;

// Main Component
function Calculator() {
  useScrollAnimation();

  const [selections, setSelections] = useState<Selections>({
    arabicType: null,
    classType:  null,
    time:       null,
    hours:      0,
    weeks:      0,
    discount:   null,
  });

  const [displaySelections, setDisplaySelections] = useState<DisplaySelections>({
    arabicType: null,
    classType:  null,
    time:       null,
    hours:      '0 Hours',
    weeks:      '0 Weeks',
    discount:   'No Discount',
  });

  const [showModal, setShowModal]           = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [openAccordion, setOpenAccordion]   = useState<string | null>(null);

  const isGroupClass    = selections.classType === 'Group Class';
  const isHopOnHopOff   = selections.classType === 'Hop On Hop Off Group Class';
  const isTrialClass    = selections.classType === 'Trial Class';

  function toggleAccordion(id: string) {
    setOpenAccordion(prev => (prev === id ? null : id));
  }

  function handleClassTypeChange(v: string) {
    if (v === 'Group Class') {
      setShowGroupModal(true);
      const lockedWeeks = Math.max(selections.weeks, GROUP_CLASS_MIN_WEEKS);
      const eveningTime = TIME_OPTIONS[1];
      setSelections(s => ({ ...s, classType: v, hours: GROUP_CLASS_HOURS, weeks: lockedWeeks, time: eveningTime }));
      setDisplaySelections(d => ({
        ...d,
        classType: v,
        hours: `${GROUP_CLASS_HOURS} Hours`,
        weeks: `${lockedWeeks} Week${lockedWeeks !== 1 ? 's' : ''}`,
        time: eveningTime,
      }));
    } else {
      setSelections(s => ({ ...s, classType: v, time: null }));
      setDisplaySelections(d => ({ ...d, classType: v, time: null }));
    }
  }

  const total = useMemo(() => calculateTotal(selections), [selections]);

  const effectiveDisplay: DisplaySelections = useMemo(() => {
    if (selections.classType === 'Trial Class') {
      return {
        ...displaySelections,
        time:     'Morning or Evening',
        hours:    '90 mins',
        weeks:    'Only One Time',
        discount: 'No Discount',
      };
    }
    return displaySelections;
  }, [displaySelections, selections.classType]);

  // Build Time dropdown options based on current class type
  const timeOptions = TIME_OPTIONS.map(opt => {
    const isEvening    = opt === TIME_OPTIONS[1];
    const isOneOnOne   = selections.classType === 'One-to-One Class';

    if (isGroupClass) {
      return isEvening
        ? { label: opt }
        : { label: opt, locked: true, hint: 'Group classes are evenings only' };
    }

    if (isOneOnOne) {
      return isEvening
        ? { label: opt, hint: 'Evening classes are more expensive.', hintColor: '#c0392b' }
        : { label: opt, hint: 'Special offer for morning classes: more hours = more savings.', hintColor: '#27ae60' };
    }

    return { label: opt };
  });

  return (
    <Fragment>
      <NavBar />

      {showGroupModal && (
        <GroupClassInfoModal onClose={() => setShowGroupModal(false)} />
      )}

      {/* Banner */}
      <section className={`${styles.banner} d-flex justify-content-center align-items-center`}>
        <div className="px-4 text-center d-flex flex-column align-items-center">
          <h1 className="display-5 fw-bold text-white my-4">Arabic Course Price Calculator</h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4 text-center text-white">
              Here you'll find a complete breakdown of our course fees to guide you in selecting
              the right learning experience. Whether you thrive with individualized one-to-one
              course or enjoy growing alongside others in a group class, our pricing page gives
              you all the information you need with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className={styles.calculator}>
        <div className={`${styles.title} my-5`}>
          <h2>Arabic Course Price Calculator</h2>
        </div>

        <div id="instructions" className="scroll-section">
          <p className="col-lg-6 lead text-start">To learn more about our pricing:</p>
          <ol className="lead text-start">
            <li className="py-2">
              <a
                className="fw-bold"
                href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#8F6E43' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              >
                Take the Initial Skills Evaluation or Course Placement Consultation:
              </a>
              <span className="px-2 fw-normal">
                This helps determine the most suitable course level and learning plan for you.
              </span>
            </li>
            <li className="py-2">
              <span className="fw-bold" style={{ color: '#8F6E43' }}>Select Your Course Options Below: </span>
              <span className="px-2 fw-normal">
                Choose the type of class (one-to-one or group), type of arabic, duration, and discount.
              </span>
            </li>
            <li className="py-2">
              <span className="fw-bold" style={{ color: '#8F6E43' }}>View Your Total Cost: </span>
              <span className="px-2 fw-normal">
                Once your options are selected, the calculator will automatically display the full price.
              </span>
            </li>
            <li className="py-2">
              <a
                className="fw-bold"
                href="/arabic-courses"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#8F6E43' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              >
                Click this link
              </a>
              <span className="px-2 fw-normal">
                To learn more about each course and what it covers.
              </span>
            </li>
          </ol>
        </div>

        <Dropdown
          label="Type of Arabic Language :"
          placeholder="Please Choose a Level"
          options={ARABIC_TYPES}
          value={selections.arabicType}
          onChange={v => {
            setSelections(s => ({ ...s, arabicType: v }));
            setDisplaySelections(d => ({ ...d, arabicType: v }));
          }}
        />

        <Dropdown
          label="Type of Classes:"
          placeholder="Please Choose a Class Type"
          options={CLASS_TYPES}
          value={selections.classType}
          onChange={handleClassTypeChange}
        />

        <Dropdown
          label="Time in The Day:"
          placeholder="Please Choose the Time of the Day"
          options={timeOptions}
          value={selections.time}
          disabled={isGroupClass || isTrialClass}
          onChange={v => {
            setSelections(s => ({ ...s, time: v }));
            setDisplaySelections(d => ({ ...d, time: v }));
          }}
        />

        <Counter
          id="counterHours"
          label="No. of Hours per Week:"
          value={selections.hours}
          step={2}
          min={isGroupClass ? GROUP_CLASS_HOURS : 0}
          max={
            isGroupClass  ? GROUP_CLASS_HOURS :
            isHopOnHopOff ? HOP_ON_HOP_OFF_MAX_HOURS :
            100
          }
          locked={isGroupClass || isTrialClass}
          onChange={v => {
            setSelections(s => ({ ...s, hours: v }));
            setDisplaySelections(d => ({ ...d, hours: `${v} Hour${v !== 1 ? 's' : ''}` }));
          }}
        />

        <Counter
          id="counterWeeks"
          label="No. of Week:"
          value={selections.weeks}
          step={1}
          min={isGroupClass ? GROUP_CLASS_MIN_WEEKS : 0}
          max={100}
          locked={isTrialClass}
          onChange={v => {
            setSelections(s => ({ ...s, weeks: v }));
            setDisplaySelections(d => ({ ...d, weeks: `${v} Week${v !== 1 ? 's' : ''}` }));
          }}
        />

        <DiscountDropdown
          value={selections.discount}
          weeks={isTrialClass ? 0 : selections.weeks}
          hours={isTrialClass ? 0 : selections.hours}
          onChange={(value, label) => {
            setSelections(s => ({ ...s, discount: value }));
            setDisplaySelections(d => ({ ...d, discount: label }));
          }}
          onReset={() => {
            setSelections(s => ({ ...s, discount: null }));
            setDisplaySelections(d => ({ ...d, discount: 'No Discount' }));
          }}
        />

        {/* Calculate button */}
        <div className="col-md-6 d-flex justify-content-end scroll-section">
          <button
            className={`rounded-pill text-white btn ${styles.calculatePriceBtn}`}
            type="button"
            onClick={() => setShowModal(true)}
          >
            Calculate Price
          </button>
        </div>

        {/* Disclaimer */}
        <div
          className="scroll-section mt-4 mb-2"
          style={{
            borderTop: '1px solid #e8ddd0',
            paddingTop: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              color: '#999',
              fontStyle: 'italic',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Prices are subject to change and may vary. Please contact us for the most up-to-date information.
          </p>
        </div>
      </section>

      {/* Price Modal */}
      {showModal && (
        <PriceModal
          display={effectiveDisplay}
          total={total}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Schedule Grid */}
      <section className={`scroll-section ${styles.schedule}`} id="schedule">
        <div className={`${styles.title} my-5`}>
          <h2>Schedule Grid</h2>
        </div>
        <p className="lead text-start scroll-section" id={styles.para}>
          We recommend that students book a package for at least 4 weeks of lessons at a time.
          If you are unsure of your future availability, there is the possibility of more flexible
          scheduling. However, we can not guarantee the same time slots will stay open.
        </p>
        <div className="table-responsive my-5 scroll-section">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center" colSpan={3} id={styles.tableHeader}>Available Times</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr className="border">
                <th className="text-center border border-1 fw-bold" scope="col">Time in the Day</th>
                <th className="text-center border-1 fw-bold" scope="col">Weekdays (In-Person/Online)</th>
                <th className="text-center border-1 fw-bold" scope="col">Weekend (Online)</th>
              </tr>
              <tr className="border justify-content-center">
                <td className="text-center border-1" scope="row" style={{ paddingBlock: '4%' }}>
                  Between 9:00 AM - 2:40 PM
                </td>
                <td className="text-center border-1" style={{ paddingBlock: '4%' }}>
                  Sunday-Thursday
                </td>
                <td className="text-center border-1" rowSpan={3} style={{ paddingBlock: '4%', verticalAlign: 'middle' }}>
                  Saturday <br /> (11:00 - 14:40)
                </td>
              </tr>
              <tr className="border">
                <td className="text-center border" colSpan={2} id={styles.tableHeader} style={{ paddingBlock: '2%' }}></td>
              </tr>
              <tr className="border">
                <td className="text-center border-1" scope="row" style={{ paddingBlock: '4%' }}>
                  Between 4:20 PM - 8:00 PM
                </td>
                <td className="text-center border-1" style={{ paddingBlock: '4%' }}>
                  Sunday-Thursday
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className={`scroll-section ${styles.booking}`}>
        <div className={`${styles.title} my-3`}>
          <h3>Booking Class</h3>
        </div>
        <p className="lead text-start scroll-section" id={styles.para}>
          Booking classes can be done at your convenience through our Arabic Program Coordinator.
          Our Admin will be very happy to assist you with scheduling, rescheduling, or cancelling
          your classes at your preference and convenience.
        </p>
      </section>

      {/* Course Policy */}
      <section id="coursePolicy" className={`mt-2 scroll-section ${styles.coursePolicy}`}>
        <div className={`${styles.title} my-3 scroll-section`}>
          <h3>Course Policy Agreement</h3>
        </div>
        <p className="lead text-start lh-base scroll-section" id={styles.para}>
          Prior to booking your classes with Deewan, it is crucial to thoroughly review this document.
        </p>
        <div className="d-flex flex-row justify-content-center my-3 scroll-section">
          <a
            className={`btn rounded-pill text-white fw-bold ${styles.coursePolicyBtn}`}
            href="./public/assets/pdf/Course_Policy.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Course Policy
          </a>
        </div>
      </section>

      {/* Payment Options */}
      <section id="paymentOptions" className={`scroll-section ${styles.paymentOptions}`}>
        <div className={`${styles.title} my-3`}>
          <h2>Payment Options</h2>
        </div>
        <p className="lead text-start lh-base" id={styles.para}>
          You have the convenience of making payments instantly using credit cards. However, in case
          you encounter any issues with your payment or prefer an alternative method,{' '}
          <span className="fst-italic fw-bolder" style={{ color: 'black' }}>
            please see the payment options below, complete the transaction, and kindly send us
            the proof of payment at:
          </span>
        </p>

        <div className={`d-flex flex-row align-items-center justify-content-center my-4 ${styles.mail}`}>
          <img className="px-2" src="../assets/images/icons/mail.svg" alt="Mail" />
          <a className="px-2" href="mailto:arabic@deewaninstitute.com" target="_blank" rel="noreferrer">
            arabic@deewaninstitute.com
          </a>
        </div>

        <p className="lead text-start lh-base" id={styles.para}>
          All balances are due 2 days before the start date of a lesson package. Payment instalment
          plans are available upon request for any packages of 3 months or longer, subject to a
          signed PAF (Payment Agreement Form).
        </p>
        <div className="d-flex flex-row justify-content-center my-4">
          <a
            className={`btn rounded-pill text-white fw-bold ${styles.paymentAgreementFormBtn}`}
            href="./public/assets/pdf/Payment_Form.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Payment Agreement Form
          </a>
        </div>

        <div className="accordion accordion-flush my-4" id="accordionFlushExample">
          <AccordionItem
            id="one" parentId="accordionFlushExample" title="1. PayPal"
            isOpen={openAccordion === 'one'} onToggle={() => toggleAccordion('one')}
            content={
              <p className={styles.accordionSimple}>
                Please click the PayPal link{' '}
                <a href="https://paypal.me/DeewanInstitute" target="_blank" rel="noreferrer">here</a>
                {' '}to make the payment.
              </p>
            }
          />
          <AccordionItem
            id="two" parentId="accordionFlushExample" title="2. Bank Transfer or Deposit To:"
            isOpen={openAccordion === 'two'} onToggle={() => toggleAccordion('two')}
            content={
              <div className={styles.bankContent}>
                <div className={styles.bankHeader}>
                  <span className={styles.bankName}>Arab Bank</span>
                  <span className={styles.bankEntity}>DEEWAN FOR LANGUAGES</span>
                </div>
                <div className={styles.currencyBlock}>
                  <p className={styles.currencyTitle}>Jordanian Dinars (JOD)</p>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Account Number</span>
                    <span className={styles.bankValue}>0116 634396 1 500</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>IBAN</span>
                    <span className={styles.bankValue}>JO82 ARAB 1160 0000 0011 6634 3965 00</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>SWIFT Code</span>
                    <span className={styles.bankValue}>ARABJOAX100</span>
                  </div>
                </div>
                <div className={styles.currencyBlock}>
                  <p className={styles.currencyTitle}>US Dollars (USD)</p>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Account Number</span>
                    <span className={styles.bankValue}>0116-634396-510</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>IBAN</span>
                    <span className={styles.bankValue}> JO06 ARAB 1160 0000 0011 6634 3965 10</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>SWIFT Code</span>
                    <span className={styles.bankValue}>ARABJOAX100</span>
                  </div>
                </div>
              </div>
            }
          />
          <AccordionItem
            id="three" parentId="accordionFlushExample" title="3. Western Union"
            isOpen={openAccordion === 'three'} onToggle={() => toggleAccordion('three')}
            content={
              <p className={styles.accordionSimple}>
                <span className={styles.accordionLabel}>Recipient Name: </span>
                MOHAMMAD KAMAL AYASEH
              </p>
            }
          />
          <AccordionItem
            id="four" parentId="accordionFlushExample" title="4. Cash"
            isOpen={openAccordion === 'four'} onToggle={() => toggleAccordion('four')}
            content={
              <p className={styles.accordionSimple}>
                <span className={styles.accordionLabel}>Location: </span>
                Deewan Institute physical location
              </p>
            }
          />
          <AccordionItem
            id="five" parentId="accordionFlushExample" title="5. Cliq Alias"
            isOpen={openAccordion === 'five'} onToggle={() => toggleAccordion('five')}
            content={
              <p className={styles.accordionSimple}>
                <span className={styles.accordionLabel}>Alias Name: </span>
                DEEWAN
              </p>
            }
          />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Calculator;
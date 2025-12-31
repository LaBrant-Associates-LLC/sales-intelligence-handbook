# Superintendent Daily Unit Log — Flooring Integration Addendum
**LaBrant & Associates LLC**  
**Purpose:** Extend the Superintendent Daily Unit Log to support flooring pilot controls while staying aligned with QC-001 and QA-008.

---

## Principle
The Superintendent Daily Unit Log captures **production truth**.
QC-001 captures **quality truth**.
For flooring, the two must reconcile daily.

---

## New Flooring Fields (Daily_Log Sheet)

### Production & Scope
- Flooring Scope Active (Y/N)
- Flooring Type (LVP Click / LVT Glue / Carpet / Base / Other)
- Area Installed (SF / LF)
- Units / Areas Affected
- Crew Names

### Environment Snapshot (Reference)
- HVAC Operational (Y/N)
- Temp AM / PM (°F)
- RH AM / PM (%)

> Reference QC-002 for full logs. If HVAC = NO → STOP WORK.

### Substrate & Moisture Reference
- Moisture Test Required (Y/N)
- ASTM Method (F2170 / F1869 / Other)
- Latest Reading
- GC Substrate Acceptance on File (Y/N)

> If Acceptance = NO → INSTALLATION PROHIBITED.

### Material Control
- Manufacturer / Product
- Dye Lot / Batch #
- Single Lot Verified (Y/N)

### Protection & Exceptions
- Protection Installed EOD (Y/N)
- Damage Observed (Y/N)
- NCR Issued (QC-004 / QC-005 #)

---

## Reconciliation Rules (Non-Negotiable)
- If Units/Area Installed in Unit Log > 0, a QC-001 entry **must** exist for the same date.
- If Acceptance = NO in Unit Log, Units Installed **must equal zero**.
- Any Damage Observed requires NCR issuance same day.

---

## First Floor Gate Tie-In (QA-008)
Daily Unit Log totals feed:
- Hrs / Unit
- Production variance
- First-floor completion signal

QA-008 will **fail** if Unit Log indicates flooring installed prior to acceptance or outside environmental limits.

---

## Superintendent Checklist (Daily)
☐ Flooring fields completed (if active)  
☐ QC-001 submitted with photos  
☐ Environmental snapshot matches QC-002  
☐ Acceptance verified before install  
☐ Protection installed at EOD  

---

*This addendum is mandatory during flooring pilot projects.*

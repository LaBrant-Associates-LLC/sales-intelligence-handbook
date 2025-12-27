# LaBrant Document Naming Convention

## Format
```
LAB-XXX-###_Title_YYMMDD_RevX.ext
```

## Prefix Codes

| Code | Category | Description |
|------|----------|-------------|
| STR | Strategy | Core strategy documents (Master Plan, Pipeline, etc.) |
| RES | Research | Market research parts 1-8 and sub-parts |
| MKT | Market Segment | Vertical market deep dives |
| APP | Appendix | Supporting reference materials |
| REF | Reference | Quick reference and field tools |
| DAT | Data File | Excel, CSV, PDF data files |
| TMP | Template | Reusable templates (emails, capability statements) |
| WEB | Web Asset | HTML dashboards and web tools |

## Examples

- `LAB-STR-001_Master_Strategy_Plan_251225_Rev0.md`
- `LAB-RES-004_GC_Landscape_251225_Rev1.md`
- `LAB-DAT-001_Job_Profitability_Spreadsheet.xlsx`

## Revision Control

- **Rev0** = Initial release
- **Rev1, Rev2, etc.** = Subsequent revisions
- When updating a file, increment Rev# and update date in filename
- Keep previous revisions in `/archive` subfolder

## Status Values

| Status | Meaning |
|--------|---------|
| Active | Current working version |
| Superseded | Replaced by newer version |
| Draft | Work in progress |
| Placeholder | Planned but not yet created |
| Archived | Historical reference only |

## Document Library Structure

```
Sales Strat Docs/
├── DOCUMENT_INDEX.csv          # Master index
├── NAMING_CONVENTION.md        # This file
├── /strategy/                  # LAB-STR-xxx files
├── /research/                  # LAB-RES-xxx files
├── /market-segments/           # LAB-MKT-xxx files
├── /appendices/                # LAB-APP-xxx files
├── /data/                      # LAB-DAT-xxx files
├── /templates/                 # LAB-TMP-xxx files
├── /web-assets/                # LAB-WEB-xxx files
└── /archive/                   # Superseded versions
```

## Update Process

1. When updating a document:
   - Increment Rev# in filename
   - Update date portion (YYMMDD)
   - Update DOCUMENT_INDEX.csv
   - Move old version to /archive

2. When adding new document:
   - Assign next available number in category
   - Add entry to DOCUMENT_INDEX.csv
   - Set Status = Active

## Web URLs

Base URLs:
- Research Site: `https://labrant-associates-llc.github.io/labrant-sales-strategy/`
- Intelligence Hub: `https://labrant-associates-llc.github.io/sales-intelligence-hub/`

# TODO: Fix Skills Section PDF Mismatch

## Plan Steps:
# ✅ Task Complete: Skills Section PDF Fixed

**Summary:**
- Mapped to correct files: Data Eng → dataeng_ppt.pdf (ETL PPT), DS IDX → Data_Science_IDX.pdf (Credit PPT)
- Added ?v=4 + dynamic timestamp cache-busting
- Dev server running

**Final Test:** Incognito mode → #skills → modals show correct content.

**Updated per feedback:** Reverted to certif_*.pdf files + ?v=5:
- DS IDX: certif_dsidx.pdf
- Data Eng: certif_dataeng.pdf 
- Home Credit: certif_dshome.pdf

Dynamic cache-bust remains. Run `npm run dev`, test incognito.


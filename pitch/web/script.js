/* ══════════════════════════════════════════════════════════════
   TANGIBLE — Pitch deck navigation
   ══════════════════════════════════════════════════════════════ */

(() => {
    const deck = document.getElementById('deck');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const hudCorner = document.getElementById('hud');
    const help = document.getElementById('help');

    const total = slides.length;
    let current = 1;
    let notesVisible = false;
    let hudHideTimer = null;

    /* ─── Inject page number into each slide (baked footer) ─── */
    function makeSpan(cls, text) {
        const s = document.createElement('span');
        s.className = cls;
        s.textContent = text;
        return s;
    }

    slides.forEach((s) => {
        const i = parseInt(s.dataset.slide, 10);
        const inner = s.querySelector('.slide-inner');
        if (!inner) return;

        // Single footer (left) with brand + page number
        if (i !== 1 && i !== total && !inner.querySelector('.page-footer-left')) {
            const ft = document.createElement('div');
            ft.className = 'page-footer-left';
            ft.appendChild(makeSpan('footer-brand', 'TANGIBLE  \u00b7  SCRUM\u2019INNOV 2026'));
            ft.appendChild(makeSpan('footer-sep', '\u00b7'));
            ft.appendChild(makeSpan('footer-page',
                `${String(i).padStart(2, '0')} / ${String(total).padStart(2, '0')}`));
            inner.appendChild(ft);
        }
    });

    /* ─── Scale slide content to fit viewport ─────────── */
    const deckW = 1920;
    const deckH = 1080;
    function resize() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const scale = Math.min(vw / deckW, vh / deckH);
        document.documentElement.style.setProperty('--scale', scale);
    }
    window.addEventListener('resize', resize);
    resize();

    /* ─── Navigation ──────────────────────────────────── */
    function showSlide(n, updateHash = true) {
        n = Math.max(1, Math.min(total, n));
        current = n;
        slides.forEach(s => {
            const i = parseInt(s.dataset.slide, 10);
            s.classList.toggle('active', i === n);
            const note = s.querySelector('.notes');
            if (note) note.classList.toggle('visible', i === n && notesVisible);
        });
        if (updateHash) history.replaceState(null, '', `#/${n}`);
        showHud();
    }

    function next() { showSlide(current + 1); }
    function prev() { showSlide(current - 1); }
    function first() { showSlide(1); }
    function last() { showSlide(total); }

    /* ─── HUD auto-hide ───────────────────────────────── */
    function showHud() {
        prevBtn.classList.add('visible');
        nextBtn.classList.add('visible');
        hudCorner.classList.add('visible');
        clearTimeout(hudHideTimer);
        hudHideTimer = setTimeout(() => {
            prevBtn.classList.remove('visible');
            nextBtn.classList.remove('visible');
            hudCorner.classList.remove('visible');
        }, 2500);
    }

    document.addEventListener('mousemove', showHud);
    document.addEventListener('touchstart', showHud, { passive: true });

    /* ─── Buttons ─────────────────────────────────────── */
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); });
    document.getElementById('notesBtn').addEventListener('click', (e) => { e.stopPropagation(); toggleNotes(); });
    document.getElementById('fullscreenBtn').addEventListener('click', (e) => { e.stopPropagation(); toggleFullscreen(); });

    /* ─── Keyboard ────────────────────────────────────── */
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
            case 'Enter':
                e.preventDefault(); next(); break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault(); prev(); break;
            case 'Home':
                e.preventDefault(); first(); break;
            case 'End':
                e.preventDefault(); last(); break;
            case 'f': case 'F':
                e.preventDefault(); toggleFullscreen(); break;
            case 'n': case 'N':
                e.preventDefault(); toggleNotes(); break;
            case 'p': case 'P':
                e.preventDefault(); window.print(); break;
            case '?':
                e.preventDefault(); toggleHelp(); break;
            case 'Escape':
                if (help.classList.contains('visible')) toggleHelp(false);
                break;
            default:
                if (/^[1-9]$/.test(e.key)) {
                    e.preventDefault();
                    showSlide(parseInt(e.key, 10));
                }
        }
    });

    /* ─── Click navigation (center only — edges have HUD) ─── */
    deck.addEventListener('click', (e) => {
        if (e.target.closest('button, a, .cert-chips, .chip, .qr-badge, .closing-qr-wrap')) return;
        const x = e.clientX;
        const w = window.innerWidth;
        if (x > w * 0.15 && x < w * 0.5) prev();
        else if (x > w * 0.5 && x < w * 0.85) next();
    });

    /* ─── Touch swipe ─────────────────────────────────── */
    let touchStartX = 0, touchStartY = 0;
    deck.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    deck.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) next(); else prev();
        }
    }, { passive: true });

    /* ─── Hash routing ────────────────────────────────── */
    function readHash() {
        const m = location.hash.match(/^#\/(\d+)$/);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= total) showSlide(n, false);
        }
    }
    window.addEventListener('hashchange', readHash);

    /* ─── Notes / Fullscreen / Help ───────────────────── */
    function toggleNotes() {
        notesVisible = !notesVisible;
        showSlide(current, false);
    }
    function toggleFullscreen() {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
        else document.exitFullscreen().catch(() => {});
    }
    function toggleHelp(force) {
        const show = force === undefined ? !help.classList.contains('visible') : force;
        help.classList.toggle('visible', show);
    }
    help.addEventListener('click', (e) => { if (e.target === help) toggleHelp(false); });

    /* ─── Init ────────────────────────────────────────── */
    readHash();
    if (!location.hash) showSlide(1, true);
    showHud();

    console.log('%cTangible Pitch ──', 'color: #E6733C; font-weight: bold; font-size: 16px;',
                '\n→ ← → arrows, space, F=fullscreen, N=notes, P=print PDF, ?=help');
})();

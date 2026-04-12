// Portfolio data structure
const portfolioData = {
    title: "Gülsen Namıduru",
    projects: [
        {
            id: 7,
            title: "06 - Voices of Leopoldplatz",
            workItem: "Voices of Leopoldplatz",
            sectionTitle:
                'Voices of Leopoldplatz, 2026\n\nSingle-channel video, 6:30 mins. Dimensions variable.',
            year: "2026",
            category: "video",
            medium: "video",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "A collaborative audiovisual composition produced as part of the Pirate Pedagogies project by EBE SOBE Collective.",
            fullDescription:
                'Voices of Leopoldplatz was developed through a participatory workshop; this short constructs its sonic layer from recordings made by participants. The process reconfigures space in the eyes of children, through haptic and sonic experimentation of space. The film traces collective audiovisual experiences of play-scapes.',
            metaLine: "Single-channel video, 6:30 mins. Dimensions variable.",
            credits: [
                "Workshop facilitation & mediation: EBE SOBE Collective",
                "Direction & video editing: Gülsen Namıduru",
                "Sonic and visual material: collected by workshop participants",
                "Sound composition: Gülsen Namıduru, Sophia Wind, Hasan Mert Yıldız",
                "Camera: Gülsen Namıduru, Giovannina Sequeira"
            ],
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            vimeoId: "1169706188", // https://vimeo.com/1169706188
            headerCode: "",
            pdf: '',
            credentials: ""
        },
        {
            id: 6,
            title: "05 - Pirate Pedagogies",
            workItem: "Pirate Pedagogies",
            sectionTitle:
                'Pirate Pedagogies - Zine, 2026\n\nCollective zine\nEnglish and Türkish\n12 pages\n7,4 x 10,5 cm',
            year: "2025",
            category: "art in public space",
            medium: "art in public space",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "A short zine briefly presenting Pirate Pedagogies and EBE SOBE collective.",
            fullDescription: "Pirate Pedagogies is a site-specific project exploring the tactile and acoustic features of urban space through participatory workshops with children. By comparing and bringing together visual and textual experiences, the project learns from children's bodily experience of space. Through play, the materials found in spaces of play used as a mirror reflecting emotional landscapes of the participants.",
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            pdf: '',
            pdfImages: [
                "img/pirate_pedagogies/zine-07.jpg",
                "img/pirate_pedagogies/zine-08.jpg",
                "img/pirate_pedagogies/zine-09.jpg",
                "img/pirate_pedagogies/zine-10.jpg",
                "img/pirate_pedagogies/zine-11.jpg",
                "img/pirate_pedagogies/zine-12.jpg",
                "img/pirate_pedagogies/zine-13.jpg",
                "img/pirate_pedagogies/zine-14.jpg",
                "img/pirate_pedagogies/zine-15.jpg",
                "img/pirate_pedagogies/zine-16.jpg",
                "img/pirate_pedagogies/zine-17.jpg",
                "img/pirate_pedagogies/zine-18.jpg",
                "img/pirate_pedagogies/zine-19.jpg",
                "img/pirate_pedagogies/zine-20.jpg",
                "img/pirate_pedagogies/zine-21.jpg",
                "img/pirate_pedagogies/zine-27.jpg"
            ],
            credentials: "Credits\nGraphic Design: Sena Çelebi\nEditor: Gülsen Namıduru"
        },
        {
            id: 5,
            title: "04 - Sylwester Stalker",
            year: "2025",
            category: "video",
            medium: "video",
            // ========== PROJECT DESCRIPTION START ==========
            workItem: "Sylwester Stalker",
            sectionTitle:
                'Sylwester Stalker, 2025\n\nLive audiovisual performance, 2 mins, performed at Alte Feuerwache Tempelhof. Dimensions variable.\n\nAn audiovisual composition produced for Fugue States, shown with 4 other video works. For the link to the full video, contact the artist',
            shortDescription: "A live visual performance accompanied Fugues States' performance for Radial System.",
            fullDescription:
                'Sylwester Stalker is a video work bringing together found footage, news and video recordings made by the artist during new years eve celebrations in Berlin. The work recreates the anxiety and excitement melting in each other during these firework performances. The video accompanies the field recordings of Sophia Wind collected in these performances.',
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            // Add numeric Vimeo video id when ready; until then the 16:9 placeholder matches Voices layout.
            vimeoId: "",
            videoPlaceholder: true,
            headerCode: "video · performance",
            credentials: "Credits\nVideo Installation: Gülsen Namıduru\nLive performance: Fugue States\n\nFugues States. 'Sylwester Stalker.' Produced by Gülsen Namıduru, Alte Feuerwache Tempelhof, Berlin, September 2025"
        },
        {
            id: 4,
            title: '03a - Book of Textures',
            workItem: 'Book of Textures',
            sectionTitle:
                'Book of Textures, 2026\n\nZine presenting a compilation of close-ups from images produced under Abandoned Playground\n20 pages\n4 x 5 cm',
            year: '2026',
            category: 'zine',
            medium: 'zine',
            shortDescription: '',
            fullDescription: '',
            images: [],
            pdf: '',
            credentials: 'Credits\nComing soon'
        },
        {
            id: 2,
            title: "02 - Abandoned Battleground",
            workItem: "Abandoned Battleground",
            sectionTitle:
                'Abandoned Battleground, 2023 - 25\n\nSeries of photography. Dimensions variable, square frame.',
            year: "2023 - 25",
            category: "photography",
            medium: "photography",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "A photographical research on rubbish and urban exclusion.",
            fullDescription:
                'Abandoned Battleground is a retrospective auto-ethnographic study of my experience of migration through urban aesthetics. After moving to Berlin, I started to see rubbish as an infrastructure, marking urban neglect and a sign of exclusion toward migrant rich neighbourhoods of Berlin. The project focuses on neighbourhoods such as Wedding, Moabit, Pankow, Neukölln, and Kreuzberg, which located in the trail of Berlin wall. Rubbish emerges in these neighbourhood as a sign of lack of integration, social cohesion and ongoing negotiations between social codes and bodily experience of urban organisation.',
            // ========== PROJECT DESCRIPTION END ==========
            images: [
                "img/abandoned_battleground/1.jpg",
                "img/abandoned_battleground/2.jpg",
                "img/abandoned_battleground/5.jpg",
                "img/abandoned_battleground/6.jpg",
                "img/abandoned_battleground/1705851079910.jpg"
            ],
            credentials: ''
        },
        {
            id: 1,
            title: "03 - Architectures Of Sky",
            workItem: "Architectures Of Sky",
            sectionTitle: 'Architectures of Sky, 2024 - ongoing\n\nSeries of photography. Dimensions variable.',
            year: "2024 - ongoing",
            category: "photography",
            medium: "photography",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "a photography series focusing on the naval objects framing sky.",
            fullDescription:
                'Architectures Of Sky examines fragments of naval structures within harbour landscapes, treating industrial forms as carriers of a globally repeated visual language. Through close-up isolation, the images suspend site-specific references, detaching objects from their original context. In this process, the sky is reimagined as a spatial and cosmological field, where industrial elements appear as structuring forms—subtly violent in their appropriation, subtraction, and organisation of space. The images oscillate between recognition and abstraction, framing these forms as a kind of spatial “furniture” within the sky, accompanying goods transported from one harbour to another.',
            // ========== PROJECT DESCRIPTION END ==========
            images: [
                "img/architecture_of_sky/Screenshot 2026-04-08 at 10.46.54.jpeg",
                "img/architecture_of_sky/DSC5392.jpg",
                "img/architecture_of_sky/_DSC5382_edited.jpg",
                "img/architecture_of_sky/Screenshot 2026-04-08 at 10.40.25.jpeg",
                "img/architecture_of_sky/Screenshot 2026-04-08 at 10.45.00.jpeg",
                "img/architecture_of_sky/Screenshot 2026-04-08 at 10.45.43.jpeg",
                "img/architecture_of_sky/_DSC5445_edited.jpg",
                "img/architecture_of_sky/_DSC5459_edited_2.jpg",
                "img/architecture_of_sky/_DSC5554_edited.jpg",
                "img/architecture_of_sky/_DSC5562_edited.jpg",
                "img/architecture_of_sky/architectures_of_sky_2_edited.jpg",
                "img/architecture_of_sky/architectures_of_sky_3_edited.jpg"
            ],
            credentials: ""
        },
        {
            id: 3,
            title: "01 - Hieroglyphs",
            workItem: "Hieroglyphs",
            sectionTitle: 'Hieroglyphs, 2022\n\nSeries of drawings, pen on paper, and acrylic on plywood.',
            year: "2022",
            category: "drawing",
            medium: "drawing",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "An attempt to understand and map the affective symbolism of geometry.",
            fullDescription:
                'Hieroglyphs is an (over)ambitious series trying to distill thinking in drawing. It extends of the language of geometry, and uses it to map emotion in tehir emergence. The contrast between the scientific vision of the language of geometry and the way its language is being used in this project, creates a space of negotiation and potential collaboration between sensual and spatial experiences.\n\nExercise on Circle, and Exercise on Triagle are, as the name suggest, exercises on the event that can be represented by using one shape. Through difference and repetition, it focuses on compositions that one shape cannot describe.\n\nAfter seeing the extend of form and the meaning a shape can and cannot produce, the following works such as Past, Present and The Fly uses this language to map out events, as well as spaces housing these events. Here, feelings are taken as output of conditions, defined by spatial compositions and movement.',
            // ========== PROJECT DESCRIPTION END ==========
            images: [
                "img/hiyeroglifler/sekiller_hero.jpg",
                "img/hiyeroglifler/sekiller.jpg",
                "img/hiyeroglifler/IMG_0559.jpeg",
                "img/hiyeroglifler/IMG_0561.jpeg",
                "img/hiyeroglifler/reduced sketchbook_Page_01.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_02.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_03.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_04.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_05.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_06.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_07.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_08.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_09.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_11.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_12.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_13.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_14.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_15.jpg",
                "img/hiyeroglifler/reduced sketchbook_Page_16.jpg",
                "img/hiyeroglifler/GOPR1458.JPG",
                "img/hiyeroglifler/GOPR1461.JPG"
            ],
            credentials: ''
        }
    ]
};

// DOM elements
const portfolioIndex = document.getElementById('portfolio-index');
const projectSectionsEl = document.getElementById('project-sections');
const detailView = document.getElementById('detail-view');
const detailTitle = document.getElementById('detail-title');
const detailImages = document.getElementById('detail-images');
const closeDetailBtn = document.getElementById('close-detail');
const contactLink = document.getElementById('contact-link');
const contactView = document.getElementById('contact-view');
const contactContent = document.getElementById('contact-content');
const closeContactBtn = document.getElementById('close-contact');
const cvPageLink = document.getElementById('cv-page-link');
const cvPageView = document.getElementById('cv-page-view');
const cvPageContent = document.getElementById('cv-page-content');
const closeCvPageBtn = document.getElementById('close-cv-page');
const photographyLink = document.getElementById('photography-link');
const photographyView = document.getElementById('photography-view');
const photographyContent = document.getElementById('photography-content');
const closePhotographyBtn = document.getElementById('close-photography');
const videoLink = document.getElementById('video-link');
const videoView = document.getElementById('video-view');
const videoContent = document.getElementById('video-content');
const closeVideoBtn = document.getElementById('close-video');
const sculptureLink = document.getElementById('sculpture-link');
const sculptureView = document.getElementById('sculpture-view');
const sculptureContent = document.getElementById('sculpture-content');
const closeSculptureBtn = document.getElementById('close-sculpture');

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// --- Full-screen image lightbox (all wire-gallery + book images) ---
let lightboxUrls = [];
let lightboxIndex = 0;
let bookLightboxDelegateBound = false;

function openImageLightbox(urls, index) {
    const root = document.getElementById('image-lightbox');
    const img = document.getElementById('image-lightbox-img');
    if (!root || !img || !urls || urls.length === 0) return;
    lightboxUrls = urls.slice();
    lightboxIndex = Math.max(0, Math.min(index, lightboxUrls.length - 1));
    img.src = lightboxUrls[lightboxIndex];
    img.alt = '';
    root.classList.add('active');
    root.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    updateLightboxChrome();
}

function closeImageLightbox() {
    const root = document.getElementById('image-lightbox');
    const img = document.getElementById('image-lightbox-img');
    if (!root) return;
    root.classList.remove('active');
    root.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (img) img.src = '';
    lightboxUrls = [];
}

function updateLightboxChrome() {
    const prev = document.querySelector('.image-lightbox-prev');
    const next = document.querySelector('.image-lightbox-next');
    const n = lightboxUrls.length;
    if (prev) prev.style.visibility = n <= 1 ? 'hidden' : 'visible';
    if (next) next.style.visibility = n <= 1 ? 'hidden' : 'visible';
}

function stepLightbox(delta) {
    if (lightboxUrls.length === 0) return;
    const img = document.getElementById('image-lightbox-img');
    lightboxIndex = (lightboxIndex + delta + lightboxUrls.length) % lightboxUrls.length;
    if (img) {
        img.src = lightboxUrls[lightboxIndex];
        img.alt = '';
    }
}

function initImageLightbox() {
    const root = document.getElementById('image-lightbox');
    if (!root) return;
    const img = document.getElementById('image-lightbox-img');
    const closeBtn = root.querySelector('.image-lightbox-close');
    const prevBtn = root.querySelector('.image-lightbox-prev');
    const nextBtn = root.querySelector('.image-lightbox-next');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            closeImageLightbox();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            stepLightbox(-1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            stepLightbox(1);
        });
    }
    root.addEventListener('click', function (e) {
        if (e.target === root) closeImageLightbox();
    });
    if (img) {
        img.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    if (!bookLightboxDelegateBound) {
        bookLightboxDelegateBound = true;
        document.addEventListener('click', function (e) {
            const targetImg = e.target.closest('.book-view img');
            if (!targetImg || !targetImg.src) return;
            const bookEl = targetImg.closest('.book-view');
            const urls = bookEl && bookEl._lightboxUrls;
            if (!urls || !urls.length) return;
            e.preventDefault();
            const shown = targetImg.src;
            let idx = urls.findIndex(function (u) {
                try {
                    return new URL(u, window.location.href).href === shown;
                } catch (_) {
                    return u === shown;
                }
            });
            if (idx < 0) idx = 0;
            openImageLightbox(urls, idx);
        });
    }
}

// Helper function to remove item numbers from title (e.g. "01 - Title" -> "Title")
function removeTitleNumbers(title) {
    return title.replace(/^\d+\s*-\s*/, '');
}

/** Phrase as it appears at the start of fullDescription; defaults to work item title (sentence case) */
function getWorkTitleBoldPhrase(project) {
    if (!project) return '';
    const override = project.workTitleInDescription;
    if (override != null && String(override).trim() !== '') {
        return String(override).trim();
    }
    if (project.workItem != null && String(project.workItem).trim() !== '') {
        return String(project.workItem).trim();
    }
    return removeTitleNumbers(project.title).trim();
}

/** Escape text and wrap every occurrence of phrase in <strong> */
function boldWorkTitleInText(block, project) {
    const phrase = getWorkTitleBoldPhrase(project);
    const full = block || '';
    if (!phrase) return escapeHtml(full);
    const parts = full.split(phrase);
    if (parts.length === 1) return escapeHtml(full);
    return parts
        .map(function (part, i) {
            const escaped = escapeHtml(part);
            if (i === parts.length - 1) return escaped;
            return escaped + '<strong>' + escapeHtml(phrase) + '</strong>';
        })
        .join('');
}

// Initialize portfolio index
function initializeIndex() {
    if (!portfolioIndex) return;
    portfolioData.projects.forEach((project) => {
        const li = document.createElement('li');
        li.textContent = project.workItem ? String(project.workItem) : removeTitleNumbers(project.title);
        li.dataset.projectId = project.id;
        li.dataset.category = project.category.toLowerCase();
        li.dataset.medium = project.medium ? project.medium.toLowerCase() : '';
        li.addEventListener('click', () => scrollToProjectSection(project.id));
        portfolioIndex.appendChild(li);
    });
}

function scrollToProjectSection(projectId) {
    const el = document.getElementById('project-section-' + projectId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.remove('project-section--flash');
    void el.offsetWidth;
    el.classList.add('project-section--flash');
}

function createProjectSectionElement(project) {
    const article = document.createElement('article');
    article.className = 'project-section';
    article.id = 'project-section-' + project.id;
    article.dataset.projectId = String(project.id);
    article.innerHTML =
        '<div class="project-section-inner">' +
        '<header class="project-section-header">' +
        '<div class="project-section-header-bar">' +
        '<div class="project-section-header-left">' +
        '<h2 class="project-section-title project-section-title--bar"></h2>' +
        '</div>' +
        '<div class="project-section-header-right">' +
        '<div class="project-header-right-line1"></div>' +
        '<div class="project-header-right-line2"></div>' +
        '<div class="project-header-right-line3"></div>' +
        '</div></div>' +
        '</header>' +
        '<div class="project-section-body">' +
        '<div class="project-section-main-grid">' +
        '<div class="project-section-text-col">' +
        '<div class="project-gallery-title" aria-label="Gallery title"></div>' +
        '<div class="popup-text project-full-description"></div>' +
        '<div class="project-section-body-credits" aria-label="Credits"></div>' +
        '</div>' +
        '<div class="project-section-book-slot">' +
        '<div class="book-view">' +
        '<div class="book-spread">' +
        '<div class="book-page book-page-left"><img alt="" /></div>' +
        '<div class="book-spine"></div>' +
        '<div class="book-page book-page-right"><img alt="" /></div>' +
        '</div>' +
        '<div class="book-controls" role="navigation" aria-label="Spread navigation">' +
        '<button type="button" class="slide-btn book-prev" aria-label="Previous spread">‹ Previous</button>' +
        '<span class="slide-counter book-spread-counter" aria-live="polite"></span>' +
        '<button type="button" class="slide-btn book-next" aria-label="Next spread">Next ›</button>' +
        '</div>' +
        '<p class="book-loading">Loading…</p>' +
        '</div>' +
        '</div>' +
        '<div class="project-section-gallery-row">' +
        '<div class="project-wire-main-slot"></div>' +
        '<div class="project-wire-figures-slot"></div>' +
        '</div>' +
        '<div class="project-section-video-slot">' +
        '<div class="video-section"></div>' +
        '</div>' +
        '<div class="project-section-media-placeholder" aria-hidden="true"></div>' +
        '</div>' +
        '<div class="popup-credentials project-credentials"></div>' +
        '</div></div>';
    return article;
}

function createBookViewController(bookViewEl) {
    const bookPageLeftImg = bookViewEl.querySelector('.book-page-left img');
    const bookPageRightImg = bookViewEl.querySelector('.book-page-right img');
    const bookPrevBtn = bookViewEl.querySelector('.book-prev');
    const bookNextBtn = bookViewEl.querySelector('.book-next');
    const bookSpreadCounter = bookViewEl.querySelector('.book-spread-counter');
    const bookLoadingEl = bookViewEl.querySelector('.book-loading');
    const bookSpreadEl = bookViewEl.querySelector('.book-spread');
    const bookControlsEl = bookViewEl.querySelector('.book-controls');

    let spreads = [];
    let currentSpreadIndex = 0;
    let loadToken = 0;

    function showSpread(index) {
        currentSpreadIndex = index;
        const spread = spreads[index];
        if (!spread) return;
        bookPageLeftImg.src = spread[0] || '';
        bookPageLeftImg.style.display = spread[0] ? 'block' : 'none';
        bookPageRightImg.src = spread[1] || '';
        bookPageRightImg.style.display = spread[1] ? 'block' : 'none';
        bookSpreadCounter.textContent = spreads.length > 0 ? (index + 1) + ' / ' + spreads.length : '';
        bookPrevBtn.disabled = index <= 0;
        bookNextBtn.disabled = index >= spreads.length - 1;
    }

    bookPrevBtn.addEventListener('click', function () {
        if (currentSpreadIndex > 0) showSpread(currentSpreadIndex - 1);
    });
    bookNextBtn.addEventListener('click', function () {
        if (currentSpreadIndex < spreads.length - 1) showSpread(currentSpreadIndex + 1);
    });

    return {
        showFromImages: function (imagePaths) {
            loadToken++;
            spreads = [];
            currentSpreadIndex = 0;
            if (!imagePaths || imagePaths.length === 0) return;
            spreads.push([null, imagePaths[0] || null]);
            for (let i = 1; i < imagePaths.length; i += 2) {
                spreads.push([imagePaths[i] || null, imagePaths[i + 1] || null]);
            }
            bookLoadingEl.style.display = 'none';
            bookSpreadEl.style.display = 'flex';
            bookControlsEl.style.display = 'flex';
            showSpread(0);
            bookViewEl._lightboxUrls = imagePaths.slice();
        },
        loadPdf: function (pdfUrl) {
            const myToken = ++loadToken;
            spreads = [];
            currentSpreadIndex = 0;
            if (typeof pdfjsLib === 'undefined') {
                bookLoadingEl.textContent = 'PDF viewer unavailable.';
                bookLoadingEl.style.display = 'block';
                return;
            }
            const absolutePdfUrl = new URL(pdfUrl, window.location.href).href;
            bookLoadingEl.textContent = 'Loading PDF…';
            bookLoadingEl.style.display = 'block';
            bookSpreadEl.style.display = 'none';
            bookControlsEl.style.display = 'none';

            function loadDoc() {
                return fetch(absolutePdfUrl)
                    .then(function (r) {
                        if (!r.ok) throw new Error('Fetch failed');
                        return r.arrayBuffer();
                    })
                    .then(function (buf) {
                        return pdfjsLib.getDocument({ data: buf }).promise;
                    })
                    .catch(function () {
                        return pdfjsLib.getDocument({ url: absolutePdfUrl }).promise;
                    });
            }

            loadDoc()
                .then(function (pdf) {
                    if (myToken !== loadToken) return null;
                    const numPages = pdf.numPages;
                    const renderPromises = [];
                    for (let i = 1; i <= numPages; i++) {
                        renderPromises.push(pdf.getPage(i).then(renderPageToDataUrl));
                    }
                    return Promise.all(renderPromises);
                })
                .then(function (imageUrls) {
                    if (!imageUrls || myToken !== loadToken) return;
                    if (imageUrls.length > 0) {
                        spreads.push([null, imageUrls[0] || null]);
                        for (let i = 1; i < imageUrls.length; i += 2) {
                            spreads.push([imageUrls[i] || null, imageUrls[i + 1] || null]);
                        }
                    }
                    bookLoadingEl.style.display = 'none';
                    bookSpreadEl.style.display = 'flex';
                    bookControlsEl.style.display = 'flex';
                    showSpread(0);
                    bookViewEl._lightboxUrls = imageUrls.slice();
                })
                .catch(function () {
                    if (myToken !== loadToken) return;
                    bookLoadingEl.innerHTML =
                        'Could not load PDF. <a href="' +
                        absolutePdfUrl +
                        '" target="_blank" rel="noopener" style="color:#000;text-decoration:underline;">Open in new tab</a>';
                    bookLoadingEl.style.display = 'block';
                });
        },
        showAndReset: function () {
            bookViewEl.style.display = 'block';
            bookLoadingEl.textContent = 'Loading PDF…';
            bookLoadingEl.style.display = 'block';
            bookSpreadEl.style.display = 'none';
            bookControlsEl.style.display = 'none';
        }
    };
}

function formatProjectMediumLine(project) {
    if (project.headerCode != null && String(project.headerCode).trim() !== '') {
        return String(project.headerCode).trim();
    }
    const m = (project.medium || '').trim();
    return m ? m.toLowerCase() : '';
}

function fillProjectDescriptionLeadAndBody(fullDescEl, fullText, project) {
    fullDescEl.innerHTML = '';
    const full = (fullText || '').trim();
    if (!full) {
        fullDescEl.style.display = 'none';
        return;
    }
    const paragraphs = full.split(/\n\n+/).map(function (p) {
        return p.trim();
    }).filter(Boolean);
    if (paragraphs.length === 0) {
        fullDescEl.style.display = 'none';
        return;
    }
    paragraphs.forEach(function (block) {
        const p = document.createElement('p');
        p.className = 'project-body-paragraph';
        p.innerHTML = boldWorkTitleInText(block, project);
        fullDescEl.appendChild(p);
    });
    fullDescEl.style.display = 'block';
}

function buildWireGallery(article, project, titleWithoutNumbers) {
    const mainSlot = article.querySelector('.project-wire-main-slot');
    const figuresSlot = article.querySelector('.project-wire-figures-slot');
    if (!mainSlot || !figuresSlot) return;

    mainSlot.innerHTML = '';
    figuresSlot.innerHTML = '';

    const paths = project.images && project.images.length > 0 ? project.images : [];
    if (paths.length === 0) {
        mainSlot.style.display = 'none';
        figuresSlot.style.display = 'none';
        return;
    }

    mainSlot.style.display = '';
    figuresSlot.style.display = paths.length > 1 ? '' : 'none';

    const mainFrame = document.createElement('div');
    mainFrame.className = 'project-wire-main-frame';
    const mainImg = document.createElement('img');
    mainImg.src = paths[0];
    mainImg.alt = titleWithoutNumbers || '';
    mainImg.className = 'project-wire-main-img';
    mainFrame.appendChild(mainImg);
    mainSlot.appendChild(mainFrame);

    const captions =
        project.imageCaptions && Array.isArray(project.imageCaptions) ? project.imageCaptions : [];

    if (paths.length > 1) {
        const inner = document.createElement('div');
        inner.className = 'project-wire-figures-inner';

        for (let i = 1; i < paths.length; ) {
            const remaining = paths.length - i;
            const countInRow = Math.min(4, remaining);
            const row = document.createElement('div');
            row.className = 'project-wire-figures-row';
            if (countInRow === 1) row.classList.add('project-wire-figures-row--single');
            else if (countInRow === 2) row.classList.add('project-wire-figures-row--pair');
            else if (countInRow === 3) row.classList.add('project-wire-figures-row--triple');
            else row.classList.add('project-wire-figures-row--quad');

            for (let k = 0; k < countInRow; k++) {
                const idx = i + k;
                const fig = document.createElement('figure');
                fig.className = 'project-wire-thumb';
                const tframe = document.createElement('div');
                tframe.className = 'project-wire-thumb-frame';
                const img = document.createElement('img');
                img.src = paths[idx];
                img.alt = (titleWithoutNumbers || '') + ' — ' + idx;
                const cap = document.createElement('figcaption');
                const capIdx = idx - 1;
                const custom = captions[capIdx];
                cap.textContent =
                    custom != null && String(custom).trim() !== ''
                        ? String(custom).trim()
                        : 'Figure ' + (capIdx + 1);
                tframe.appendChild(img);
                fig.appendChild(tframe);
                fig.appendChild(cap);
                row.appendChild(fig);
            }
            i += countInRow;
            inner.appendChild(row);
        }
        figuresSlot.appendChild(inner);
    }

    function openAt(idx) {
        openImageLightbox(paths, idx);
    }
    mainImg.addEventListener('click', function () {
        openAt(0);
    });
    figuresSlot.querySelectorAll('img').forEach(function (im) {
        im.addEventListener('click', function () {
            const idx = paths.findIndex(function (p) {
                try {
                    return new URL(p, window.location.href).href === im.src;
                } catch (_) {
                    return p === im.src;
                }
            });
            if (idx < 0) return;
            mainImg.src = paths[idx];
            openAt(idx);
        });
    });
}

function populateProjectSection(article, project) {
    const titleWithoutNumbers = removeTitleNumbers(project.title);

    const titleBar = article.querySelector('.project-section-title--bar');
    if (titleBar) {
        const t = project.workItem ? String(project.workItem) : titleWithoutNumbers || project.title;
        titleBar.textContent = t;
    }

    const galleryTitleEl = article.querySelector('.project-gallery-title');
    if (galleryTitleEl) {
        const gt = project.sectionTitle != null ? String(project.sectionTitle).trim() : '';
        galleryTitleEl.textContent = gt;
        galleryTitleEl.style.display = gt ? '' : 'none';
    }

    const r1 = article.querySelector('.project-header-right-line1');
    const r2 = article.querySelector('.project-header-right-line2');
    const r3 = article.querySelector('.project-header-right-line3');
    // Hide "medium" from the UI: keep it as metadata only.
    // We only show line1 when explicitly provided (e.g. special Voices layout).
    if (r1) {
        const explicit =
            project.headerRight1 != null && String(project.headerRight1).trim() !== ''
                ? String(project.headerRight1).trim()
                : '';
        r1.textContent = explicit;
        r1.style.display = explicit ? '' : 'none';
    }
    if (r2) {
        // Hide year line in all work descriptions (year remains metadata).
        r2.textContent = '';
        r2.style.display = 'none';
    }
    if (r3) {
        const shortLine =
            project.headerRight3 != null && String(project.headerRight3).trim() !== ''
                ? String(project.headerRight3).trim()
                : project.shortDescription || '';
        r3.textContent = shortLine;
        r3.style.display = shortLine ? '' : 'none';
    }

    const credentials = project.credentials || '';
    const creditsInTextCol = article.querySelector('.project-section-body-credits');
    if (creditsInTextCol) {
        function renderCreditsBlock(heading, lines) {
            const safeHeading = heading ? escapeHtml(String(heading)) : '';
            const safeLines = (lines || [])
                .map(function (l) {
                    return String(l).trim();
                })
                .filter(Boolean)
                .map(function (l) {
                    // Special-case: link Sena Çelebi (Instagram) in credits.
                    if (l.includes('Sena Çelebi')) {
                        const url = 'https://www.instagram.com/scelebillus/';
                        const parts = l.split('Sena Çelebi');
                        if (parts.length >= 2) {
                            return (
                                '<div>' +
                                escapeHtml(parts[0]) +
                                '<a href="' +
                                escapeHtml(url) +
                                '" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">Sena Çelebi</a>' +
                                escapeHtml(parts.slice(1).join('Sena Çelebi')) +
                                '</div>'
                            );
                        }
                    }
                    // Special-case: link Fugue States (SoundCloud) in credits.
                    if (l.includes('Fugue States')) {
                        const url =
                            'https://soundcloud.com/fugue-states?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennglucmw24_tp1';
                        const parts = l.split('Fugue States');
                        if (parts.length >= 2) {
                            return (
                                '<div>' +
                                escapeHtml(parts[0]) +
                                '<a href="' +
                                escapeHtml(url) +
                                '" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">Fugue States</a>' +
                                escapeHtml(parts.slice(1).join('Fugue States')) +
                                '</div>'
                            );
                        }
                    }
                    return '<div>' + escapeHtml(l) + '</div>';
                })
                .join('');
            return (
                (safeHeading ? '<div><strong>' + safeHeading + '</strong></div>' : '') +
                (safeLines ? '<div class="project-credits-lines">' + safeLines + '</div>' : '')
            );
        }

        const hasVoiceCredits = Array.isArray(project.credits) && project.credits.length > 0;
        const raw = String(credentials || '').trim();

        if (hasVoiceCredits) {
            creditsInTextCol.innerHTML = renderCreditsBlock('Credits', project.credits);
            creditsInTextCol.style.display = '';
        } else if (raw) {
            // If a credentials block starts with "Credits", bold only that heading.
            const parts = raw.split(/\n+/);
            const first = parts[0] ? parts[0].trim() : '';
            const rest = parts.slice(1);
            if (first.toLowerCase() === 'credits') {
                creditsInTextCol.innerHTML = renderCreditsBlock('Credits', rest);
            } else {
                creditsInTextCol.textContent = raw;
            }
            creditsInTextCol.style.display = '';
        } else {
            creditsInTextCol.textContent = '';
            creditsInTextCol.style.display = 'none';
        }
    }

    const mainGrid = article.querySelector('.project-section-main-grid');
    const videoSlot = article.querySelector('.project-section-video-slot');
    const videoSection = article.querySelector('.project-section-video-slot .video-section');
    const fullDescEl = article.querySelector('.project-full-description');
    const credEl = article.querySelector('.project-credentials');
    const bookViewEl = article.querySelector('.book-view');
    const bookController = createBookViewController(bookViewEl);

    fillProjectDescriptionLeadAndBody(fullDescEl, project.fullDescription || '', project);

    if (credEl) {
        credEl.textContent = '';
        credEl.style.display = 'none';
    }

    videoSection.innerHTML = '';
    videoSection.style.display = 'none';

    const usePdfImages =
        project.pdfImages && Array.isArray(project.pdfImages) && project.pdfImages.length > 0;
    const usePdf = project.pdf && project.pdf.trim() !== '';

    bookViewEl.style.display = 'none';
    bookViewEl.querySelector('.book-loading').style.display = 'none';
    delete bookViewEl._lightboxUrls;

    buildWireGallery(article, project, titleWithoutNumbers);

    if (usePdfImages) {
        bookViewEl.style.display = 'block';
        bookController.showFromImages(project.pdfImages);
    } else if (usePdf) {
        bookController.showAndReset();
        bookController.loadPdf(project.pdf);
    }

    const vimeoRaw = project.vimeoId != null ? String(project.vimeoId).trim() : '';
    if (vimeoRaw && /^\d+$/.test(vimeoRaw)) {
        videoSection.style.display = 'block';
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';
        const iframe = document.createElement('iframe');
        iframe.src = 'https://player.vimeo.com/video/' + vimeoRaw;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.style.display = 'block';
        iframe.style.width = '100%';
        iframe.style.aspectRatio = '16 / 9';
        iframe.style.height = 'auto';
        iframe.style.minHeight = '200px';
        videoWrapper.appendChild(iframe);
        videoSection.appendChild(videoWrapper);
    } else if (project.videoPlaceholder) {
        videoSection.style.display = 'block';
        const placeholder = document.createElement('div');
        placeholder.className = 'project-video-placeholder';
        placeholder.setAttribute('aria-label', 'Video embed');
        videoSection.appendChild(placeholder);
    }

    const hasGallery = project.images && project.images.length > 0;
    const hasVideo = videoSection.style.display === 'block';
    const hasBook = bookViewEl.style.display === 'block';
    const bookSlot = article.querySelector('.project-section-book-slot');
    const galleryRow = article.querySelector('.project-section-gallery-row');

    if (bookSlot) {
        bookSlot.classList.toggle('has-book', hasBook);
    }
    if (galleryRow) {
        galleryRow.classList.toggle('has-gallery', hasGallery);
    }

    const mediaPh = article.querySelector('.project-section-media-placeholder');
    if (mediaPh) {
        const showPlaceholder = !hasGallery && !hasVideo && !hasBook;
        mediaPh.classList.toggle('is-visible', showPlaceholder);
    }

    if (mainGrid) {
        mainGrid.classList.remove('project-section-main-grid--gallery-book', 'project-section-main-grid--has-gallery-row');
        if (videoSlot) {
            videoSlot.classList.toggle('has-video', hasVideo);
        }

        mainGrid.classList.toggle('project-section-main-grid--has-gallery-row', hasGallery);
        if (hasGallery && hasBook) {
            mainGrid.classList.add('project-section-main-grid--gallery-book');
        }
    }
}

function initializeProjectSections() {
    if (!projectSectionsEl) return;
    projectSectionsEl.innerHTML = '';
    portfolioData.projects.forEach(function (project) {
        const article = createProjectSectionElement(project);
        populateProjectSection(article, project);
        projectSectionsEl.appendChild(article);
    });
}

if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function renderPageToDataUrl(page) {
    const scale = 2;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    return page.render({ canvasContext: ctx, viewport }).promise.then(() => canvas.toDataURL('image/jpeg', 0.85));
}

// Close detail view
function closeDetailView() {
    if (detailView) detailView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
if (closeDetailBtn) {
closeDetailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeDetailView();
});
}

// Keyboard navigation (modals exist only on index.html)
document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('image-lightbox');
    if (lb && lb.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeImageLightbox();
        } else if (e.key === 'ArrowLeft') {
            stepLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            stepLightbox(1);
        }
        return;
        }
    if (contactView && contactView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeContactView();
        }
    } else if (cvPageView && cvPageView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeCvPageView();
        }
    } else if (photographyView && photographyView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closePhotographyView();
        }
    } else if (videoView && videoView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeVideoView();
        }
    } else if (sculptureView && sculptureView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeSculptureView();
        }
    }
});

// Open Contact view
function openContactView() {
    if (!contactView || !contactContent) return;
    contactContent.innerHTML = `
        <p><strong>Instagram:</strong><br>
        <a href="https://www.instagram.com/gnamiduru/?hl=en" target="_blank" style="color: black; text-decoration: underline;">@gnamiduru</a></p>
        
        <p><strong>Email:</strong><br>
        <a href="mailto:namidurugg@gmail.com" style="color: black; text-decoration: underline;">namidurugg@gmail.com</a></p>
    `;
    contactView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Contact view
function closeContactView() {
    if (!contactView) return;
    contactView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Contact
if (contactLink) {
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openContactView();
});
}
if (closeContactBtn) {
closeContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeContactView();
});
}
if (contactView) {
contactView.addEventListener('click', (e) => {
    if (e.target === contactView) {
        closeContactView();
    }
});
}

// Open CV Page view
function openCvPageView() {
    if (!cvPageView || !cvPageContent) return;
    cvPageContent.innerHTML = `
        <h3><strong>Education</strong></h3>
        <p><strong>BA, Architecture</strong><br>
        Middle East Technical University, Ankara, TR</p>
        
        <p><strong>MA, Social Sciences</strong><br>
        Humboldt University, Berlin. DE</p>
        
        <h3><strong>Grants/Residencies</strong></h3>
        <p>IN SITU 2025-2028 Art In Public Space Support Lab, 2026</p>
        <p>AIR Leopoldplatz Artist Residency, Berlin, 2025</p>
        <p>DAAD Scholarship, Berlin, 2023</p>
        
        <h3><strong>Exhibition</strong></h3>
        <p>Urban Silence, at 48H Neukölln, Berlin</p>
        <p>Paper BAAM, at POP Kudamm, Berlin</p>
        <p>BAAM 6, Not A Gallery, Berlin</p>
        <p>We Must Pool Our Memos, at ORTSTERMIN Art Festival, Berlin</p>
        <p>Hieroglyphs, at Parus Art Space, Ankara</p>
        
        <h3><strong>Mentions</strong></h3>
        <p><a href="https://figuresphotography.com/stories/abandoned-battleground-abandoned-battleground-gulsen-namiduru/" target="_blank" style="color: black; text-decoration: underline;">Abandoned Battleground by Gülsen Namıduru</a>, at Figures Photography</p>
    `;
    cvPageView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close CV Page view
function closeCvPageView() {
    if (!cvPageView) return;
    cvPageView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for CV Page
if (cvPageLink) {
cvPageLink.addEventListener('click', (e) => {
    e.preventDefault();
    openCvPageView();
});
}
if (closeCvPageBtn) {
closeCvPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeCvPageView();
});
}
if (cvPageView) {
cvPageView.addEventListener('click', (e) => {
    if (e.target === cvPageView) {
        closeCvPageView();
    }
});
}

// Open Photography view
function openPhotographyView() {
    if (!photographyView || !photographyContent) return;
    const photographyProjects = portfolioData.projects.filter(p => 
        p.category.toLowerCase() === 'photography'
    );
    
    let content = '';
    if (photographyProjects.length === 0) {
        content = '<p>No photography projects available.</p>';
    } else {
        photographyProjects.forEach((project) => {
            content += `<div style="margin-bottom: 30px; cursor: pointer;" onclick="openPopupFromCategory(${project.id})">
                <h3 style="font-size: 24px; margin-bottom: 10px;">${project.title} (${project.year})</h3>
                <p style="font-size: 20px; margin-bottom: 10px;">${project.shortDescription}</p>
            </div>`;
        });
    }
    
    photographyContent.innerHTML = content;
    photographyView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Photography view
function closePhotographyView() {
    if (!photographyView) return;
    photographyView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Category highlight state
let photographyHighlighted = false;
let videoHighlighted = false;
let sculptureHighlighted = false;

// Event listeners for Photography
if (photographyLink && portfolioIndex) {
    photographyLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Toggle highlight state
    photographyHighlighted = !photographyHighlighted;
    
    // Get all list items
    const listItems = portfolioIndex.querySelectorAll('li');
    
    listItems.forEach((li) => {
        const medium = li.dataset.medium;
        if (medium === 'photography') {
            if (photographyHighlighted) {
                li.style.color = '#000000';
            } else {
                li.style.color = ''; // Reset to default
            }
        } else {
            // Reset other items to default
            li.style.color = '';
        }
    });
    
    // Reset other category highlights
    videoHighlighted = false;
    sculptureHighlighted = false;
    });
}

if (closePhotographyBtn) {
    closePhotographyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closePhotographyView();
    });
}

if (photographyView) {
    photographyView.addEventListener('click', (e) => {
        if (e.target === photographyView) {
            closePhotographyView();
        }
    });
}

// Open Video view
function openVideoView() {
    if (!videoView || !videoContent) return;
    const videoProjects = portfolioData.projects.filter(p => 
        p.category.toLowerCase() === 'video'
    );
    
    let content = '';
    if (videoProjects.length === 0) {
        content = '<p>No video projects available.</p>';
    } else {
        videoProjects.forEach((project) => {
            content += `<div style="margin-bottom: 30px; cursor: pointer;" onclick="openPopupFromCategory(${project.id})">
                <h3 style="font-size: 24px; margin-bottom: 10px;">${project.title} (${project.year})</h3>
                <p style="font-size: 20px; margin-bottom: 10px;">${project.shortDescription}</p>
            </div>`;
        });
    }
    
    videoContent.innerHTML = content;
    videoView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Video view
function closeVideoView() {
    if (!videoView) return;
    videoView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Video
if (videoLink && portfolioIndex) {
    videoLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Toggle highlight state
    videoHighlighted = !videoHighlighted;
    
    // Get all list items
    const listItems = portfolioIndex.querySelectorAll('li');
    
    listItems.forEach((li) => {
        const medium = li.dataset.medium;
        if (medium === 'video') {
            if (videoHighlighted) {
                li.style.color = '#000000';
            } else {
                li.style.color = ''; // Reset to default
            }
        } else {
            // Reset other items to default
            li.style.color = '';
        }
    });
    
    // Reset other category highlights
    photographyHighlighted = false;
    sculptureHighlighted = false;
    });
}

if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeVideoView();
    });
}

if (videoView) {
    videoView.addEventListener('click', (e) => {
        if (e.target === videoView) {
            closeVideoView();
        }
    });
}

// Open Sculpture/Installation view
function openSculptureView() {
    if (!sculptureView || !sculptureContent) return;
    const sculptureProjects = portfolioData.projects.filter(p => {
        const m = (p.medium || '').toLowerCase();
        const c = (p.category || '').toLowerCase();
        return c === 'installation' || c === 'sculpture' || m === 'art in public space' || m === 'installation';
    });
    
    let content = '';
    if (sculptureProjects.length === 0) {
        content = '<p>No art in public space projects available.</p>';
    } else {
        sculptureProjects.forEach((project) => {
            content += `<div style="margin-bottom: 30px; cursor: pointer;" onclick="openPopupFromCategory(${project.id})">
                <h3 style="font-size: 24px; margin-bottom: 10px;">${project.title} (${project.year})</h3>
                <p style="font-size: 20px; margin-bottom: 10px;">${project.shortDescription}</p>
            </div>`;
        });
    }
    
    sculptureContent.innerHTML = content;
    sculptureView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Sculpture/Installation view
function closeSculptureView() {
    if (!sculptureView) return;
    sculptureView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Sculpture/Installation
if (sculptureLink && portfolioIndex) {
    sculptureLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Toggle highlight state
    sculptureHighlighted = !sculptureHighlighted;
    
    // Get all list items
    const listItems = portfolioIndex.querySelectorAll('li');
    
    listItems.forEach((li) => {
        const medium = li.dataset.medium;
        if (medium === 'installation' || medium === 'art in public space') {
            if (sculptureHighlighted) {
                li.style.color = '#000000';
            } else {
                li.style.color = ''; // Reset to default
            }
        } else {
            // Reset other items to default
            li.style.color = '';
        }
    });
    
    // Reset other category highlights
    photographyHighlighted = false;
    videoHighlighted = false;
    });
}

if (closeSculptureBtn) {
    closeSculptureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeSculptureView();
    });
}

if (sculptureView) {
    sculptureView.addEventListener('click', (e) => {
        if (e.target === sculptureView) {
            closeSculptureView();
        }
    });
}

// Helper function to open popup from category view
function openPopupFromCategory(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (project) {
        if (photographyView && photographyView.classList.contains('active')) {
            closePhotographyView();
        } else if (videoView && videoView.classList.contains('active')) {
            closeVideoView();
        } else if (sculptureView && sculptureView.classList.contains('active')) {
            closeSculptureView();
        }
        scrollToProjectSection(project.id);
    }
}

// Make openPopupFromCategory available globally
window.openPopupFromCategory = openPopupFromCategory;

function isPageReload() {
    try {
        const nav = performance.getEntriesByType('navigation')[0];
        if (nav && nav.type === 'reload') return true;
    } catch (_) {}
    try {
        if (typeof performance.navigation !== 'undefined' && performance.navigation.type === 1) return true;
    } catch (_) {}
    return false;
}

function resetToLandingOnReload() {
    if (!isPageReload() || !document.getElementById('works-landing')) return;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(function () {
        window.scrollTo(0, 0);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    resetToLandingOnReload();
    initializeIndex();
    initializeProjectSections();
    initImageLightbox();
});

window.addEventListener('load', function () {
    if (isPageReload() && document.getElementById('works-landing')) {
        window.scrollTo(0, 0);
    }
});


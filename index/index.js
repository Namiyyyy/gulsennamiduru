// Portfolio data structure
const portfolioData = {
    title: "Gülsen Namıduru",
    projects: [
        {
            id: 7,
            title: "06 - Voices of Leopoldplatz",
            year: "2024",
            category: "video",
            medium: "video",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "Content coming soon...",
            fullDescription: "Content coming soon...",
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            videos: [
                "video/voices_of_leopoldplatz/Bebe_sobe.mp4"
            ],
            pdf: '',
            credentials: ''
        },
        {
            id: 6,
            title: "05 - Pirate Pedagogies",
            year: "2024",
            category: "art in public space",
            medium: "art in public space",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "an educational program focusing on the relationship between urban aesthetic, sensory experience and our mental landscape",
            fullDescription: "an educational program focusing on the relationship between urban aesthetic, sensory experience and our mental landscape",
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            videos: [],
            pdf: "img/pirate_pedagogies/ebesobe_zine.pdf",
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
            credentials: ''
        },
        {
            id: 5,
            title: "04 - Sylwester Stalker",
            year: "2024",
            category: "video",
            medium: "video",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "Content coming soon...",
            fullDescription: "Content coming soon...",
            // ========== PROJECT DESCRIPTION END ==========
            images: [],
            videos: [
                "video/sylwester_stalker/FIREWORK MADNESS & CHAOS.mp4"
            ],
            credentials: ''
        },
        {
            id: 1,
            title: "03 - Architectures Of Sky",
            year: "2024",
            category: "photography",
            medium: "photography",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "a photography series aiming to create an index for objects furnishing sky",
            fullDescription: "A photography project focuses on the industrial elements, searching for micro fragments within their imposing presence, details that, when isolated, reveal an unexpected aesthetic resonance. In their intersections and overlaps, a visual language emerges, reminiscre formal compositions, the project attempts to undo the numb efficiency imposed on their aesthetics. In doing so, it reclaims a sense of affect and engagement within an industrial language built for optimization rather than expression.\n\nThe photographic subjects I choose oscillate between hyper- and trans-local in their character. They are mostly bi-products of mass production, in constant circulation, migrating from one place to another, they are nearly context-less. To enhance this effect, I isolate the objects from their surroundings with a process of zooming and framing. Since scale is a relational property of an object, isolation helps me to manipulate the reality that object impose on the viewer. While opening a door to abstraction, it helps me to rewrite the narrative of these objects for a reserach on their affective qualities.",
            // ========== PROJECT DESCRIPTION END ==========
            images: [
                "img/architecture_of_sky/architecture_of_sky.jpg",
                "img/architecture_of_sky/architectures_of_sky_2.jpg",
                "img/architecture_of_sky/architectures_of_sky_3.jpg",
                "img/architecture_of_sky/_DSC5409.jpg"
            ],
            credentials: ''
        },
        {
            id: 2,
            title: "02 - Abandoned Battleground",
            year: "2023",
            category: "photography",
            medium: "photography",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "a photographical research on rubbish, and urban exclusion",
            fullDescription: "The foundation of my project lies in the photographs I capture during walks in gentrified areas or areas in the danger of being gentrified such as Wedding, Moabit, Pankow, Neukölln, and Kreuzberg.\n\nBerlin is renowned for its positive qualities as well as its reputation for being dirty. Rather than merely perceiving this as a failure of the city, the concept of \"rubbish\" and its correspondent in state agenda, waste management, emerges as a form of urban exclusion. To highlight this exclusion, I adopt an archaeological approach to rubbish within the urban periphery. I focus on groups of objects that are out-of-use, discarded, and abandoned in the city.",
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
            id: 3,
            title: "01 - hieroglyphs",
            year: "2022",
            category: "drawing",
            medium: "drawing",
            // ========== PROJECT DESCRIPTION START ==========
            shortDescription: "an attempt to reclaim geometry and it's language, to create an affective symbolism out of them",
            fullDescription: "an attempt to reclaim geometry and it's language, to create an affective symbolism out of them",
            // ========== PROJECT DESCRIPTION END ==========
            images: [
                "img/hiyeroglifler/daire çalışma.jpg",
                "img/hiyeroglifler/üçgen çalışması.jpg"
            ],
            credentials: ''
        }
    ]
};

// State management
let currentProject = null;
let currentSlideIndex = 0;
let slideshowTimer = null;

// DOM elements
const portfolioIndex = document.getElementById('portfolio-index');
const popupModal = document.getElementById('popup-modal');
const detailView = document.getElementById('detail-view');
const popupTitle = document.getElementById('popup-title');
const popupMediumYear = document.getElementById('popup-medium-year');
const popupShortDescription = document.getElementById('popup-short-description');
const popupFullDescription = document.getElementById('popup-full-description');
const popupCredentials = document.getElementById('popup-credentials');
const videoSection = document.getElementById('video-section');
const slideshowContainer = document.getElementById('slideshow-container');
const slideCounter = document.getElementById('slide-counter');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const closePopupBtn = document.getElementById('close-popup');
const detailTitle = document.getElementById('detail-title');
const detailImages = document.getElementById('detail-images');
const closeDetailBtn = document.getElementById('close-detail');
const cvLink = document.getElementById('cv-link');
const cvView = document.getElementById('cv-view');
const cvContent = document.getElementById('cv-content');
const closeCvBtn = document.getElementById('close-cv');
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
const imageSlideshowEl = document.getElementById('image-slideshow');
const bookViewEl = document.getElementById('book-view');
const bookPageLeftImg = document.querySelector('#book-view .book-page-left img');
const bookPageRightImg = document.querySelector('#book-view .book-page-right img');
const bookPrevBtn = document.getElementById('book-prev');
const bookNextBtn = document.getElementById('book-next');
const bookSpreadCounter = document.getElementById('book-spread-counter');
const bookLoadingEl = document.getElementById('book-loading');

// Book viewer state
let pdfPageImages = [];
let spreads = [];
let currentSpreadIndex = 0;

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize portfolio index
function initializeIndex() {
    portfolioData.projects.forEach((project) => {
        const li = document.createElement('li');
        li.textContent = project.title;
        li.dataset.projectId = project.id;
        li.dataset.category = project.category.toLowerCase();
        li.dataset.medium = project.medium ? project.medium.toLowerCase() : '';
        li.addEventListener('click', () => openPopup(project));
        portfolioIndex.appendChild(li);
    });
}

// Helper function to remove item numbers from title (e.g. "01 - Title" -> "Title")
function removeTitleNumbers(title) {
    return title.replace(/^\d+\s*-\s*/, '');
}

// Open popup modal
function openPopup(project) {
    currentProject = project;
    currentSlideIndex = 0;

    // Set popup content - remove numbers from title
    const titleWithoutNumbers = removeTitleNumbers(project.title);
    popupTitle.textContent = titleWithoutNumbers;
    
    // Medium, year (same line, comma between them)
    if (popupMediumYear) {
        const parts = [];
        if (project.medium) parts.push(project.medium);
        if (project.year) parts.push(project.year);
        popupMediumYear.textContent = parts.join(', ');
        popupMediumYear.style.display = parts.length ? 'block' : 'none';
    }
    
    // Short description (italic)
    if (popupShortDescription) {
        popupShortDescription.textContent = project.shortDescription || '';
        popupShortDescription.style.display = project.shortDescription ? 'block' : 'none';
    }

    // Text space: full description below media
    if (popupFullDescription) {
        const full = project.fullDescription || '';
        if (full.trim()) {
            const paragraphs = full.split(/\n\n+/).filter(Boolean);
            popupFullDescription.innerHTML = paragraphs.map(p => '<p>' + escapeHtml(p) + '</p>').join('');
            popupFullDescription.style.display = 'block';
        } else {
            popupFullDescription.innerHTML = '';
            popupFullDescription.style.display = 'none';
        }
    }
    
    // Credentials (centered, below detailed description)
    if (popupCredentials) {
        const credentials = project.credentials || '';
        if (credentials.trim()) {
            popupCredentials.textContent = credentials;
            popupCredentials.style.display = 'block';
        } else {
            popupCredentials.textContent = '';
            popupCredentials.style.display = 'none';
        }
    }
    
    // Clear video section
    if (videoSection) {
        videoSection.innerHTML = '';
        videoSection.style.display = 'none';
    }

    // Book viewer: PDF or JPEG images (e.g. PDF exported as one JPEG per page)
    const usePdfImages = project.pdfImages && Array.isArray(project.pdfImages) && project.pdfImages.length > 0;
    const usePdf = project.pdf && project.pdf.trim() !== '';

    if (usePdfImages) {
        imageSlideshowEl.style.display = 'none';
        bookViewEl.style.display = 'block';
        bookLoadingEl.style.display = 'none';
        bookViewEl.querySelector('.book-spread').style.display = 'flex';
        bookViewEl.querySelector('.book-controls').style.display = 'flex';
        showBookFromImages(project.pdfImages);
        popupModal.classList.add('active');
        if (project.title.startsWith('01') || project.title.startsWith('02') ||
            project.title.startsWith('03') || project.title.startsWith('04') ||
            project.title.startsWith('05') || project.title.startsWith('06') ||
            project.title.startsWith('07')) {
            popupModal.classList.add('large-modal');
        } else {
            popupModal.classList.remove('large-modal');
        }
        document.body.style.overflow = 'hidden';
        return;
    }

    if (usePdf) {
        imageSlideshowEl.style.display = 'none';
        bookViewEl.style.display = 'block';
        bookLoadingEl.style.display = 'block';
        bookViewEl.querySelector('.book-spread').style.display = 'none';
        bookViewEl.querySelector('.book-controls').style.display = 'none';
        loadPdfAndShowBook(project.pdf);
        popupModal.classList.add('active');
        // Check original title with numbers for large modal
        if (project.title.startsWith('01') || project.title.startsWith('02') ||
            project.title.startsWith('03') || project.title.startsWith('04') ||
            project.title.startsWith('05') || project.title.startsWith('06') ||
        project.title.startsWith('07')) {
            popupModal.classList.add('large-modal');
        } else {
            popupModal.classList.remove('large-modal');
        }
        document.body.style.overflow = 'hidden';
        return;
    }

    bookViewEl.style.display = 'none';
    
    // Handle images separately (in slideshow)
    if (project.images && project.images.length > 0) {
        imageSlideshowEl.style.display = 'block';
        // Clear any existing timer
        if (slideshowTimer) {
            clearInterval(slideshowTimer);
            slideshowTimer = null;
        }
        
        slideshowContainer.innerHTML = '';
        project.images.forEach((imgPath, index) => {
            const element = document.createElement('img');
            element.src = imgPath;
            element.alt = titleWithoutNumbers;
            element.classList.add('slide-image', 'slide-media');
            if (index === 0) {
                element.style.position = 'relative';
            } else {
                element.classList.add('hidden');
            }
            
            // Add click handler to change slide
            element.addEventListener('click', () => {
                if (index !== currentSlideIndex) {
                    showSlide(index);
                } else {
                    nextSlide();
                }
            });
            
            // Add right-click handler to advance to next slide
            element.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Prevent default context menu
                nextSlide();
            });
            
            slideshowContainer.appendChild(element);
        });
        currentSlideIndex = 0;
        updateSlideCounter();
        updateSlideButtons();
    } else {
        imageSlideshowEl.style.display = 'none';
    }
    
    // Handle videos separately (after images)
    if (project.videos && project.videos.length > 0 && videoSection) {
        videoSection.innerHTML = '';
        videoSection.style.display = 'block';
        project.videos.forEach((videoPath) => {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';
            const element = document.createElement('video');
            try {
                element.src = new URL(videoPath, window.location.href).href;
            } catch (_) {
                element.src = videoPath;
            }
            element.controls = true;
            element.playsInline = true;
            element.preload = 'auto';
            element.classList.add('popup-video');
            element.addEventListener('error', function() {
                const msg = document.createElement('p');
                msg.className = 'video-error-msg';
                msg.style.cssText = 'padding:20px;color:#666;font-size:14px;';
                msg.textContent = 'This video cannot be played in your browser. Try converting the file to MP4 (H.264) for better support.';
                videoWrapper.appendChild(msg);
            });
            videoWrapper.appendChild(element);
            videoSection.appendChild(videoWrapper);
        });
    }

    // Show popup
    popupModal.classList.add('active');
    // Add class for work items starting with "01-", "02-", "03-", etc. to use larger modal size
    // Check original title with numbers for large modal
    if (project.title.startsWith('01') || project.title.startsWith('02') ||
        project.title.startsWith('03') || project.title.startsWith('04') ||
        project.title.startsWith('05') || project.title.startsWith('06') ||
        project.title.startsWith('07')) {
        popupModal.classList.add('large-modal');
    } else {
        popupModal.classList.remove('large-modal');
    }
    document.body.style.overflow = 'hidden';
}

// --- PDF book viewer (spread view with arrows and orientation) ---
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

function showBookFromImages(imagePaths) {
    pdfPageImages = [];
    spreads = [];
    currentSpreadIndex = 0;
    if (!imagePaths || imagePaths.length === 0) return;

    // First page alone (on the right); then spreads from page 2 onward
    spreads.push([null, imagePaths[0] || null]);
    for (let i = 1; i < imagePaths.length; i += 2) {
        spreads.push([imagePaths[i] || null, imagePaths[i + 1] || null]);
    }
    showSpread(0);
}

function loadPdfAndShowBook(pdfUrl) {
    pdfPageImages = [];
    spreads = [];
    currentSpreadIndex = 0;
    const absolutePdfUrl = new URL(pdfUrl, window.location.href).href;
    bookLoadingEl.textContent = 'Loading PDF…';
    bookLoadingEl.style.display = 'block';

    function loadDoc() {
        return fetch(absolutePdfUrl)
            .then(function(r) {
                if (!r.ok) throw new Error('Fetch failed');
                return r.arrayBuffer();
            })
            .then(function(buf) {
                return pdfjsLib.getDocument({ data: buf }).promise;
            })
            .catch(function() {
                return pdfjsLib.getDocument({ url: absolutePdfUrl }).promise;
            });
    }

    loadDoc().then(function(pdf) {
        const numPages = pdf.numPages;
        const renderPromises = [];
        for (let i = 1; i <= numPages; i++) {
            renderPromises.push(pdf.getPage(i).then(renderPageToDataUrl));
        }
        return Promise.all(renderPromises);
    }).then(function(imageUrls) {
        pdfPageImages = imageUrls;
        if (pdfPageImages.length > 0) {
            // First page alone (on the right); then spreads from page 2 onward
            spreads.push([null, pdfPageImages[0] || null]);
            for (let i = 1; i < pdfPageImages.length; i += 2) {
                spreads.push([pdfPageImages[i] || null, pdfPageImages[i + 1] || null]);
            }
        }
        bookLoadingEl.style.display = 'none';
        bookViewEl.querySelector('.book-spread').style.display = 'flex';
        bookViewEl.querySelector('.book-controls').style.display = 'flex';
        showSpread(0);
    }).catch(function() {
        bookLoadingEl.innerHTML = 'Could not load PDF. <a href="' + absolutePdfUrl + '" target="_blank" rel="noopener" style="color:#c00;text-decoration:underline;">Open in new tab</a>';
        bookLoadingEl.style.display = 'block';
    });
}

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

function bookPrevSpread() {
    if (currentSpreadIndex > 0) showSpread(currentSpreadIndex - 1);
}

function bookNextSpread() {
    if (currentSpreadIndex < spreads.length - 1) showSpread(currentSpreadIndex + 1);
}

// Close popup modal
function closePopup() {
    // Clear slideshow timer
    if (slideshowTimer) {
        clearInterval(slideshowTimer);
        slideshowTimer = null;
    }
    bookViewEl.style.display = 'none';
    imageSlideshowEl.style.display = 'block';
    popupModal.classList.remove('active');
    // Also close detail view if it's open
    if (detailView.classList.contains('active')) {
        closeDetailView();
    }
    document.body.style.overflow = 'auto';
    currentProject = null;
    currentSlideIndex = 0;
}

// Open detail view as separate page
// Close detail view
function closeDetailView() {
    detailView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Slideshow navigation
function updateSlideCounter() {
    if (!currentProject) {
        slideCounter.textContent = '';
        return;
    }
    
    // Count only images (videos are separate)
    const imageCount = currentProject.images ? currentProject.images.length : 0;
    
    if (imageCount === 0) {
        slideCounter.textContent = '';
        return;
    }
    slideCounter.textContent = `${currentSlideIndex + 1} / ${imageCount}`;
}

function updateSlideButtons() {
    if (!currentProject) {
        prevSlideBtn.disabled = true;
        nextSlideBtn.disabled = true;
        return;
    }
    
    // Count only images (videos are separate)
    const imageCount = currentProject.images ? currentProject.images.length : 0;
    
    if (imageCount === 0) {
        prevSlideBtn.disabled = true;
        nextSlideBtn.disabled = true;
        return;
    }
    // Buttons are always enabled since slideshow loops
    prevSlideBtn.disabled = false;
    nextSlideBtn.disabled = false;
}

function showSlide(index) {
    if (!currentProject) return;
    
    // Count only images (videos are separate)
    const imageCount = currentProject.images ? currentProject.images.length : 0;
    
    if (imageCount === 0) return;
    
    const slides = slideshowContainer.querySelectorAll('.slide-media');
    if (index < 0 || index >= slides.length) return;
    
    // Pause any playing videos before switching
    slides.forEach((slide) => {
        if (slide.tagName === 'VIDEO') {
            slide.pause();
        }
    });
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
            slide.style.position = 'relative';
            slide.style.zIndex = '2';
        } else {
            slide.classList.add('hidden');
            slide.style.position = 'absolute';
            slide.style.zIndex = '1';
        }
    });
    
    currentSlideIndex = index;
    updateSlideCounter();
    updateSlideButtons();
}

function nextSlide() {
    if (!currentProject) return;
    
    // Count only images (videos are separate)
    const imageCount = currentProject.images ? currentProject.images.length : 0;
    
    if (imageCount === 0) return;
    const nextIndex = (currentSlideIndex + 1) % imageCount;
    showSlide(nextIndex);
}

function prevSlide() {
    if (!currentProject) return;
    
    // Count only images (videos are separate)
    const imageCount = currentProject.images ? currentProject.images.length : 0;
    
    if (imageCount === 0) return;
    const prevIndex = (currentSlideIndex - 1 + imageCount) % imageCount;
    showSlide(prevIndex);
}

// Event listeners
prevSlideBtn.addEventListener('click', prevSlide);
nextSlideBtn.addEventListener('click', nextSlide);
if (bookPrevBtn) bookPrevBtn.addEventListener('click', bookPrevSpread);
if (bookNextBtn) bookNextBtn.addEventListener('click', bookNextSpread);
closePopupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closePopup();
});
closeDetailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeDetailView();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (popupModal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closePopup();
        } else if (bookViewEl.style.display === 'block' && spreads.length > 0) {
            if (e.key === 'ArrowLeft') {
                bookPrevSpread();
            } else if (e.key === 'ArrowRight') {
                bookNextSpread();
            }
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    } else if (cvView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeCvView();
        }
    } else if (contactView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeContactView();
        }
    } else if (cvPageView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeCvPageView();
        }
    } else if (photographyView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closePhotographyView();
        }
    } else if (videoView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeVideoView();
        }
    } else if (sculptureView.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeSculptureView();
        }
    }
});

// Close modals when clicking outside content (but not on the popup content itself)
popupModal.addEventListener('click', (e) => {
    // Only close if clicking on the modal background, not the content
    if (e.target === popupModal) {
        closePopup();
    }
});

// Detail view is now a separate page, so no click handler needed

// Open CV view
function openCvView() {
    cvContent.innerHTML = `
        <p>As an architect, I find my inspiration in urban life and understand myself through my surrounding. Thus built form, urban aethetics and its sensory qualities started to gain more and more emphasis in my practice.</p>
        
        <p>In addition to that, I am a part of a collective. I also try to collectivize other areas of artistic work I tend to produce. This resulted with a shift in my focus from photography to video, from exhibition to participatory methods. Working with and building for people is the attitude I am trying to integrate into not only my artistic production but also to my life.</p>
    `;
    cvView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close CV view
function closeCvView() {
    cvView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for CV
cvLink.addEventListener('click', (e) => {
    e.preventDefault();
    openCvView();
});

closeCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeCvView();
});

// Close CV when clicking outside
cvView.addEventListener('click', (e) => {
    if (e.target === cvView) {
        closeCvView();
    }
});

// Open Contact view
function openContactView() {
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
    contactView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Contact
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openContactView();
});

closeContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeContactView();
});

// Close Contact when clicking outside
contactView.addEventListener('click', (e) => {
    if (e.target === contactView) {
        closeContactView();
    }
});

// Open CV Page view
function openCvPageView() {
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
    cvPageView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for CV Page
cvPageLink.addEventListener('click', (e) => {
    e.preventDefault();
    openCvPageView();
});

closeCvPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeCvPageView();
});

// Close CV Page when clicking outside
cvPageView.addEventListener('click', (e) => {
    if (e.target === cvPageView) {
        closeCvPageView();
    }
});

// Open Photography view
function openPhotographyView() {
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
    photographyView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Category highlight state
let photographyHighlighted = false;
let videoHighlighted = false;
let sculptureHighlighted = false;

// Event listeners for Photography
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
                li.style.color = 'red';
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

closePhotographyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closePhotographyView();
});

// Close Photography when clicking outside
photographyView.addEventListener('click', (e) => {
    if (e.target === photographyView) {
        closePhotographyView();
    }
});

// Open Video view
function openVideoView() {
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
    videoView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Video
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
                li.style.color = 'red';
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

closeVideoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeVideoView();
});

// Close Video when clicking outside
videoView.addEventListener('click', (e) => {
    if (e.target === videoView) {
        closeVideoView();
    }
});

// Open Sculpture/Installation view
function openSculptureView() {
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
    sculptureView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for Sculpture/Installation
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
                li.style.color = 'red';
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

closeSculptureBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeSculptureView();
});

// Close Sculpture/Installation when clicking outside
sculptureView.addEventListener('click', (e) => {
    if (e.target === sculptureView) {
        closeSculptureView();
    }
});

// Helper function to open popup from category view
function openPopupFromCategory(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (project) {
        // Close the category view first
        if (photographyView.classList.contains('active')) {
            closePhotographyView();
        } else if (videoView.classList.contains('active')) {
            closeVideoView();
        } else if (sculptureView.classList.contains('active')) {
            closeSculptureView();
        }
        // Open the popup
        openPopup(project);
    }
}

// Make openPopupFromCategory available globally
window.openPopupFromCategory = openPopupFromCategory;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeIndex();
});


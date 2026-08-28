/* ────────────────────────────────────────────────────
           VANTA.JS NET BACKGROUND
           ──────────────────────────────────────────────────── */
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
                VANTA.NET({
                    el: '#vanta-bg',
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200,
                    minWidth: 200,
                    scale: 1.0,
                    scaleMobile: 0.75,
                    color: 0x00aacc,
                    backgroundColor: 0x060912,
                    points: 7.0,
                    maxDistance: 20.0,
                    spacing: 20.0,
                    showDots: true,
                });
            }
        });

        /* ────────────────────────────────────────────────────
           TYPEWRITER
           ──────────────────────────────────────────────────── */
        (function typewriter() {
            const phrases = [
                'Full-Stack Developer_',
                'AI Platform Builder_',
                'React & Node.js Engineer_',
                'SaaS Product Creator_',
                'MERN Stack Developer_',
            ];
            let pi = 0,
                ci = 0,
                deleting = false;
            const el = document.getElementById('typewriter');

            function type() {
                if (!el) return;
                const phrase = phrases[pi];
                if (!deleting) {
                    ci++;
                    if (ci > phrase.length) {
                        deleting = true;
                        setTimeout(type, 1600);
                        return;
                    }
                } else {
                    ci--;
                    if (ci === 0) {
                        deleting = false;
                        pi = (pi + 1) % phrases.length;
                    }
                }
                el.innerHTML =
                    `<span style="color:var(--accent)">&gt; </span>${phrase.slice(0, ci)}<span class="cursor">|</span>`;
                setTimeout(type, deleting ? 40 : 80);
            }
            type();
        })();

        /* ────────────────────────────────────────────────────
           NAV
           ──────────────────────────────────────────────────── */
        (function initNav() {
            const ham = document.getElementById('ham');
            const mobileMenu = document.getElementById('mobileMenu');
            const nav = document.getElementById('navbar');

            if (ham) {
                ham.addEventListener('click', function() {
                    const isOpen = mobileMenu.classList.toggle('open');
                    ham.setAttribute('aria-expanded', isOpen);
                });
            }

            document.querySelectorAll('.mobile-menu a').forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('open');
                    if (ham) ham.setAttribute('aria-expanded', 'false');
                });
            });

            window.addEventListener('scroll', function() {
                nav.classList.toggle('scrolled', window.scrollY > 60);
            });
        })();

        /* ────────────────────────────────────────────────────
           SCROLL REVEAL
           ──────────────────────────────────────────────────── */
        function initReveal() {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

            document.querySelectorAll('.reveal').forEach(function(el) {
                observer.observe(el);
            });
        }

        /* ────────────────────────────────────────────────────
           PROJECT DATA
           ──────────────────────────────────────────────────── */
        const projectData = [{
            id: 'lyra',
            title: 'Lyra',
            description: 'AI-Powered Project Management System',
            role: 'Lead Developer',
            technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Python', 'PyTorch', 'TensorFlow',
                'JWT Auth', 'REST APIs', 'Real-time Chat'
            ],
            purpose: 'A comprehensive, web-based project management platform designed to enhance team collaboration, streamline workflow automation, and ensure project transparency through intelligent AI-driven functionalities.',
            outcome: 'Brings planning, delivery approvals, team communication, and AI-assisted reporting into one workspace.',
            features: [
                '🔐 Role-Based Authentication — Secure access for Admins, PMs, and Team Members',
                '📧 Invitation-Based Onboarding — Email invites with OTP verification',
                '🧠 AI Task Generation Engine — Converts project briefs into structured task lists',
                '📋 Multi-View Task Management — Kanban, Gantt, and calendar views',
                '✅ Approval-Based Submission — Deliverables review with payroll and performance reports',
                '💬 Real-Time Chat — Built-in messaging between PMs and team members',
                '🤖 AI Meeting Assistant — Transcribes meetings and logs decisions',
                '📊 Automated Reporting — Real-time dashboards with AI-based recommendations'
            ],
            github: 'https://github.com/huzaifamuqeet',
            live: null,
            images: [
                'lyra-dashboard.png'
            ],
            badge: 'FLAGSHIP · FINAL YEAR PROJECT'
        }, {
            id: 'botfizz',
            title: 'BotFizz',
            description: 'No-Code AI Chatbot Builder',
            role: 'Co-Contributor & Platform Tester',
            technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'NLP/AI APIs', 'WhatsApp API',
                'Instagram API', 'Docker', 'VPS'
            ],
            purpose: 'A web-based SaaS platform that democratizes intelligent conversational automation for SMBs. BotFizz allows users without any programming expertise to design, train, and deploy AI-powered chatbots across multiple messaging channels.',
            outcome: 'Lets non-technical teams design, train, and deploy conversational experiences across multiple channels.',
            features: [
                '🧠 AI Intent Recognition — OpenAI-integrated NLP for context-aware responses',
                '📱 Multi-Platform Deployment — WhatsApp, Instagram, and embeddable web widget',
                '📊 Real-Time Analytics Dashboard — Conversation monitoring and engagement metrics',
                '🔐 Role-Based Auth — Secure login with team collaboration support',
                '🎯 Custom AI Training — Upload domain-specific data to fine-tune chatbot',
                '🌍 Multi-Language Support — Global and regional audience reach'
            ],
            github: null,
            live: 'https://botfizz.com',
            images: [
                'botfizz-flow.png',
                'botfizz-dashboard.png'
            ],
            badge: 'LIVE PRODUCT'
        }, {
            id: 'odrehm',
            title: 'Odrehm.com',
            description: 'WooCommerce Store',
            role: 'Freelance Developer',
            technologies: ['WordPress', 'WooCommerce', 'PHP', 'Custom Theme', 'SEO', 'Payment Gateway', 'cPanel'],
            purpose: 'A fully functional e-commerce website built and delivered as a freelance engagement. Designed, developed, and deployed a complete WordPress + WooCommerce storefront with a custom theme, product catalogue, and full checkout flow.',
            outcome: 'Turns a product catalogue into a complete branded storefront with checkout, payments, and inventory workflows.',
            features: [
                '🎨 Custom Theme & Design — Brand-aligned storefront UI with responsive layouts',
                '🛒 WooCommerce Setup — Products, categories, cart, checkout, orders, and inventory',
                '💳 Payment Gateway — Secure online payment processing configured end-to-end',
                '🔎 On-Page SEO — Meta tags, schema, sitemap, and Google Search Console',
                '⚡ Performance — Caching, image compression, CDN, Core Web Vitals optimization',
                '🛡️ Security — SSL, plugin hardening, backups, and ongoing management'
            ],
            github: null,
            live: 'https://odrehm.com',
            images: [
                'odrehm-storefront.png'
            ],
            badge: 'FREELANCE · LIVE'
        }, {
            id: 'hospitality',
            title: 'HospitalityTours.com.pk',
            description: 'Travel Booking Platform',
            role: 'Freelance Developer',
            technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST APIs', 'Multi-Currency',
                'cPanel'
            ],
            purpose: 'A comprehensive full-stack travel and hospitality booking platform serving Pakistan\'s tourism market. Multi-service booking engine covering hotels, tours, car rentals, flights, boats, events, and co-working spaces.',
            outcome: 'Unifies discovery and booking across hotels, tours, transport, events, and flexible travel services.',
            features: [
                '🧳 Multi-Service Booking Engine — Hotels, tours, cars, flights, boats, events, and spaces',
                '💱 Multi-Currency & Language — PKR, EUR, JPY support with localization',
                '👤 User Auth System — Login/register, user profiles, and booking history',
                '🔎 Availability & Search — Dynamic date range search with guest/room configuration',
                '⭐ Reviews & Ratings — Customer review system with verified booking integration',
                '📩 Deals & Newsletters — Promotional offers engine and subscriber management'
            ],
            github: null,
            live: 'https://hospitalitytours.com.pk',
            images: [
                'hospitality-home.png'
            ],
            badge: 'FREELANCE · LIVE'
        }];

        /* ────────────────────────────────────────────────────
           RENDER PROJECT CARDS
           ──────────────────────────────────────────────────── */
        function renderProjects() {
            const grid = document.getElementById('projectsGrid');
            if (!grid) return;
            grid.innerHTML = '';

            projectData.forEach(function(project, idx) {
                const card = document.createElement('div');
                // Lyra and BotFizz are full-width (idx 0,1)
                const isFull = (idx === 0 || idx === 1);
                card.className = 'project-card' + (isFull ? ' full' : '') + (idx === 0 ? ' flagship' : '') + ' reveal reveal-d' + (idx % 4 + 1);
                card.dataset.projectId = project.id;

                const imgs = project.images || [];
                const mainImg = imgs[0] || null;
                const thumbImgs = imgs.slice(1, 3);

                let imagesHTML = `
              <div class="project-images">
                <div class="img-main">
                  ${mainImg ? `<img src="images/${project.id}/${mainImg}" alt="${project.title} — main screenshot" loading="lazy" />` : ''}
                  <div class="img-placeholder">
                    <span class="icon">🖼️</span>
                    <span>${mainImg || 'Add screenshot'}</span>
                    <span class="label">images/${project.id}/${mainImg || 'screenshot.png'}</span>
                  </div>
                </div>
                ${thumbImgs.map(function(t, i) {
                  return `
                    <div class="img-thumb">
                      ${t ? `<img src="images/${project.id}/${t}" alt="${project.title} — screenshot ${i+2}" loading="lazy" />` : ''}
                      <div class="img-placeholder">
                        <span class="icon">🖼️</span>
                        <span class="label">${t || 'screenshot'}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
                ${thumbImgs.length < 2 ? `<div class="img-thumb"><div class="img-placeholder"><span class="icon">+</span><span class="label">Add image</span></div></div>` : ''}
              </div>
            `;

                const techHTML = project.technologies.slice(0, 8).map(function(t) {
                    return '<span>' + t + '</span>';
                }).join('');

                let linksHTML = '';
                if (project.github) {
                    linksHTML +=
                        '<a href="' + project.github + '" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>';
                }
                if (project.live) {
                    linksHTML +=
                        '<a href="' + project.live + '" target="_blank" rel="noopener" aria-label="Live site" title="Live Site"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>';
                }

                card.innerHTML = imagesHTML +
                    '<div class="project-body">' +
                    '<div class="top-row">' +
                    '<span class="badge">' + (project.badge || '') + '</span>' +
                    '<div class="links">' + linksHTML + '</div>' +
                    '</div>' +
                    '<h3>' + project.title + '</h3>' +
                    '<div class="sub">' + project.description + '</div>' +
                    '<div class="project-role"><span>Role</span> ' + project.role + '</div>' +
                    '<p class="outcome"><strong>Impact</strong> ' + (project.outcome || '') + '</p>' +
                    '<div class="tech">' + techHTML + '</div>' +
                    '<span class="view-link">View Project →</span>' +
                    '</div>';

                card.addEventListener('click', function(e) {
                    if (e.target.closest('a')) return;
                    openModal(project.id);
                });

                grid.appendChild(card);
            });

            // Lazy-load images
            document.querySelectorAll('.project-images img').forEach(function(img) {
                function fitGalleryToImage() {
                    var gallery = img.closest('.project-images');
                    if (gallery && img.naturalWidth > 0 && img.naturalHeight > 0) {
                        gallery.style.aspectRatio = (img.naturalWidth / img.naturalHeight * 1.5).toFixed(3);
                    }
                }

                if (img.complete && img.naturalWidth > 0) {
                    fitGalleryToImage();
                    img.classList.add('loaded');
                } else {
                    img.addEventListener('load', function() {
                        fitGalleryToImage();
                        img.classList.add('loaded');
                    });
                    img.addEventListener('error', function() {
                        var parent = img.closest('.img-main') || img.closest('.img-thumb');
                        if (parent) {
                            var ph = parent.querySelector('.img-placeholder');
                            if (ph) ph.style.display = 'flex';
                            img.style.display = 'none';
                        }
                    });
                }
            });
        }

        /* ────────────────────────────────────────────────────
           MODAL
           ──────────────────────────────────────────────────── */
        var currentProject = null;
        var currentImageIndex = 0;
        var modalImages = [];
        var lastFocusedElement = null;

        function buildModal() {
            var overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            overlay.id = 'modalOverlay';
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', 'Project detail gallery');

            overlay.innerHTML =
                '<div class="modal" role="document">' +
                '<button class="modal-close" id="modalClose" aria-label="Close modal">✕</button>' +
                '<div class="modal-header">' +
                '<h2 id="modalTitle">Project</h2>' +
                '<div class="sub" id="modalSubtitle">Description</div>' +
                '<div class="meta" id="modalMeta"></div>' +
                '</div>' +
                '<div class="modal-gallery">' +
                '<div class="main-view">' +
                '<img id="modalMainImg" src="" alt="" />' +
                '<div class="no-img-placeholder" style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;background:var(--bg3);color:var(--text-dim);font-family:var(--mono);font-size:0.8rem;flex-direction:column;gap:0.3rem;">' +
                '<span style="font-size:2rem;">🖼️</span>' +
                '<span>No screenshot available</span>' +
                '</div>' +
                '</div>' +
                '<button class="nav-btn prev" id="modalPrev" aria-label="Previous image">‹</button>' +
                '<button class="nav-btn next" id="modalNext" aria-label="Next image">›</button>' +
                '<div class="counter" id="modalCounter">0 / 0</div>' +
                '</div>' +
                '<div class="modal-thumbs" id="modalThumbs"></div>' +
                '<div class="modal-body">' +
                '<div class="col">' +
                '<h4>About</h4>' +
                '<div id="modalDesc"></div>' +
                '<h4 style="margin-top:0.8rem;">Features</h4>' +
                '<ul id="modalFeatures"></ul>' +
                '</div>' +
                '<div class="col">' +
                '<h4>Technologies</h4>' +
                '<div class="tech-stack" id="modalTechStack"></div>' +
                '</div>' +
                '</div>' +
                '<div class="modal-actions" id="modalActions"></div>' +
                '</div>';

            document.body.appendChild(overlay);

            document.getElementById('modalClose').addEventListener('click', closeModal);
            document.getElementById('modalPrev').addEventListener('click', function(e) { e.stopPropagation();
                prevImage(); });
            document.getElementById('modalNext').addEventListener('click', function(e) { e.stopPropagation();
                nextImage(); });

            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) closeModal();
            });

            document.addEventListener('keydown', function(e) {
                if (!overlay.classList.contains('open')) return;
                if (e.key === 'Escape') { e.preventDefault();
                    closeModal(); }
                if (e.key === 'ArrowLeft') { e.preventDefault();
                    prevImage(); }
                if (e.key === 'ArrowRight') { e.preventDefault();
                    nextImage(); }
            });
        }

        function openModal(projectId) {
            var project = projectData.find(function(p) { return p.id === projectId; });
            if (!project) return;

            currentProject = project;
            lastFocusedElement = document.activeElement;
            modalImages = project.images || [];
            currentImageIndex = 0;

            var overlay = document.getElementById('modalOverlay');
            if (!overlay) return;

            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalSubtitle').textContent = project.description;
            document.getElementById('modalMeta').innerHTML =
                '<span><strong>Role</strong> ' + project.role + '</span>' +
                '<span><strong>Purpose</strong> ' + (project.purpose || '—') + '</span>';

            var mainImg = document.getElementById('modalMainImg');
            if (mainImg) {
                var src = modalImages.length > 0 ? 'images/' + project.id + '/' + modalImages[0] : '';
                mainImg.classList.remove('loaded');
                mainImg.src = src;
                mainImg.alt = project.title + ' — screenshot';
                mainImg.style.display = src ? 'block' : 'none';
                mainImg.onload = function() { mainImg.classList.add('loaded'); };
                var parent = mainImg.parentElement;
                var placeholder = parent.querySelector('.no-img-placeholder');
                if (placeholder) {
                    placeholder.style.display = src ? 'none' : 'flex';
                }
            }

            document.getElementById('modalCounter').textContent = modalImages.length > 0 ? '1 / ' + modalImages.length :
                '0 / 0';

            var thumbs = document.getElementById('modalThumbs');
            thumbs.innerHTML = '';
            if (modalImages.length === 0) {
                var ph = document.createElement('div');
                ph.className = 'thumb';
                ph.innerHTML = '<div class="placeholder">No images</div>';
                thumbs.appendChild(ph);
            } else {
                modalImages.forEach(function(img, i) {
                    var thumb = document.createElement('div');
                    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
                    var src = 'images/' + project.id + '/' + img;
                    thumb.innerHTML = '<img src="' + src + '" alt="' + project.title + ' thumbnail ' + (i + 1) +
                        '" loading="lazy" />';
                    thumb.addEventListener('click', function(e) {
                        e.stopPropagation();
                        setModalImage(i);
                    });
                    thumbs.appendChild(thumb);
                });
            }

            document.getElementById('modalDesc').innerHTML = '<p>' + (project.purpose || project.description) + '</p>';

            var featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            if (project.features && project.features.length > 0) {
                project.features.forEach(function(f) {
                    var li = document.createElement('li');
                    li.textContent = f;
                    featuresList.appendChild(li);
                });
            } else {
                var li = document.createElement('li');
                li.textContent = 'No features listed.';
                featuresList.appendChild(li);
            }

            var techStack = document.getElementById('modalTechStack');
            techStack.innerHTML = '';
            project.technologies.forEach(function(t) {
                var span = document.createElement('span');
                span.textContent = t;
                techStack.appendChild(span);
            });

            var actions = document.getElementById('modalActions');
            actions.innerHTML = '';
            if (project.github) {
                var a1 = document.createElement('a');
                a1.href = project.github;
                a1.target = '_blank';
                a1.rel = 'noopener';
                a1.className = 'btn-secondary btn-sm';
                a1.textContent = 'View GitHub';
                actions.appendChild(a1);
            }
            if (project.live) {
                var a2 = document.createElement('a');
                a2.href = project.live;
                a2.target = '_blank';
                a2.rel = 'noopener';
                a2.className = 'btn-primary btn-sm';
                a2.textContent = 'View Live Site';
                actions.appendChild(a2);
            }
            if (!project.github && !project.live) {
                var span = document.createElement('span');
                span.style.color = 'var(--text-dim)';
                span.style.fontSize = '0.8rem';
                span.textContent = 'No public links available.';
                actions.appendChild(span);
            }

            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            setTimeout(function() { document.getElementById('modalClose').focus(); }, 100);
        }

        function closeModal() {
            var overlay = document.getElementById('modalOverlay');
            if (overlay) {
                overlay.classList.remove('open');
                document.body.style.overflow = '';
                if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    lastFocusedElement.focus();
                }
            }
        }

        function setModalImage(index) {
            if (!currentProject || modalImages.length === 0) return;
            if (index < 0) index = modalImages.length - 1;
            if (index >= modalImages.length) index = 0;
            currentImageIndex = index;

            var mainImg = document.getElementById('modalMainImg');
            var counter = document.getElementById('modalCounter');
            var thumbs = document.querySelectorAll('#modalThumbs .thumb');

            if (mainImg) {
                var src = 'images/' + currentProject.id + '/' + modalImages[index];
                mainImg.classList.remove('loaded');
                mainImg.src = src;
                mainImg.alt = currentProject.title + ' — screenshot ' + (index + 1);
                mainImg.style.display = 'block';
                mainImg.onload = function() { mainImg.classList.add('loaded'); };
                var parent = mainImg.parentElement;
                var placeholder = parent.querySelector('.no-img-placeholder');
                if (placeholder) placeholder.style.display = 'none';
            }

            if (counter) {
                counter.textContent = (index + 1) + ' / ' + modalImages.length;
            }

            thumbs.forEach(function(thumb, i) {
                thumb.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            if (modalImages.length === 0) return;
            setModalImage(currentImageIndex + 1);
        }

        function prevImage() {
            if (modalImages.length === 0) return;
            setModalImage(currentImageIndex - 1);
        }

        /* ────────────────────────────────────────────────────
           CONTACT FORM
           ──────────────────────────────────────────────────── */
        (function initContactForm() {
            var form = document.getElementById('contactForm');
            var submitBtn = document.getElementById('cfSubmit');
            var success = document.getElementById('cfSuccess');
            if (!form || !submitBtn || !success) return;

            form.addEventListener('submit', function() {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                success.textContent = 'Sending your message securely...';
                success.classList.add('show');
            });
        })();

        /* ────────────────────────────────────────────────────
           INIT
           ──────────────────────────────────────────────────── */
        document.addEventListener('DOMContentLoaded', function() {
            buildModal();
            renderProjects();
            initReveal();
        });

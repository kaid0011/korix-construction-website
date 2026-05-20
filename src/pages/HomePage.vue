<template>
  <q-page class="landing-page bg-white">

    <!-- ===================== HERO ===================== -->
    <section class="hero-section bg-dark text-white q-py-xl">
      <div class="hero-container q-mx-auto q-px-md q-px-sm-lg q-px-xl-xl row items-center" style="max-width: 1440px;">

        <!-- Text -->
        <div class="col-12 col-md-6 hero-text text-center text-md-left q-py-xl q-pr-md-xl">
          <div class="text-accent text-weight-bold text-uppercase q-mb-md tracking-wide flex items-center justify-center justify-md-start">
            <q-icon name="apartment" size="sm" class="q-mr-sm" /> Premium Office Fit-Outs
          </div>
          <h1 class="hero-title text-weight-bolder text-white q-mb-md line-height-tight">
            Building Quality.<br />Delivering Trust.
          </h1>
          <p class="text-body1 text-grey-4 text-weight-regular q-mb-xl q-mx-auto q-mx-md-none" style="max-width: 90%;">
            Transforming ordinary offices into modern, functional, and inspiring workspaces tailored to your business needs.
          </p>
          <!-- Buttons: always centered on mobile, left-aligned on md+ -->
          <div class="flex justify-center justify-md-start q-gutter-md">
            <q-btn to="/services" color="accent" text-color="dark" label="Explore Services" size="lg" unelevated class="btn-primary-custom" />
            <q-btn to="/contact" color="white" text-color="white" label="Contact Us" size="lg" outline class="btn-outline-custom" />
          </div>
        </div>

        <!-- Visual -->
        <div class="col-12 col-md-6 hero-visual flex justify-center justify-md-end q-mt-lg q-mt-md-none">
          <div class="hero-image-container relative-position">
            <div class="hero-bg-shape bg-accent rounded-borders-custom"></div>
            <q-img
              src="../assets/4.jpg"
              class="hero-img rounded-borders-custom shadow-10"
              fit="cover"
            />
            <q-card class="floating-badge bg-dark text-white shadow-15 q-pa-md text-center">
              <div class="text-h3 text-weight-bolder text-white q-mb-xs">100%</div>
              <div class="text-caption text-grey-4 text-weight-bold text-uppercase tracking-wide">Turnkey Solutions</div>
            </q-card>
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== ABOUT PREVIEW ===================== -->
    <section class="about-preview bg-info q-py-xl q-px-md q-px-sm-lg q-px-xl-xl">
      <div class="row items-center q-mx-auto" style="max-width: 1440px; width: 100%;">

        <!-- Image Grid -->
        <div class="col-12 col-md-6 q-mb-xl q-mb-md-none flex justify-center">
          <div class="image-grid-container relative-position q-mx-auto">
            <div class="row q-col-gutter-md">
              <div class="col-6 staggered-col-left">
                <div class="relative-position q-mb-md img-wrapper">
                  <div class="single-shape shape-tl bg-accent"></div>
                  <q-img src="../assets/6.jpg" ratio="0.8" fit="cover" class="grid-img top-left-img" />
                </div>
                <div class="relative-position img-wrapper">
                  <div class="single-shape shape-bl bg-dark" style="opacity: 0.8;"></div>
                  <q-img src="../assets/27.jpg" ratio="0.8" fit="cover" class="grid-img bottom-left-img" />
                </div>
              </div>
              <div class="col-6 staggered-col-right">
                <div class="relative-position q-mb-md img-wrapper">
                  <div class="single-shape shape-tr bg-dark" style="opacity: 0.8;"></div>
                  <q-img src="../assets/5.jpg" ratio="0.8" fit="cover" class="grid-img top-right-img" />
                </div>
                <div class="relative-position img-wrapper">
                  <div class="single-shape shape-br bg-accent"></div>
                  <q-img src="../assets/11.jpg" ratio="0.8" fit="cover" class="grid-img bottom-right-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="col-12 col-md-6 q-pl-md-lg about-text text-center text-md-left">
          <div class="section-divider bg-dark q-mb-md q-mx-auto q-mx-md-none"></div>
          <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">About Korix Construction</div>
          <h2 class="section-title text-dark text-weight-bolder q-mb-lg line-height-tight">
            We Create Productive Business Spaces.
          </h2>
          <p class="text-body1 text-grey-8 q-mb-md line-height-relaxed">
            We are a trusted construction and office fit-out company specializing in workplace renovation, interior improvements, and customized furniture solutions.
          </p>
          <p class="text-body1 text-grey-8 q-mb-xl line-height-relaxed">
            From planning and design to construction and furniture installation, we provide complete turnkey solutions tailored to the unique needs of every client. Our focus is on long-term value, functionality, and brand identity.
          </p>
          <!-- FIX: flex wrapper centers button on mobile, left-aligns on md+ -->
          <div class="flex justify-center justify-md-start">
            <q-btn to="/about" color="dark" text-color="white" label="Read Our Story" icon-right="arrow_forward" unelevated class="btn-dark-custom" />
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== CORE VALUES ===================== -->
    <section class="features-ribbon bg-white q-py-xl q-px-md q-px-sm-lg q-px-xl-xl">
      <div class="q-mx-auto" style="max-width: 1440px;">

        <!-- FIX: header block fully centered on mobile -->
        <div class="q-mb-xl text-center text-md-left">
          <div class="section-divider bg-accent q-mb-md q-mx-auto q-mx-md-none"></div>
          <h2 class="section-title text-dark text-weight-bolder q-mb-none">Our Core Values</h2>
        </div>

        <div class="row q-col-gutter-xl justify-center">
          <div
            v-for="cv in coreValues"
            :key="cv.title"
            class="col-12 col-sm-6 col-md-3"
          >
            <!-- FIX: card content centered on mobile, left on md+ -->
            <q-card flat class="feature-card bg-transparent full-height text-center text-md-left">
              <!-- FIX: icon centered on mobile via mx-auto, left on md+ -->
              <div class="cv-icon-container bg-info flex flex-center q-mb-md shadow-1 q-mx-auto q-mx-md-none">
                <q-icon :name="cv.icon" size="md" color="primary" class="cv-icon-element" />
              </div>
              <div class="text-h5 text-dark text-weight-bolder q-mb-sm">{{ cv.title }}</div>
              <div class="text-body1 text-grey-7 q-mb-md line-height-relaxed">{{ cv.desc }}</div>
              <!-- FIX: flex wrapper so button centers on mobile -->
              <div class="flex justify-center justify-md-start">
                <q-btn to="/about" flat color="primary" icon-right="arrow_right_alt" label="Learn More" class="q-px-none text-weight-bold discover-btn" />
              </div>
            </q-card>
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== OCULAR INSPECTION ===================== -->
    <section class="ocular-section bg-info q-py-xl q-px-md q-px-sm-lg q-px-xl-xl">
      <div class="row items-center q-mx-auto q-py-lg" style="max-width: 1440px;">

        <!-- Text -->
        <div class="col-12 col-md-6 ocular-text text-center text-md-left">
          <div class="section-divider bg-dark q-mb-md q-mx-auto q-mx-md-none"></div>
          <div class="text-primary text-weight-bold text-uppercase q-mb-sm tracking-wide">Exclusive Offer</div>
          <h2 class="hero-title text-dark text-weight-bolder q-mb-md line-height-tight">
            Free Ocular Inspection<br />&amp; Space Assessment
          </h2>
          <p class="text-body1 text-grey-8 q-mb-xl text-weight-medium q-mx-auto q-mx-md-none" style="max-width: 90%;">
            Planning an upgrade? Let our engineering team evaluate your commercial property or office layout at absolutely zero cost to ensure an accurate, transparent project estimation.
          </p>

          <!-- FIX: checklist — each item uses justify-center on mobile, start on md+ -->
          <div class="row q-col-gutter-md q-mb-xl">
            <div class="col-12 col-sm-6 flex items-center justify-center justify-md-start">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm flex-shrink-0" />
              <span class="text-body1 text-weight-bold text-grey-9">Accurate Site Measurement</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center justify-center justify-md-start">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm flex-shrink-0" />
              <span class="text-body1 text-weight-bold text-grey-9">Structural &amp; Utility Assessment</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center justify-center justify-md-start">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm flex-shrink-0" />
              <span class="text-body1 text-weight-bold text-grey-9">Layout Optimization Advice</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center justify-center justify-md-start">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm flex-shrink-0" />
              <span class="text-body1 text-weight-bold text-grey-9">Zero-Obligation Estimate</span>
            </div>
          </div>

          <!-- FIX: button centered on mobile -->
          <div class="flex justify-center justify-md-start">
            <q-btn to="/contact" color="dark" text-color="white" label="Book Free Ocular Now" icon="calendar_today" size="lg" unelevated class="btn-dark-custom shadow-3" />
          </div>
        </div>

        <!-- Image -->
        <div class="col-12 col-md-6 flex justify-center justify-md-end q-mt-xl q-mt-md-none">
          <div class="ocular-image-container relative-position">
            <div class="ocular-bg-shape bg-primary"></div>
            <q-img src="../assets/11.jpg" class="ocular-img" fit="cover" />
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== CTA BANNER ===================== -->
    <section class="cta-banner bg-dark text-white q-px-md q-px-sm-lg q-px-xl-xl q-py-xl">
      <div class="row items-center q-mx-auto" style="max-width: 1440px;">

        <div class="col-12 col-md-7 text-center text-md-left q-mb-xl q-mb-md-none">
          <h2 class="hero-title text-weight-bolder q-mb-md line-height-tight">
            Ready to Upgrade<br />Your Workspace?
          </h2>
          <p class="text-body1 text-grey-4 q-mb-xl cta-desc q-mx-auto q-mx-md-none">
            Let our experts handle your office fit-out and construction needs. Projects delivered on time and within budget.
          </p>
          <!-- FIX: button centered on mobile -->
          <div class="flex justify-center justify-md-start">
            <q-btn to="/contact" color="accent" text-color="dark" label="Get A Free Consultation" size="lg" unelevated class="btn-primary-custom" />
          </div>
        </div>

        <div class="col-12 col-md-5 relative-position flex justify-center">
          <div class="cta-blob-container relative-position">
            <div class="cta-blob-bg bg-accent"></div>
            <q-img src="../assets/22.jpg" class="cta-img shadow-10" fit="cover" />
          </div>
        </div>

      </div>
    </section>

  </q-page>
</template>

<style scoped>
/* ============================================================
   BASE / GLOBAL
   ============================================================ */
.landing-page { overflow-x: hidden; }

/* Fluid typography */
.hero-title    { font-size: clamp(1.75rem, 5vw, 3rem);    line-height: 1.1; }
.section-title { font-size: clamp(1.5rem,  4vw, 2.25rem); line-height: 1.15; }

.tracking-wide       { letter-spacing: 2px; }
.line-height-tight   { line-height: 1.1; }
.line-height-relaxed { line-height: 1.6; }
.section-divider     { width: 40px; height: 3px; }
.flex-shrink-0       { flex-shrink: 0; }

/* ============================================================
   BUTTONS
   ============================================================ */
.btn-primary-custom {
  border-radius: 4px; padding: 10px 28px; font-weight: 800;
  transition: background-color 0.3s; white-space: nowrap;
}
.btn-primary-custom:hover { background-color: #e6b85c !important; }

.btn-outline-custom {
  border-radius: 4px; padding: 10px 28px; font-weight: 800;
  border: 2px solid white; transition: all 0.3s; white-space: nowrap;
}
.btn-outline-custom:hover { background-color: white; color: var(--q-dark) !important; }

.btn-dark-custom {
  border-radius: 4px; padding: 12px 24px; font-weight: bold;
  border: 1px solid var(--q-dark); transition: all 0.3s;
}
.btn-dark-custom:hover {
  transform: translateY(-3px);
  background-color: var(--q-primary) !important;
  border-color: var(--q-primary);
}

/* ============================================================
   HERO SECTION
   ============================================================ */
.hero-section { border-bottom: 8px solid var(--q-dark); }

.hero-image-container { width: 100%; max-width: 500px; z-index: 1; }

.hero-bg-shape {
  position: absolute; top: -20px; left: -20px;
  width: 100%; height: 100%; z-index: -1;
}

.rounded-borders-custom { border-radius: 40px 0 40px 0; }

.hero-img { width: 100%; height: clamp(260px, 45vw, 500px); }

.floating-badge {
  position: absolute; bottom: -28px; right: -28px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  border-top: 4px solid var(--q-accent);
  min-width: 160px; z-index: 2;
}
.border-accent { border-color: var(--q-accent) !important; }

/* ============================================================
   ABOUT — STAGGERED IMAGE GRID
   ============================================================ */
.image-grid-container { width: 100%; max-width: 520px; z-index: 1; }

.grid-img {
  width: 100%; border-radius: 8px;
  transition: transform 0.3s ease;
  height: clamp(120px, 20vw, 250px);
}

.img-wrapper { z-index: 1; }
.img-wrapper:hover .grid-img { transform: translateY(-6px); }

.staggered-col-left  { transform: translateY(-16px); }
.staggered-col-right { transform: translateY(16px); }

.top-left-img    { border-radius: 40px 0 0 0; }
.top-right-img   { border-radius: 0 40px 0 0; }
.bottom-left-img { border-radius: 0 0 0 40px; }
.bottom-right-img{ border-radius: 0 0 40px 0; }

.single-shape { position: absolute; width: 100%; height: 100%; z-index: -1; }
.shape-tl { top: -12px; left: -12px;   border-radius: 40px 0 0 0; }
.shape-bl { bottom: -12px; left: -12px; border-radius: 0 0 0 40px; }
.shape-tr { top: -12px; right: -12px;  border-radius: 0 40px 0 0; }
.shape-br { bottom: -12px; right: -12px; border-radius: 0 0 40px 0; }

/* ============================================================
   CORE VALUES
   ============================================================ */
.feature-card {
  border-top: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 16px 0;
}
.cv-icon-container {
  width: 54px; height: 54px;
  border-radius: 12px 0 12px 0;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.cv-icon-element { transition: transform 0.3s ease; }
.discover-btn    { transition: transform 0.2s ease; }

.feature-card:hover { transform: translateY(-6px); }
.feature-card:hover .cv-icon-container { background-color: var(--q-primary) !important; border-radius: 0 12px 0 12px; }
.feature-card:hover .cv-icon-element   { color: white !important; transform: scale(1.1); }
.feature-card:hover .discover-btn      { transform: translateX(4px); }

/* ============================================================
   OCULAR SECTION
   ============================================================ */
.ocular-section { border-top: 2px dashed rgba(49, 69, 68, 0.1); }

.ocular-image-container {
  width: 100%; max-width: 500px;
  height: clamp(260px, 40vw, 450px); z-index: 1;
}

.ocular-bg-shape {
  position: absolute; bottom: -20px; left: -20px;
  width: 100%; height: 100%;
  border-radius: 0 40px 0 40px; z-index: -1; opacity: 0.8;
}

.ocular-img { height: 100%; width: 100%; border-radius: 0 40px 0 40px; }

/* ============================================================
   CTA BANNER
   ============================================================ */
.cta-banner { border-top: 8px solid var(--q-accent); }

.cta-desc { max-width: 500px; }

.cta-blob-container {
  width: 100%; max-width: 400px;
  height: clamp(240px, 35vw, 400px);
  display: flex; align-items: center; justify-content: center; z-index: 1;
}

.cta-blob-bg {
  position: absolute; width: 90%; height: 90%;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  z-index: -1; top: 10%; left: 10%;
}

.cta-img {
  height: 80%; width: 80%;
  border-radius: 20px 0 60px 0;
  border: 4px solid var(--q-dark);
}

/* ============================================================
   BREAKPOINT — TABLET  (600px – 1023px)
   ============================================================ */
@media (min-width: 600px) and (max-width: 1023px) {
  .hero-img { height: clamp(300px, 40vw, 420px); }
  .floating-badge { right: 0; bottom: -36px; }

  .image-grid-container { max-width: 440px; }
  .grid-img { height: clamp(130px, 18vw, 200px); }

  .ocular-image-container { height: clamp(280px, 38vw, 380px); }
  .cta-blob-container     { height: clamp(260px, 32vw, 350px); margin-top: 2rem; }
}

/* ============================================================
   BREAKPOINT — MOBILE  (< 600px)
   ============================================================ */
@media (max-width: 599px) {

  /* Hero */
  .hero-img { height: clamp(220px, 70vw, 320px); }

  /* Badge: pull out of absolute flow, center below image */
  .floating-badge {
    position: relative;
    bottom: auto; right: auto;
    margin: 1.25rem auto 0;
    display: block;
    min-width: 140px;
    width: max-content;
  }

  /* Hide decorative overflow shapes */
  .hero-bg-shape,
  .single-shape,
  .ocular-bg-shape,
  .cta-blob-bg { display: none; }

  /* Flatten image grid stagger */
  .staggered-col-left,
  .staggered-col-right { transform: none; }
  .image-grid-container { max-width: 360px; }
  .grid-img { height: clamp(100px, 38vw, 180px); }

  /* Fluid containers */
  .ocular-image-container { height: clamp(220px, 65vw, 320px); max-width: 340px; }
  .cta-blob-container     { height: clamp(220px, 60vw, 300px); max-width: 320px; margin-top: 1.5rem; }

  .cta-desc { max-width: 100%; }

  .btn-primary-custom,
  .btn-outline-custom { padding: 10px 20px; font-size: 0.9rem; }

  /* Tighten vertical rhythm */
  .q-py-xl { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
}

/* ============================================================
   BREAKPOINT — NARROW MOBILE  (< 400px)
   ============================================================ */
@media (max-width: 399px) {
  .hero-img { height: 200px; }
  .grid-img { height: 90px; }
  .ocular-image-container { height: 200px; }
  .cta-blob-container     { height: 200px; }

  /* Stack hero buttons vertically */
  .hero-text .flex.justify-center { flex-direction: column; align-items: center; }
  .btn-primary-custom,
  .btn-outline-custom { width: 100%; text-align: center; }
}
</style>

<script setup>
const coreValues = [
  {
    icon: 'verified',
    title: 'Quality Excellence',
    desc: 'Uncompromising craftsmanship and premium structural materials in every detail.'
  },
  {
    icon: 'handshake',
    title: 'Integrity & Trust',
    desc: 'Delivering builds transparently with honest timelines and precise project tracking.'
  },
  {
    icon: 'health_and_safety',
    title: 'Safety First',
    desc: 'Adhering to strict safety regulations to keep our operation secure and robust.'
  },
  {
    icon: 'lightbulb',
    title: 'Innovative Solutions',
    desc: 'Embracing smart construction techniques and modern space efficiency planning.'
  }
];
</script>
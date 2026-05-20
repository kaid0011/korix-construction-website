<template>
  <q-page class="landing-page bg-white">
    <section class="hero-section bg-dark text-white q-py-xl">
      <div class="row items-center q-px-md q-px-md-xl hero-container q-mx-auto" style="max-width: 1440px;">
        <div class="col-12 col-md-6 q-pr-md-xl hero-text text-center text-md-left q-py-xl">
          <div class="text-accent text-weight-bold text-uppercase q-mb-md tracking-wide flex items-center justify-center justify-md-start">
            <q-icon name="apartment" size="sm" class="q-mr-sm"/> Premium Office Fit-Outs
          </div>
          <h1 class="text-h2 text-weight-bolder text-white q-mb-md line-height-tight">
            Building Quality.<br>
            Delivering Trust.
          </h1>
          <p class="text-body1 text-grey-4 text-weight-regular q-mb-xl q-mx-auto q-mx-md-none" style="max-width: 90%;">
            Transforming ordinary offices into modern, functional, and inspiring workspaces tailored to your business needs.
          </p>
          <div class="row q-gutter-md justify-center justify-md-start">
            <q-btn to="/services" color="accent" text-color="dark" label="Explore Services" size="lg" unelevated class="btn-primary-custom" />
            <q-btn to="/contact" color="white" text-color="white" label="Contact Us" size="lg" outline class="btn-outline-custom" />
          </div>
        </div>
        
        <div class="col-12 col-md-6 relative-position hero-visual q-mt-xl q-mt-md-none flex justify-center justify-md-end">
          <div class="hero-image-container relative-position">
            <div class="hero-bg-shape bg-accent rounded-borders-custom"></div>
            
            <q-img 
              src="../assets/4.jpg" 
              class="hero-img rounded-borders-custom shadow-10" 
              fit="cover" 
            />
            
            <q-card class="floating-badge bg-dark text-white border-accent shadow-15 q-pa-md text-center">
              <div class="text-h3 text-weight-bolder text-white q-mb-xs">100%</div>
              <div class="text-caption text-grey-4 text-weight-bold text-uppercase tracking-wide">Turnkey Solutions</div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="about-preview q-px-xl q-px-md-xl q-py-xl row items-center bg-info">
      <div class="row q-col-gutter-xl items-center q-mx-auto" style="max-width: 1440px; width: 100%;">
        
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-xl q-mb-md-none text-center">
          
          <div class="image-grid-container relative-position q-mx-auto q-ml-md-auto q-mr-md-xl">
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
        
        <div class="col-12 col-md-6 q-pl-md-lg about-text text-center text-md-left">
          <div class="section-divider bg-dark q-mb-md q-mx-auto q-mx-md-none"></div>
          <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">About Korix Construction</div>
          <h2 class="text-h3 text-dark text-weight-bolder q-mb-lg line-height-tight">We Create Productive Business Spaces.</h2>
          <p class="text-body1 text-grey-8 q-mb-md line-height-relaxed">
            We are a trusted construction and office fit-out company specializing in workplace renovation, interior improvements, and customized furniture solutions. 
          </p>
          <p class="text-body1 text-grey-8 q-mb-xl line-height-relaxed">
            From planning and design to construction and furniture installation, we provide complete turnkey solutions tailored to the unique needs of every client. Our focus is on long-term value, functionality, and brand identity.
          </p>
          <q-btn to="/about" color="dark" text-color="white" label="Read Our Story" icon-right="arrow_forward" unelevated class="btn-dark-custom" />
        </div>
      </div>
    </section>

    <section class="features-ribbon bg-white q-py-xl q-px-xl q-px-md-xl">
      <div class="q-mx-auto" style="max-width: 1440px;">
        <div class="row items-center justify-between q-mb-xl">
          <div>
            <div class="section-divider bg-accent q-mb-md"></div>
            <h2 class="text-h3 text-dark text-weight-bolder q-mb-none">Our Core Values</h2>
          </div>
        </div>

        <div class="row q-col-gutter-xl justify-center">
          <div 
            v-for="(cv, index) in coreValues" 
            :key="cv.title" 
            class="col-12 col-sm-6 col-md-3"
          >
            <q-card flat class="feature-card bg-transparent full-height">
              <div class="cv-icon-container bg-info flex flex-center q-mb-md shadow-1">
                <q-icon :name="cv.icon" size="md" color="primary" class="cv-icon-element" />
              </div>
              <div class="text-h5 text-dark text-weight-bolder q-mb-sm">{{ cv.title }}</div>
              <div class="text-body1 text-grey-7 q-mb-md line-height-relaxed" style="min-height: 48px;">{{ cv.desc }}</div>
              <q-btn to="/about" flat color="primary" icon-right="arrow_right_alt" label="Learn More" class="q-px-none text-weight-bold discover-btn" />
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="ocular-section bg-info q-py-xl q-px-md q-px-md-xl">
      <div class="row items-center q-col-gutter-xl q-mx-auto q-py-lg" style="max-width: 1440px;">
        <div class="col-12 col-md-6 ocular-text text-center text-md-left">
          <div class="section-divider bg-dark q-mb-md q-mx-auto q-mx-md-none"></div>
          <div class="text-primary text-weight-bold text-uppercase q-mb-sm tracking-wide">Exclusive Offer</div>
          <h2 class="text-h2 text-dark text-weight-bolder q-mb-md line-height-tight">
            Free Ocular Inspection <br>& Space Assessment
          </h2>
          <p class="text-body1 text-grey-8 q-mb-xl text-weight-medium" style="max-width: 90%;">
            Planning an upgrade? Let our engineering team evaluate your commercial property or office layout at absolutely zero cost to ensure an accurate, transparent project estimation.
          </p>

          <div class="row q-col-gutter-md q-mb-xl text-left">
            <div class="col-12 col-sm-6 flex items-center">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm" />
              <span class="text-body1 text-weight-bold text-grey-9">Accurate Site Measurement</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm" />
              <span class="text-body1 text-weight-bold text-grey-9">Structural & Utility Assessment</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm" />
              <span class="text-body1 text-weight-bold text-grey-9">Layout Optimization Advice</span>
            </div>
            <div class="col-12 col-sm-6 flex items-center">
              <q-icon name="check_circle" color="primary" size="sm" class="q-mr-sm" />
              <span class="text-body1 text-weight-bold text-grey-9">Zero-Obligation Estimate</span>
            </div>
          </div>

          <q-btn to="/contact" color="dark" text-color="white" label="Book Free Ocular Now" icon="calendar_today" size="lg" unelevated class="btn-dark-custom shadow-3" />
        </div>

        <div class="col-12 col-md-6 flex justify-center justify-md-end q-mt-xl q-mt-md-none">
          <div class="ocular-image-container relative-position">
            <div class="ocular-bg-shape bg-primary"></div>
            <q-img src="../assets/11.jpg" class="ocular-img" fit="cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner bg-dark text-white q-px-md q-px-md-xl q-py-xl">
      <div class="row items-center q-mx-auto" style="max-width: 1440px;">
        <div class="col-12 col-md-7 text-center text-md-left q-mb-xl q-mb-md-none">
          <h2 class="text-h2 text-weight-bolder q-mb-md line-height-tight">Ready to Upgrade<br>Your Workspace?</h2>
          <p class="text-body1 text-grey-4 q-mb-xl" style="max-width: 500px; margin-left: auto; margin-right: auto; margin-md-left: 0;">
            Let our experts handle your office fit-out and construction needs. Projects delivered on time and within budget.
          </p>
          <q-btn to="/contact" color="accent" text-color="dark" label="Get A Free Consultation" size="lg" unelevated class="btn-primary-custom" />
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
.landing-page { overflow-x: hidden; }

/* Typography */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.1; }
.line-height-relaxed { line-height: 1.6; }
.section-divider { width: 40px; height: 3px; }

/* Buttons */
.btn-primary-custom { border-radius: 4px; padding: 10px 32px; font-weight: 800; transition: background-color 0.3s; }
.btn-primary-custom:hover { background-color: #e6b85c !important; }
.btn-outline-custom { border-radius: 4px; padding: 10px 32px; font-weight: 800; border: 2px solid white; transition: all 0.3s; }
.btn-outline-custom:hover { background-color: white; color: var(--q-dark) !important; }
.btn-dark-custom { border-radius: 4px; padding: 12px 24px; font-weight: bold; border: 1px solid var(--q-dark); transition: all 0.3s; }
.btn-dark-custom:hover { transform: translateY(-3px); background-color: var(--q-primary) !important; border-color: var(--q-primary); }

/* Hero Section */
.hero-section { border-bottom: 8px solid var(--q-dark); }
.hero-image-container { width: 100%; max-width: 500px; z-index: 1; }
.hero-bg-shape { position: absolute; top: -20px; left: -20px; width: 100%; height: 100%; z-index: -1; }
.rounded-borders-custom { border-radius: 40px 0 40px 0; }
.hero-img { height: 500px; width: 100%; }

/* Floating Badge */
.floating-badge { 
  position: absolute; 
  bottom: -30px; 
  right: -30px; 
  border-radius: 8px; 
  border: 1px solid rgba(255,255,255,0.1); 
  border-top: 4px solid var(--q-accent);
  min-width: 200px;
}
.border-accent { border-color: var(--q-accent) !important; }

/* Architectural Staggered Grid */
.image-grid-container { 
  width: 100%; 
  max-width: 550px; 
  z-index: 1; 
}
.grid-img { 
  width: 100%; 
  border-radius: 8px; 
  transition: transform 0.3s ease; 
  height: 250px;
}
.img-wrapper { z-index: 1; }
.img-wrapper:hover .grid-img { 
  transform: translateY(-6px); 
}

/* Creating the offset flow */
.staggered-col-left { transform: translateY(-20px); }
.staggered-col-right { transform: translateY(20px); }

/* Outer border radiuses to match your layout styles */
.top-left-img { border-radius: 40px 0 0 0; }
.top-right-img { border-radius: 0 40px 0 0; }
.bottom-left-img { border-radius: 0 0 0 40px; }
.bottom-right-img { border-radius: 0 0 40px 0; }

/* 1-to-1 Image Background Shapes */
.single-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Specific Offsets and Radiuses for each image */
.shape-tl { top: -12px; left: -12px; border-radius: 40px 0 0 0; } /* Top Left offset */
.shape-bl { bottom: -12px; left: -12px; border-radius: 0 0 0 40px; } /* Bottom Left offset */
.shape-tr { top: -12px; right: -12px; border-radius: 0 40px 0 0; } /* Top Right offset */
.shape-br { bottom: -12px; right: -12px; border-radius: 0 0 40px 0; } /* Bottom Right offset */


/* Core Values UI Elements */
.feature-card { 
  border-top: 1px solid transparent; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
  padding: 16px 0; 
}
.cv-icon-container {
  width: 54px;
  height: 54px;
  border-radius: 12px 0 12px 0;
  transition: all 0.3s ease;
}
.cv-icon-element { transition: transform 0.3s ease; }
.discover-btn { transition: transform 0.2s ease; }

.feature-card:hover { transform: translateY(-6px); }
.feature-card:hover .cv-icon-container { background-color: var(--q-primary) !important; border-radius: 0 12px 0 12px; }
.feature-card:hover .cv-icon-element { color: white !important; transform: scale(1.1); }
.feature-card:hover .discover-btn { transform: translateX(4px); }

/* Ocular Inspection Layout */
.ocular-section { border-top: 2px dashed rgba(49, 69, 68, 0.1); }
.ocular-image-container { width: 100%; max-width: 500px; height: 450px; z-index: 1; }
.ocular-bg-shape { position: absolute; bottom: -20px; left: -20px; width: 100%; height: 100%; border-radius: 0 40px 0 40px; z-index: -1; opacity: 0.8; }
.ocular-img { height: 100%; width: 100%; border-radius: 0 40px 0 40px; }

/* CTA Banner */
.cta-banner { border-top: 8px solid var(--q-accent); }
.cta-blob-container { width: 100%; max-width: 400px; z-index: 1; height: 400px; display: flex; align-items: center; justify-content: center; }
.cta-blob-bg { 
  position: absolute; 
  width: 90%; 
  height: 90%; 
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  z-index: -1; 
  top: 10%;
  left: 10%;
}
.cta-img { height: 80%; width: 80%; border-radius: 20px 0 60px 0; border: 4px solid var(--q-dark); }

@media (max-width: 1024px) {
  .hero-image-container { max-width: 400px; margin-top: 2rem; }
  .floating-badge { right: auto; left: 50%; transform: translateX(-50%); bottom: -40px; }
  .section-divider { margin-left: auto; margin-right: auto; }
  .cta-blob-container { height: 300px; margin-top: 2rem; }
  .grid-img { height: 180px; }
  .ocular-image-container { height: 350px; margin-top: 2rem; }
  .single-shape { display: none; } /* Removes the decorative shapes on mobile to keep the layout clean */
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
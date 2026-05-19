<template>
  <q-page class="about-page bg-white">
    <section class="page-header text-white flex flex-center text-center q-py-xl relative-position">
      <div class="header-overlay"></div>
      <div class="header-content animate-fade-down relative-position z-top q-py-xl q-px-md">
        <div class="text-accent text-weight-bolder text-uppercase q-mb-md tracking-wide">Our Heritage</div>
        <h1 class="text-h1 text-weight-bolder q-mb-none line-height-tight">About Korix Construction</h1>
        <div class="section-divider bg-accent q-mx-auto q-mt-lg"></div>
      </div>
    </section>

    <section class="main-story q-px-md q-px-md-xl q-py-xl row items-center justify-center bg-white">
      <div class="col-12 col-md-5 q-pr-md-xl animate-fade-right q-mb-xl q-mb-md-none">
        <div class="image-wrapper relative-position" style="max-width: 550px; margin: 0 auto;">
          <div class="structural-bg-shape bg-accent structural-border"></div>
          
          <q-img 
            src="../assets/23.jpg" 
            class="story-img structural-border shadow-10" 
            style="height: 550px;" 
            fit="cover" 
          />
        </div>
      </div>

      <div class="col-12 col-md-7 q-pl-md-xl animate-fade-left text-center text-md-left">
        <div class="text-dark text-weight-bold text-uppercase q-mb-sm tracking-wide">Company Overview</div>
        <h2 class="text-h2 text-dark text-weight-bolder q-mb-lg line-height-tight">
          Transforming spaces into <br><span class="text-primary">inspiring environments.</span>
        </h2>
        
        <div class="text-body1 text-grey-9 line-height-relaxed text-content">
          <p v-for="(paragraph, index) in paragraphs" :key="index" class="q-mb-md text-weight-medium">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section class="synergy-section bg-dark text-white q-py-xl q-px-md q-px-md-xl relative-position">
      <div class="row items-center q-mx-auto q-py-xl" style="max-width: 1440px;">
        <div class="col-12 col-md-6 q-pr-md-xl text-center text-md-left q-mb-xl q-mb-md-none">
          <div class="text-accent text-weight-bold text-uppercase q-mb-sm tracking-wide">Corporate Strength</div>
          <h2 class="text-h2 text-white text-weight-bolder q-mb-lg line-height-tight">Backed by a legacy of excellence.</h2>
          <p class="text-body1 text-grey-4 q-mb-xl text-weight-regular line-height-relaxed" style="max-width: 90%;">
            Operating in tandem with our sister company, we leverage expanded resources, deep industry expertise, and a wider network of material sourcing to handle projects of any scale and complexity with uncompromising standards.
          </p>

          <div class="row q-col-gutter-lg justify-center justify-md-start">
            <div v-for="stat in companyStats" :key="stat.label" class="col-6 col-sm-4">
              <div class="text-h3 text-accent text-weight-bolder q-mb-xs">{{ stat.value }}</div>
              <div class="text-subtitle2 text-grey-5 text-weight-bold text-uppercase">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-md-6 flex justify-center justify-md-end">
          <q-card flat class="profile-card bg-white q-pa-xl shadow-15">
            <div class="text-h4 text-dark text-weight-bolder q-mb-lg">Group Expertise</div>
            <q-list dense>
              <q-item v-for="highlight in profileHighlights" :key="highlight" class="q-px-none q-py-sm text-dark">
                <q-item-section avatar style="min-width: 32px; padding-right: 8px;">
                  <q-icon name="check_circle" color="primary" size="sm" />
                </q-item-section>
                <q-item-section class="text-weight-bold text-body1">{{ highlight }}</q-item-section>
              </q-item>
            </q-list>
            <q-btn to="/services" color="accent" text-color="dark" label="View Full Capabilities" unelevated class="btn-primary-custom full-width q-mt-xl shadow-4" />
          </q-card>
        </div>
      </div>
    </section>

    <section class="core-values-section q-px-md q-px-md-xl q-py-xl bg-white">
      <div class="q-mx-auto q-py-xl" style="max-width: 1440px;">
        <div class="text-center q-mb-xl">
          <div class="section-divider bg-primary q-mx-auto q-mb-md"></div>
          <div class="text-secondary text-weight-bold text-uppercase q-mb-sm tracking-wide">Our Principles</div>
          <h2 class="text-h2 text-dark text-weight-bolder q-mb-sm line-height-tight">Core Values</h2>
          <p class="text-h6 text-grey-7 text-weight-regular">The foundational pillars that guide every project we undertake.</p>
        </div>

        <div class="row q-col-gutter-xl justify-center">
          <div 
            v-for="(cv, index) in coreValues" 
            :key="cv.title" 
            class="col-12 col-sm-6 col-md-3 card-stagger" 
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <q-card flat class="core-value-card full-height q-pa-xl bg-white shadow-2">
              <div class="cv-icon-wrapper bg-info flex flex-center q-mb-lg shadow-1">
                <q-icon :name="cv.icon" size="xl" color="primary" class="cv-icon" />
              </div>
              <h3 class="text-h5 text-dark text-weight-bolder q-mb-md">{{ cv.title }}</h3>
              <p class="text-body1 text-grey-8 text-weight-medium line-height-relaxed">{{ cv.desc }}</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision q-px-md q-px-md-xl q-py-xl bg-info">
      <div class="row q-col-gutter-xl justify-center q-py-xl" style="max-width: 1200px; margin: 0 auto;">
        
        <div class="col-12 col-md-6 card-stagger" style="animation-delay: 0.2s;">
          <q-card class="modern-card full-height q-pa-xl text-center bg-white shadow-3">
            <div class="icon-wrapper bg-dark q-mx-auto q-mb-lg flex flex-center" style="width: 70px; height: 70px; border-radius: 16px 0 16px 0;">
              <q-icon name="flag" size="xl" color="accent" />
            </div>
            <div class="text-h3 text-dark text-weight-bolder q-mb-md">Our Mission</div>
            <q-separator color="primary" class="q-mx-auto q-mb-lg" style="width: 50px; height: 3px; border-radius: 2px;" />
            <p class="text-body1 text-grey-8 line-height-relaxed text-weight-medium">{{ mission }}</p>
          </q-card>
        </div>

        <div class="col-12 col-md-6 card-stagger" style="animation-delay: 0.4s;">
          <q-card class="modern-card full-height q-pa-xl text-center bg-white shadow-3">
            <div class="icon-wrapper bg-dark q-mx-auto q-mb-lg flex flex-center" style="width: 70px; height: 70px; border-radius: 16px 0 16px 0;">
              <q-icon name="visibility" size="xl" color="accent" />
            </div>
            <div class="text-h3 text-dark text-weight-bolder q-mb-md">Our Vision</div>
            <q-separator color="primary" class="q-mx-auto q-mb-lg" style="width: 50px; height: 3px; border-radius: 2px;" />
            <p class="text-body1 text-grey-8 line-height-relaxed text-weight-medium">{{ vision }}</p>
          </q-card>
        </div>
        
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.about-page { overflow-x: hidden; }

/* Typography */
.tracking-wide { letter-spacing: 2px; }
.line-height-tight { line-height: 1.15; }
.line-height-relaxed { line-height: 1.7; }
.section-divider { width: 50px; height: 3px; }

/* Hero Header */
.page-header {
  min-height: 380px;
  background: url('https://images.unsplash.com/photo-1541888081622-c36399066468?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover fixed;
}
.header-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(49, 69, 68, 0.98) 0%, rgba(83, 128, 84, 0.9) 100%); }

/* Main Story & Image Framework */
.image-wrapper { z-index: 1; }
.structural-border { border-radius: 40px 0 40px 0; }
.structural-bg-shape { position: absolute; top: -20px; left: -20px; width: 100%; height: 100%; z-index: -1; }
.text-content p { font-size: 1.1rem; }

/* Synergy Profile Section */
.synergy-section { border-top: 8px solid var(--q-primary); }
.profile-card {
  width: 100%;
  max-width: 450px;
  border-radius: 0 40px 0 40px;
  border-left: 6px solid var(--q-accent);
}

/* Core Values UI Section */
.core-values-section { border-top: 2px dashed rgba(49, 69, 68, 0.1); }
.core-value-card {
  border-radius: 24px 0 24px 0;
  border: 1px solid rgba(49, 69, 68, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.cv-icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 16px 0 16px 0;
  transition: all 0.4s ease;
}
.cv-icon { transition: all 0.3s ease; }
/* Core Value Hover Interactions */
.core-value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(49, 69, 68, 0.1) !important;
  border-color: var(--q-primary);
}
.core-value-card:hover .cv-icon-wrapper {
  background-color: var(--q-primary) !important;
  border-radius: 0 16px 0 16px;
}
.core-value-card:hover .cv-icon {
  color: white !important;
  transform: scale(1.1);
}

/* Mission/Vision Cards */
.modern-card { 
  border: none; 
  border-radius: 24px 0 24px 0; 
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease; 
}
.modern-card:hover { 
  transform: translateY(-10px); 
  box-shadow: 0 24px 48px rgba(49, 69, 68, 0.12) !important; 
}

/* Buttons */
.btn-primary-custom { 
  border-radius: 8px; 
  padding: 12px 0;
  font-weight: 800; 
  letter-spacing: 1px; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
}
.btn-primary-custom:hover { 
  background-color: #e6b85c !important; 
  transform: translateY(-3px); 
}

/* Animations */
.animate-fade-down { animation: fadeInDown 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
.animate-fade-right { animation: fadeInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.animate-fade-left { animation: fadeInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; }
.card-stagger { animation: fadeInUp 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; opacity: 0; transform: translateY(40px); }

@keyframes fadeInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

@media (max-width: 600px) {
  .structural-border { border-radius: 24px 0 24px 0; }
  .profile-card { border-radius: 0 24px 0 24px; }
  .core-value-card { border-radius: 16px 0 16px 0; }
  .modern-card { border-radius: 16px 0 16px 0; }
}
</style>
<script setup>
// --- ORIGINAL DATA PRESERVED ---
const paragraphs = [
  "We are a trusted construction and office fit-out company specializing in workplace renovation, interior improvements, and customized furniture solutions for modern businesses.",
  "With a commitment to quality craftsmanship and professional service, we help companies transform ordinary spaces into functional, efficient, and inspiring work environments. From planning and design to construction and furniture installation, we provide complete turnkey solutions tailored to the unique needs of every client.",
  "Our team combines industry expertise, innovative ideas, and attention to detail to deliver projects on time and within budget.",
  "Whether it's a corporate office, commercial space, meeting room, or collaborative workspace, we focus on creating environments that enhance productivity, reflect brand identity, and support business growth. We believe that every workspace should be built with quality, functionality, and long-term value in mind."
];

const mission = "To provide complete construction, office fit renovation, and furniture solutions that combine quality workmanship, innovative design, and dependable service to create productive and modern business spaces.";

const vision = "To be trusted industry leader in transforming workspaces through innovative construction solutions, modern interiors, and outstanding customer experience.";

// --- NEW DATA ADDED FOR PROFILE SYNERGY ---
const companyStats = [
  { label: "Combined Projects", value: "350+" },
  { label: "Years Experience", value: "15+" },
  { label: "Client Retention", value: "98%" }
];

const profileHighlights = [
  "End-to-end commercial design and build capability",
  "Extensive nationwide material sourcing network",
  "In-house specialized engineering and fabrication",
  "Rigorous corporate safety & compliance standards",
  "Dedicated long-term facility maintenance teams"
];

// --- NEW DATA FOR CORE VALUES UI ---
const coreValues = [
  { 
    icon: 'verified', 
    title: 'Quality Excellence', 
    desc: 'We deliver uncompromising craftsmanship and premium materials in every detail of our builds.' 
  },
  { 
    icon: 'handshake', 
    title: 'Integrity & Trust', 
    desc: 'Transparency, honesty, and ethical practices form the foundation of all our client relationships.' 
  },
  { 
    icon: 'health_and_safety', 
    title: 'Safety First', 
    desc: 'We strictly adhere to industry safety protocols to ensure a secure environment for our teams and clients.' 
  },
  { 
    icon: 'lightbulb', 
    title: 'Innovative Solutions', 
    desc: 'We embrace modern construction techniques and smart space planning to maximize your efficiency.' 
  }
];
</script>